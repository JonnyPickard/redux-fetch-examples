import { FETCH_USERS, DELETE_USER } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId)
      };
    default:
      return state;
  }
};
