import React from 'react'
import burger from './../page/Home/menu-burger-2.svg';
import logo from './../page/Home/logo-Debriefs.png';
import social from './../page/Home/SOCIAL.png'
import './menu.scss';

export default function Menu() {
    return (
        <div className="menu">
            <div className="menu-items">
            <img src={burger} alt=""/>
            <img src={logo} alt=""/>
            <img src={social} alt=""/>

            </div>
        </div>
    )
}

