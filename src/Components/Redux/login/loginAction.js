import { POST_USER } from "./loginTypes";
export const postUser = (email, password, name, type, id , token) => {
    return{
        type:POST_USER,
        payload:{
            id,
            email,
            password,
            name,
            type,
            token
            
        }
    }
}