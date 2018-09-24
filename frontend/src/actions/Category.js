import * as API from '../utils/api';

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_CATEGORIES_POSTS = "FETCH_CATEGORIES_POSTS";

//GET /categories
export const fetchCategories = categories => ({
  type: FETCH_CATEGORIES,
  categories
});

//GET /:category/posts
export const fetchCategoriesPost = posts => ({
  type: FETCH_CATEGORIES_POSTS,
  posts
});

export const getCategories = () => dispatch => (
    API
      .getCategories()
      .then(categories => dispatch(fetchCategories(categories)))
);

export const getCategoriesPost = (category) => dispatch => (
    API
      .getCategoriesPost(category)
      .then(posts => dispatch(fetchCategoriesPost(posts)))
);