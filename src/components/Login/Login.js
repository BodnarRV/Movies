import React, { useState } from "react";
import './Login.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from "../Button/Button";
import Checkbox from "../CheckBox/Checkbox";

import Logo from '../../../src/assets/logo.svg'

function Login({ onClose }) {
    const handleCloseClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="container__blured">
            <div className="container__blured-loginForm">
                <button className="container__blured-loginForm-closeBtn" onClick={handleCloseClick}></button>
                <img className="container__blured-loginForm-logo" src={Logo}></img>
                <Tabs className="container__blured-loginForm-tabs">
                    <TabList>
                        <Tab>LOG IN</Tab>
                        <Tab>REGISTRATION</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="container__blured-loginForm-loginFrom">
                            <input className="container__blured-loginForm-email" placeHolder="Email" type="email"></input>
                            <input className="container__blured-loginForm-password" placeHolder="Password" type="password"></input>
                            <Checkbox title="Remember me" />
                            <Button title="SIGN IN" classNames="container__blured-loginForm-loginFrom-button" />
                            <span className="container__blured-loginForm-loginFrom-forgotPassword">
                                <a href="/">
                                    Forgot password?
                                </a>
                            </span>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="container__blured-loginForm-loginFrom">
                            <input className="container__blured-loginForm-name" placeHolder="Name" type="text"></input>
                            <input className="container__blured-loginForm-email" placeHolder="Email" type="email"></input>
                            <input className="container__blured-loginForm-password" placeHolder="Password" type="password"></input>
                            <Button title="SIGN UP" classNames="container__blured-loginForm-loginFrom-button" />
                            <Checkbox title="I agree to the Privacy policy" />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Login