import axios from "axios"
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./UserType"


export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetchSuccess = users => {
  return {
    type: FETCH_SUCCESS,
    payload: users
  }
}

export const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}

export const fetchusers = () => {// instead of returning action it returns function
  return (dispatch) => {// this function not allowed pure , it access side effect here and receive dispatch as argument
    dispatch(fetchRequest)
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data
        // console.log(response);
        dispatch(fetchSuccess(users))
      })
      .catch(error => {
        const errorMsg = error.message
        // console.log(error);
        dispatch(fetchFailure(errorMsg))
      })

  }


}