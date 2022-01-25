import { createStore } from "redux";
import loginUser from "./loginReducer";
const store = createStore (loginUser);



export default store;