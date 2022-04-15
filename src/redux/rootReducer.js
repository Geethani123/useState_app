import { combineReducers } from "redux";
import reducer from "./cakes/cake/cakeReducer";
import iceCreamReducer from "./Icecream/icecreamReducer";
import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  cake: reducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer