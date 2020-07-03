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
                                <li> <Link href="/a-propos"> à propos </Link> </li>
                                <li> <Link href="/services"> Services </Link> </li>
                                <li> <Link href="/webinaires"> Webinaires </Link> </li>
                                <li> <Link href="/clients"> Clients </Link> </li>
                                <li> <Link href="/contact"> Contact </Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;