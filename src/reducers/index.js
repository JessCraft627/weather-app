import { ADD_USER } from './../actions'

export default function weatherReducer(state = {users: []}, action) {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        users: state.items.concat(action.user)
      });
    default:
      return state;
  }
}
