import React,{useEffect, useRef} from "react";
import {Link,Router } from "react-router-dom";
function Menu({state}) {

    let menu = useRef(null);

    useEffect(()=> {
        if(state.clicked === false) {
            //close
            menu.style.display="none"
        } else if (state.clicked === true || state.clicked === true && state.initial === null ){
            //open it 
            
        }{
            
            menu.style.display="block"
        }
    })

    return (
        <div ref={el=>menu = el} className="main-menu">
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