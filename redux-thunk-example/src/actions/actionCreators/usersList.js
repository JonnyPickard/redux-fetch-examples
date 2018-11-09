import axios from 'axios';

import {
  USERS_LIST_FETCH_BEGIN,
  USERS_LIST_FETCH_SUCCESS,
  USERS_LIST_FETCH_FAILURE
} from '../actionTypes';

const getUsers = () => {
  return axios.get('http://localhost:3001/users');
};

export const fetchUsers = dispatch => {
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
