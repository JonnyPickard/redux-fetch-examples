# Redux Promise

## About

`redux-promise` middleware is middleware for redux that allows you to return a promise from action creators. 

You can also return a standard { type, payload } object where the payload is a promise. `redux-promise` will then resolve that payload value.

```js
export const fetchUsers = async () => {
  return {
    type: USERS_LIST_LOADED,
    payload: {
      users: [
        {
          id: '1',
          firstName: 'Billy'
        }
      ]
    }
  });
};
```
> Returning a promise

```js
export const fetchUsers = () => {
  return {
    type: USERS_LIST_LOADED,
    payload: Promise.resolve({
      users: [
        {
          id: '1',
          firstName: 'Billy'
        }
      ]
    })
  });
};
```
> Returning an object with a promise payload