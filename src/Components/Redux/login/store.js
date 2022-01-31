import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loginUser from "./reducer";
const store = createStore(loginUser, {}, composeWithDevTools());



export default store;