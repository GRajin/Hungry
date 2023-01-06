import React from "react";
import "./Link.css"

const Link = (props) => {
    return (
        <a href="#" className={props.className}>{props.value}</a>
    );
}

export default Link;