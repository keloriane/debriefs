import React from "react";
import {Link,Router } from "react-router-dom";
function Menu() {


    return (
        <div className="main-menu">
            <div className="menu-secondary-layer"> </div>
            <div className="menu-layer">
                <div className="menu-container">
                    <div className="inner-menu-logo">

                    </div>

                    <div className="menu-links">
                        <nav>
                            <ul>
                                <li> <a href="/a-propos"> à propos </a> </li>
                                <li> <a href="/services"> Services </a> </li>
                                <li> <a href="/webinaires"> Webinaires </a> </li>
                                <li> <a href="/clients"> Clients </a> </li>
                                <li> <a href="/contact"> Contact </a> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;