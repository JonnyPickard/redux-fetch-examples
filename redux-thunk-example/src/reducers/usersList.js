import {
  USERS_LIST_FETCH_BEGIN,
  USERS_LIST_FETCH_SUCCESS,
  USERS_LIST_FETCH_FAILURE
} from '../actions/actionTypes';

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case USERS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };
    case USERS_LIST_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        users: []
      };
    default:
      return state;
  }
};
