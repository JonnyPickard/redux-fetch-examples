# Redux Thunk

## About

`redux-thunk` middleware is middleware for redux that allows you to return a function from action creators.

After you have connected your component to redux you can dispatch an action creator parent function that returns a function with dispatch passed in as an argument.

Benefits of using this approach are that you can dispatch multiple actions to highlight what state your fetch request 
is in:

```js 
{
  users: [{
    data: [],
    loading: false,
    error: false
  }]
}
```
> Unpopulated initial state

<br />

```js 
{
  users: [{
    data: [],
    loading: true,
    error: false
  }]
}
```
> Loading state

<br />

```js 
{
  users: [{
    data: [
      ...userData
    ],
    loading: false,
    error: false
  }]
}
```
> Success state

<br />

## Dispatching Actions

1.
```js
// UsersList.js React Component

componentDidMount() {
  this.props.dispatch(fetchUsers());
}
```
> Initally dispatching the parent fetchUsers action creator.  

<br />


2.
```js
// actionCreators/usersList

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersBegin());

    return getUsers()
      .then(({ data }) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

export const fetchUsersBegin = () => {
  return {
    type: USERS_LIST_FETCH_BEGIN
  };
};

export const fetchUsersSuccess = users => {
  return {
    type: USERS_LIST_FETCH_SUCCESS,
    payload: { users }
  };
};

export const fetchUsersFailure = error => {
  return {
    type: USERS_LIST_FETCH_FAILURE,
    payload: { error }
  };
};
```
> Dispatching START, FAILURE & SUCCESS fetchUsers action creators.
> This is done using the reference to the redux dispatch() function that is passed in to the return function.

<br />

3.
```js
// reducers/usersList.js

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case USERS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };
    case USERS_LIST_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        users: []
      };
    default:
      return state;
  }
};

```
> Altering state when recieving different actions from the action creators.