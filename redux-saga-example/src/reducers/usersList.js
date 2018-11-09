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
