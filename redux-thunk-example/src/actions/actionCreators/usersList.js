import { USERS_LIST_LOADED } from '../actionTypes';

export const fetchUsers = () => {
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
  };
};
