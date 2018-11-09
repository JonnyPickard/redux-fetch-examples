import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_USERS, ADD_USERS } from '../actions/actionTypes';

export function* fetchUsers() {
  const { data } = yield axios.get('http://localhost:3001/users');

  yield put({ type: ADD_USERS, payload: { users: data } });
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
