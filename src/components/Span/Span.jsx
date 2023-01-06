import React from "react";
import './Span.css'

const Span = (props) => {
    return (
        <span
            className={props.className}
        >{props.value}</span>
    );
}

export default Span