import React from "react";
import './Input.css'

const Input = (props) => {
    return (
        <input
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(event) => props.onChange(event)}
        />
    );
}

export default Input;