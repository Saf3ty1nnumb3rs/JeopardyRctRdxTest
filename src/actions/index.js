import * as actions from './actionTypes';

export function setCategories(categories) {
  return {
    type: actions.SET_CATEGORIES,
    categories
  }
}