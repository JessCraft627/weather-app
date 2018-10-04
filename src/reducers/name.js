import {LOGIN_USER} from './../actions' 

const initialState = null


export default function nameReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER:
        return action.payload
      default:
        return state
    }
  }