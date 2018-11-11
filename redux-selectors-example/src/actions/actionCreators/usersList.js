import axios from 'axios';

import { USERS_LIST_LOADED } from '../actionTypes';

export const fetchUsers = () => {
  const fetchUsersPromise = axios.get('http://localhost:3001/users');

  return {
    type: USERS_LIST_LOADED,
    payload: fetchUsersPromise
  };
};
