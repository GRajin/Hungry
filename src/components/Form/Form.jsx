import React from "react";
import Input from "../Input/Input"
import Button from "../Button/Button"
import Span from "../Span/Span";
import Link from "../Link/Link";
import "./Form.css"
import { useState } from "react";

const Form = (props) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    return (
        <form className={props.className}>
            <Input className="username" type="text" placeholder="Username" value={userName} onChange={(event) =>  setUserName(event.target.value)}/>
            <Input className="password" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            <Button className="btn-submit" type="submit" value="Login" />
            <Span className="forgot-pass" value="Forgot Password? " />
            <Link className="forgot-link" value="Click Here" />
        </form>
    );
}

export default Form;