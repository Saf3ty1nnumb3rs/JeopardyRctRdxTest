import * as types from '../actions/actionTypes';

function categories(state = [], action) {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

export default categories;