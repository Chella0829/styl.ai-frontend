const intial_state = {
    user :[],
}
const loginUser = (state = intial_state , action ) =>{
    return{
        ...state,
        user:action.payload,
   }
   
}

export default loginUser;