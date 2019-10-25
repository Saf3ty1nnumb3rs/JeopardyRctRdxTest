import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes';

function categories(state = [], action) {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function category(state = {}, action) {
  switch (action.type) {
    case types.PICK_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

export default combineReducers({ categories, category });
