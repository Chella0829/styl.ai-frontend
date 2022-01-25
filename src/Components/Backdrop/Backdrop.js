import React from "react";
import './Backdrop.css';

const Backdrop = props => (
    <div className="backdrop" onClick={props.onClick} />
);

export default Backdrop;