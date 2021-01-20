import {combineReducers} from 'redux'

import day1Reducer from './day1Reducer'
import todoReducer from './todoReducer'

export default combineReducers({
  day1Reducer,
  todoReducer
})
