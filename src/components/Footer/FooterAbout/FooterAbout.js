import React from "react";
import './FooterAbout.css'
import Logo from '../../../assets/logo.svg'
import { IconFacebook, IconInstagram, IconBxlTelegram, IconTwitter, IconYoutube, IconApple } from "./FooterAboutSvg"

function FooterAbout() {
    const socialArray = [
        <IconFacebook />, <IconInstagram />, <IconBxlTelegram />, <IconTwitter />, <IconYoutube />, <IconApple />
    ]

    return (
        <div className="container__about">
            <img className="container__about-image" src={Logo}></img>
            <p className="container__about-text">
                Movies & TV Shows, Online cinema,
                <br></br>
                Movie database HTML Template.
                <br></br>
                The perfect choice for your project.
                <br></br>
            </p>
            <ul className="container__about-social">
                {socialArray.map((icon, index) =>
                    <li className="container__about-social-item">
                        <a className="container__about-social-item" href="/">
                            {icon}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FooterAbout