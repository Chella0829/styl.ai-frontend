import { useState } from "react";
import { Link } from "react-router-dom";
import './Sidedrawer.css';
import logo from '../../Assets/image/logo.png';
import { useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";





const Sidedrawer = props => {
    let drawerclasses = 'side-drawer';
    if(props.show){
        drawerclasses = 'side-drawer open';
    }
    const user = useSelector(state =>state.login.user.type);
    const [adminDash, setAdminDash]= useState(false);
    const [clientDash, setClientDash] = useState(false);
    useEffect(() => {
        if(user === 'admin'){
            setAdminDash(true)
        } else {
            setAdminDash(false)
        }
        if(user === 'client'){
             setClientDash(true)
         }else{
             setClientDash(false)
         }
    })
    return (
        <nav className={drawerclasses}>
           
         <div className="mobilelogo"> <img src={logo} alt="Logo-Missing" width={250}/></div>
         <br />
         <div className="mobilehide">
         <div className="mobile-profile">
         <i className="fa fa-user-circle" aria-hidden="true"></i><a href=""> {" "}Pikture</a>
         </div>
         <br />
         <hr/>
         </div>
         <br />
         <div className="dash-icons">
            <ul>
                {clientDash &&<li><i className="fa fa-tachometer" aria-hidden="true"></i><Link to='/home'>{"  "}Dashboard</Link></li>}
                {clientDash &&<li><i className="fa fa-folder-open" aria-hidden="true"></i><Link to='/folders'>{" "}Folders</Link></li>}
                {clientDash &&<li><i className="fa fa-briefcase" aria-hidden="true"></i><Link to='/package'>{" "}Package</Link></li>}
                {adminDash &&<li><i className="fa fa-users" aria-hidden="true"></i><Link to='/register'>{" "}Register</Link></li>}
                {adminDash && <li><i className="fa fa-users" aria-hidden="true"></i><Link to='/adminDashboard'>{" "}Admin</Link></li>}
            </ul>
         </div>
        </nav>);
};

export default Sidedrawer;