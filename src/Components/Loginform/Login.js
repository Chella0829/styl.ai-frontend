import axios from 'axios';
import { useState } from 'react';
import { useDispatch, /*useSelector*/ } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { postUser } from '../Redux/login/loginAction';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [eye, setEye] = useState(false);
    
    const dispatch = useDispatch();
    const history = useNavigate();

    const userChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordchange = (e) => {
        setPassword(e.target.value);
    }

    const eyeClick = () => {
        setEye(!eye);
    }

     const loginUser= async(e) =>{
         e.preventDefault();
        const data = {
            email:email,
            password:password
        }
         try {
            //  await axios({
            //      method : "post",
            //      url:"http://localhost:3002/api/login",
            //      data :{
            //          email:email,
            //          password:password
            //      }
            //  }).then(res => new user(res.data.user))
            //  .then(userName = user.name, userType = user.type)
            //  .then(console.log(userName), console.log(userType), console.log(user))
            //  .then(setPassword(""), setEmail(""))
            //  dispatch(
            //      postUser(email, password, userName, userType)
            // 

            //  )
            const api = await axios.post('http://localhost:3002/api/login', data);   
            await dispatch(postUser(email, password, api.data.user.name, api.data.user.type, api.data.user._id));
            setEmail(''); setPassword('');
            console.log(api)
            localStorage.setItem('token',api.data.token)
            return history("/home");
         } catch (error) {
             console.log(error);
         }
     }
    return (
        <div className='Login'>
            <div className='box'>
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                    <div className='inputbox'>
                        <input type="email"  required value={email} onChange={userChange} />
                        <label>User</label>
                    </div>
                    <div className='inputbox'>
                        <input type={eye ? "text" : "password"}  required value={password} onChange={passwordchange} />
                        <i class={eye ? "fa fa-eye-slash" : "fa fa-eye"} onClick={eyeClick} aria-hidden="true"></i>
                        <label>Password</label>
                    </div>
                    <div className='forget'>
                        <p>forget password ?</p>
                    </div>
                    <button >Submit</button>
                </form>
            </div>
        </div>
        
    );
}

export default Login;