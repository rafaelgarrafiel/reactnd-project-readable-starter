import { combineReducers } from 'redux';
import { Post } from './Post'
import { Category } from './Category'
import { Comment } from './Comment'

const rootReducer = combineReducers({
  Post,
  Comment,
  Category
});

export default rootReducer;
