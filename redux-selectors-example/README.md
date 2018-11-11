# Redux Selectors with ReSelect, Immutable JS & Normalized State

## About

Repo to go over selectors, immutable redux and normalized redux state stores.

## Javascript Selectors

Selectors are functions that are used to select a subset data from a larger data collection.

Basic example of a selector:

```js
const getUsers = (state) => state.users
```

## ReSelect

The point of reselect is that it uses memoization to only perform the select operation once unless the arguments provided to the selector change.

## Mutability vs Immutability

In JavaScript all objects have a reference id. The comparison operator === checks between 2 reference id's 

e.g. 

```js
var obj = {}
var obj2 = obj

obj === obj2 (true)

obj.x = 12

console.log(obj2.x) (12)
```

## The Problem

You can mutate the original object in multiple places across the app leading to weird consequences.

## Immutabily Updating Objects

This is where instead of changing the original object you clone it into a new object. You therefor don't change an object that may be being used in other places across the app.

```js
var obj = {}
var obj2 = {...obj} // NOTE: this only clones 1 level deep

obj.x = 12

console.log(obj2.x) (undefined)
```

## Immutable JS

[Immutable JS](https://facebook.github.io/immutable-js/) is a library which doesn't let you mutate objects created with it. If you create a redux store with it you avoid a lot of re-rendering bugs caused by returning a mutated state object from a reducer. 

## Deep Nested Objects

In order to clone a deeply nested object in javascript you have to clone at each nested level. Spread or object.assign only clone values therefor if a value is a reference to an object then you are still referencing the original object.

A Redux store can quickly become a deep nested object. Therefor it is encouraged to keep it as flat as possible.

```js
// Example of updated deep nested state in redux immutably
// Note you have to clone each level from the root level down the tree to the change you wish to 
// make. 
// This creates as many new objects as levels deep you have to go

function updateNestedState(state, action) {
  return {
    ...state,
    first: {
      ...state.first,
      second: {
        ...state.first.second,
        [action.someId]: {
          ...state.first.second[action.someId]m
          fourth: action.someValue
        }
      }
    }
  }
}
```

Each UI component that references a particular object on the state tree will get re-rendered if the tree changes. You can therefor change a deep nested object in one place and multiple other components across the app will re-render.

## Normalized State

In order to re-render as few components as possible when data is changed the Redux store should be kept in a Normalized form.


```js
// Example response from the api
/*
The problem with using this as part of the store is that if one user gets updated or removed the whole array object gets updated.
This likely will cause every UI components referencing an array element to update.
*/

{
  "users": [
    {
      "id": "1",
      "firstName": "Billy",
      "username": "BillyTheKid"
    },
    {
      "id": "2",
      "firstName": "Jesse",
      "username": "JesseJames"
    },
    {
      "id": "3",
      "firstName": "Arthur",
      "username": "ArthurMorgan"
    }
  ]
}
```

We therefor should normalize the data before adding it to the redux store like so:

```js
// Normalized data

/*
Here if we update a particular user object we only have to re-render every component referencing that user object.

We can use the allIds array of keys to reference every user object during a map etc.
*/
{
  "users": {
    "byId": {
      "user1": {
        "id": "1",
        "firstName": "Billy",
        "username": "BillyTheKid"
      },
      "user2": {
        "id": "2",
        "firstName": "Jesse",
        "username": "JesseJames"
      },
      "user3":{
        "id": "3",
        "firstName": "Arthur",
        "username": "ArthurMorgan"
      }
    },
    "allIds": ["user1", "user2", "user3"]
  }
}
```

## Normalizr

[Normalizr](https://github.com/paularmstrong/normalizr) is a library that allows you to define schemas for the normalized state you wish your data to be stored in. You can then use these schemas to convert your data into the correct shape.

