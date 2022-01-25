import { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const[name,setName] = useState("");
        const nameChange = (e) =>{
            setName(e.target.value);
        }
        const[email,setEmail]=useState("");
        const emailChange=(e) =>{
            setEmail(e.target.value);
        }
        const[phoneNumber,setPhoneNumber]=useState();
        const phoneChange=(e) =>{
            setPhoneNumber(e.target.value);
        }
        const[address,setAddress]=useState("");
        const addressChange=(e) =>{
            setAddress(e.target.value);
        }

        const addUser = async(e) =>{
            e.preventDefault();
            try {
                await axios({
                    method : "post",
                    url : "http://localhost:3002/api/register",
                    data :{
                        name  : name,
                        email: email,
                        phoneNumber: phoneNumber,
                        address: address,
                    }
                    
                }).then (setName(""))
                   .then(setEmail(""))
                   .then(setPhoneNumber(""))
                   .then(setAddress(""));
              
            } 
             catch (error) {
                console.log(error);
            }
        }
    
    return ( 
        <div className='Register'>
        <div className='box'>
            <h2>Registration</h2>
            <form  onSubmit={addUser} >
                <div className='inputbox'>
                    <input type="text" name="" required value={name} onChange={nameChange} />
                    <label>Name </label>
                </div>
                <div className='inputbox'>
                    <input type="email" name="" required value={email} onChange={emailChange} />
                    <label>E-mail </label>
                </div>
                <div className='inputbox'>
                    <input type="number" name="" required value={phoneNumber} onChange={phoneChange} />
                    <label>Phone Number </label>
                </div>
                <div className='inputbox'>
                    <input type="text" name="" required value={address} onChange={addressChange} />
                    <label>Address </label>
                </div>                
                {/* <br /> */}
                <button >Submit</button>
            </form>
        </div>
    </div>
     );
}
 
export default Register;