# Redux Saga

## About

`redux-saga` is redux middleware that works alongside redux to help manage application side effects.

In a nutshell it adds an intermediate step in which it performs some data computation or data fetching before dispatching another action with the resulting data.

Component -> Action -> Saga -> Action -> Reducer -> Store

```js
// UsersList.js

componentDidMount() {
  this.props.dispatch({ type: FETCH_USERS });
}
```

```js
// sagas/usersLists.js

// 1. watches for FETCH_USERS actions and can decide whether or not to use the action
// This depends on which redux saga helper is used
// In this case it will call the fetchUsers function
export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}

// 2. fetchUsers is called by watchFetchUsers
// It can then perform computation or fetch requests
export function* fetchUsers() {
  const { data } = yield axios.get('http://localhost:3001/users');

  // 3. When the result from the fetch comes back yield put is called with the payload
  // This is basically a wrapper around dispatch and just dispatches the ADD_USERS action
  yield put({ type: ADD_USERS, payload: { users: data } });
}
```

```js
// reducers/usersList.js

// 4. Finally the ADD_USERS reducer is used as normal and updates the redux store
import { ADD_USERS } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: action.payload.users
      };
    default:
      return state;
  }
};
```