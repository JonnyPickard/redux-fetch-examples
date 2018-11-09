import { all, fork } from 'redux-saga/effects';

import { watchFetchUsers } from './usersList';

export default function* rootSaga() {
  yield all([fork(watchFetchUsers)]);
}
