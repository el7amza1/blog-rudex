import posts from './post.reducers'
import User from './user.reducers'
import { combineReducers } from 'redux';

const reducers = combineReducers({posts , User})

  export default reducers;