import * as actions from './actionTypes';

export function setCategories(categories) {
  return {
    type: actions.SET_CATEGORIES,
    categories
  }
}

export function pickCategory(category) {
  console.log('Action', category);
  return {
    type: actions.PICK_CATEGORY,
    category
  }
}