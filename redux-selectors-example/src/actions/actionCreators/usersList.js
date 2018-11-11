import axios from 'axios';

import { FETCH_USERS, DELETE_USER } from '../actionTypes';

export const fetchUsers = () => dispatch => {
  axios.get('http://localhost:3001/users').then(({ data }) => {
    dispatch({
      type: FETCH_USERS,
      payload: data
    });
  });
};

export const deleteUser = userId => dispatch => {
  axios.delete('http://localhost:3001/users/' + userId).then(
    dispatch({
      type: DELETE_USER,
      payload: {
        userId
      }
    })
  );
};
