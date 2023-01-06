import React from "react";
import food from "../../images/food.jpg"
import './Image.css';

const Image = (props) => {
    return (
        <img
            src={food}
            width={props.width}
            height={props.height}
            alt={props.alt}
        />
    );
}

export default Image;