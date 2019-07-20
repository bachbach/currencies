import { combineReducers } from 'redux'
import currencies from './currencies'
import errors from './errors'

const appReducer = combineReducers({
  currencies,
  errors
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
