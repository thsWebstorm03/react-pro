import { combineReducers } from 'redux'
import authReducer, { moduleName as authModule } from '../ducks/auth'

export default combineReducers({
  [authModule]: authReducer
})
