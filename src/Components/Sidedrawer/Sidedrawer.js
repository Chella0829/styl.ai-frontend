import React from "react";
import { Link } from "react-router-dom";
import './Sidedrawer.css';
import logo from '../../Assets/image/logo.png';

const Sidedrawer = props => {
    let drawerclasses = 'side-drawer';
    if(props.show){
        drawerclasses = 'side-drawer open';
    }
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
                <li><i className="fa fa-tachometer" aria-hidden="true"></i><Link to='/home'>{"  "}Dashboard</Link></li>
                <li><i className="fa fa-folder-open" aria-hidden="true"></i><Link to='/folders'>{" "}Folders</Link></li>
                <li><i className="fa fa-briefcase" aria-hidden="true"></i><Link to='/package'>{" "}Package</Link></li>
                <li><i className="fa fa-users" aria-hidden="true"></i><Link to='/register'>{" "}Register</Link></li>
            </ul>
         </div>
        </nav>);
};

export default Sidedrawer;