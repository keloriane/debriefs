import React from 'react'
import "./nav.scss";
import {  Link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav className="home-nav">
            <ul>
                <li><Link onClick={props.animation}>ACCUEIL</Link></li>
                <li><Link onClick={props.animation}>SERVICES</Link></li>
                <li><Link onClick={props.animation1}>WEBINAIRE</Link></li>
                <li><Link onClick={props.animation2}>TECHSPACE</Link></li>
                <li><button> <Link onClick={props.animation3}> BLOG </Link></button></li>
            </ul>
        </nav>

    )
}
export default Nav;