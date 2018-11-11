import { fromJS } from 'immutable';
import { FETCH_USERS, DELETE_USER } from '../actions/actionTypes';

const initialState = fromJS({ users: { byId: {} } });

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return state.mergeDeep(action.payload);
    case DELETE_USER:
      const userId = action.payload.userId;
      const userKey = 'user' + userId;
      const allIds = state.getIn(['users', 'allIds']);

      // Remove the user object from the users>byId state
      const removeUserState = state.removeIn(['users', 'byId', userKey]);
      // Remove the user id from the allIds array
      const removeUserIdState = removeUserState.setIn(
        ['users', 'allIds'],
        allIds.filter(id => id !== userId)
      );

      return removeUserIdState;
    default:
      return state;
  }
};
