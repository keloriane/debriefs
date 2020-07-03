import React from 'react';
import "./home.scss";
import Menu from './../../Menu/Menu';
import Background from './home.png';

export default function Home() {

    return (
        <div id="home">
            <div className="left-gap">
                <div className="void"></div>
                <div className="logo-container"></div>
                <div className="side-home-bar">
                <div className="image-wrapper">
                    
                </div>
                    <div className="img-bg">
                        <img src={Background}/>
                    </div>

                </div>
            </div>
            <div className="right-gap">
            <div className="text-container">
                <h2>Agence Digitale</h2>
                <h3>BRANDING, SITE WEB, FORMATION CYBERSECURITY, DIGITAL MARKETING</h3>

                <p>Notre spécificité un parfait mixte entre Marketing digital et Sécurité en ligne !</p>
            </div>

            </div>
            <Menu/>
        </div>
    )
}
