import { createStore } from 'redux'
import weatherReducer from './reducers/index'

const store = createStore(weatherReducer)

export default store
