import {UPDATE_USER, UPDATE_SHARED, UPDATE_EMAIL, COMPLETE_UPDATE} from './actionTypes/actionTypes'

const initialState = { complete: false, user: {id: undefined, shared: undefined, email: undefined} }

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_USER:
      return { ...state, user: action.payload }
    case UPDATE_SHARED:
        return { ...state, user: {...state.user, shared: action.payload} }
    case UPDATE_EMAIL:
        return { ...state, user: {...state.user, email: action.payload} }
    case COMPLETE_UPDATE:
            return { ...state, complete: action.payload }
    default:
      return state
  }
}

export default reducer