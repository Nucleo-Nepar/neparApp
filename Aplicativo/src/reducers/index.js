import { combineReducers } from 'redux'

import AppReducer from './AppReducer'
import AutenticationReducer from './AutenticationReducer'

export default combineReducers({
  AppReducer,
  AutenticationReducer,
})
