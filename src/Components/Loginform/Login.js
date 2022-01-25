import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../Redux/login/loginAction';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const dispatch = useDispatch();

    const userChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordchange = (e) => {
        setPassword(e.target.value);
    }

     const loginUser= async(e) =>{
         e.preventDefault();
         let userName = '';
         try {
             await axios({
                 method : "post",
                 url:"http://localhost:3002/api/login",
                 data :{
                     email:email,
                     password:password
                 }
             }).then(res => userName = res.data.user.name)
             .then(setPassword(""), setEmail(""))
             console.log(email,password)
             dispatch(
                 postUser(email, password, userName)
             )
             
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
                        <input type="password"  required value={password} onChange={passwordchange} />
                        <label>Password</label>
                    </div>
                    <div className='forget'>
                        <p>forget password ?</p>
                    </div>
                    {/* <br /> */}
                    <button >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;