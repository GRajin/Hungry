import React from "react";
import "./HeaderBar.css"
import {Link} from "react-router-dom"
import Food from "../../images/food.jpg"

const HeaderBar = () => {
    return (
        <div className="header">
            <div className="header-content child">
                <Link to="/">
                    <img className="header-logo" src={Food} alt="Logo" />
                </Link>
                <div className="user-name">
                    <span>Hello Rajin</span>
                    <i></i>
                </div>
            </div>
        </div>
    );
}

export default HeaderBar;