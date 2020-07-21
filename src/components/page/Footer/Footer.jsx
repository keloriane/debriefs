import React from "react";
import "./footer.scss"
import minWhite from "./../../../assets/images/logo-min-white.png";

const Footer = () => {
    return (
        <div id="footer">
            <img src={minWhite} alt=""/>
            <a href="">politique de confidentialité</a>
        </div>
    )
}
export default Footer;