import * as actionTypes from "./loginTypes";

const INITIAL_STATE = {
    user: [],
}

const loginReducer = (state = INITIAL_STATE, action ) =>{
    switch (action.type) {
        case actionTypes.POST_USER:
          return {
            ...state,
            user: action.payload,
          };
        default:
            return state;
        }
   
}

export default loginReducer;