import React from "react";
import "./footer.scss"
import minWhite from "./../../../assets/images/logo-min-white.png";

const Footer = () => {
    return (
        <div id="footer">
            <div className="logo-footer">
            <img src={minWhite} alt=""/>

            </div>
            <div className="links">
            <a href="">politique de confidentialité</a>

            </div>
        </div>
    )
}
export default Footer;