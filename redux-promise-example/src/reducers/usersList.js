import { USERS_LIST_LOADED } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case USERS_LIST_LOADED:
      return {
        ...state,
        users: action.payload.data
      };
    default:
      return state;
  }
};
