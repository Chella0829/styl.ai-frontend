import React from "react";
import profile from '../../Assets/image/profile.png';
import Drawertoggle from "../Sidedrawer/Drawertoggle";
import logo from '../../Assets/image/logo.png';
import './Toolbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Toolbar = (props) => {
    const userName = useSelector(state => state.user.name);
    console.log(userName);
    return (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <Drawertoggle onClick={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"> <img src={logo} alt="Logo-Missing" /></div>
            {/* <div className="spacer" /> */}
            <div className="toolbar_navigation_item">
                <ul>
                    <li>
                    <Link to='/reset-password'>{"  "}{userName}</Link>
                        {/* <a href="">User name</a> */}
                    </li>
                    <li> <img src={profile} alt='' width={40} /></li>
                </ul>
            </div>
        </nav>
    </header>
    )
};

export default Toolbar;