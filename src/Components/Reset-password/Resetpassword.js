import './Resetpassword.css';
const Resetpassword = () => {
    return ( 
        <div className='Reset'>
        <div className='box1'>
            {/* <h2>Login</h2> */}
            <form>
                <div className='inputbox'>
                    <input type="password" name="" required />
                    <label>Reset-Password</label>
                </div>
                <div className='inputbox'>
                    <input type="password" name="" required />
                    <label>Confirm Reset-Password</label>
                </div>
                <button>Done</button>
            </form>
        </div>
    </div>
     );
}
 
export default Resetpassword;