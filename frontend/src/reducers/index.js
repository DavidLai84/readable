import { combineReducers } from 'redux'
import postDetailReducer from './postDetailReducer'
import postListReducer from './postListReducer'

const rootReducer = combineReducers({
  postListReducer,
  postDetailReducer,
})

export default rootReducer