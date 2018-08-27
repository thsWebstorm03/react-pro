import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducer'

const enhancer = applyMiddleware(thunk, logger)

const store = createStore(reducer, enhancer)

//dev only
window.store = store

export default store
