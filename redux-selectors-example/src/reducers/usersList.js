import { fromJS } from 'immutable';
import { FETCH_USERS, DELETE_USER } from '../actions/actionTypes';

const initialState = fromJS({ users: { byId: {} } });

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return state.mergeDeep(action.payload);
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId)
      };
    default:
      return state;
  }
};
