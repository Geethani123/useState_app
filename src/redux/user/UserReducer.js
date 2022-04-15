
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./UserType"

const initialState = {
  loading: false,
  users: [],
  error: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ""
      }
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }

}

export default userReducer