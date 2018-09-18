import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const addCategory = ({ name, path}) => ({
    type: ADD_CATEGORY,
    name,
    path
});

export const fetchCategories = () => dispatch => (
    API
      .getAll()
      .then(categories => dispatch(receiveCategories(categories)))
);