import { combineReducers } from 'redux';

import { Post } from './Post'
import { Category } from './Category'

const rootReducer = combineReducers({
  Post,
  Category
});
export default rootReducer;
