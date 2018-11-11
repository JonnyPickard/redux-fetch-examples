import axios from 'axios';

import { FETCH_USERS, DELETE_USER } from '../actionTypes';

import { normalizeUsers } from '../../normalizers/usersNormalizer.js';

export const fetchUsers = () => dispatch => {
  axios.get('http://localhost:3001/users').then(({ data }) => {
    dispatch({
      type: FETCH_USERS,
      payload: { users: normalizeUsers(data) }
    });
  });
};

export const deleteUser = userId => dispatch => {
  axios.delete('http://localhost:3001/users/' + userId).then(
    // On success delete the user else don't dispatch an action
    dispatch({
      type: DELETE_USER,
      payload: {
        userId
      }
    })
  );
};
