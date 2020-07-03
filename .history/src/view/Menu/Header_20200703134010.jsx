import React from 'react'
import {Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="wrapper">
                    <div className="inner-header">
                        <Link to="/">Burger</Link>
                    </div>
                </div>
                <div className="menu">
                    <button>
                        menu
                    </button>
                </div>
            </div>
            
        </header>
    )
}


export default Header;
