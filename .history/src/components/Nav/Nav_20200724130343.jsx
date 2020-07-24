import React from 'react'
import "./nav.scss";
import {  Link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav className="home-nav">
            <ul>
                <li><Link onClick={props.animation}>SERVICES</Link></li>
                <li><Link onClick={props.animation1}>ABOUT</Link></li>
                <li><Link onClick={props.animation2}>TECHSPACE</Link></li>
                <li><button> <Link onClick={props.animation3}></Link> Blog</button></li>
            </ul>
        </nav>

    )
}
export default Nav;