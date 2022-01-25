import { POST_USER } from "./loginTypes";
export const postUser = (email,password,name) => {
    return{
        type:POST_USER,
        payload:{
            email,
            password,
            name
        }
    }
}