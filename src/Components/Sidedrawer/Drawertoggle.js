import React from "react";
import './Drawertoggle.css';

const Drawertoggle = props => (
    <button className="toggle-button" onClick={props.onClick}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
    </button>
)

export default Drawertoggle;