import React from "react";
import './Button.css';

const Button = (props) => {
    return (
        <button
            className={props.className}
            type={props.className}
        >{props.value}</button>
    );
}

export default Button;