import React from "react";
import './Footer.css'
import FooterAbout from './FooterAbout/FooterAbout'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <FooterAbout />
            </div>
        </footer>

    )
}

export default Footer