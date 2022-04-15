import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import logger from "redux-logger"
import rootReducer from "./rootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))// here passing composeWithDevTools as a second parameter in order touse redux dev tool
// const store = createStore(rootReducer, applyMiddleware(logger)) // this is enough for apply middleware
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))



export default store

// the middleware basically locks information related to the redux store