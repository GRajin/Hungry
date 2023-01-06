import React from "react";
import "./H1.css"

const H1 = (props) => {
    return (
        <h1
            className={props.className}
        >{props.value}</h1>
    );
}

export default H1;