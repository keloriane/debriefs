import React from 'react'
import burger from './../page/Home/menu-burger-2.svg';
import logo from './../page/Home/logo-Debriefs.png';
import social from './../page/Home/SOCIAL.png'
import './menu.scss';

export default function Menu() {
    return (
        <div className="menu">
            <div className="menu-items">
            <img className="burger-menu"  alt="menu" src={burger}/>
            <img  alt="logo" src={logo} />
            <img  alt="social" src={social} />

            </div>
        </div>
    )
}

