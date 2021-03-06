import React,{useEffect, useRef} from "react";
import "./menu.scss"
function Menu({state}) {
    console.log(state.clicked)
    let menu = useRef(null);

    useEffect(()=> {
        if(state.clicked === false) {
            //close
            
            menu.style.display="none";
        } else if (state.clicked === true || state.clicked === true && state.initial === null )
        {
            //open it 
            menu.style.display="block";
            
        }
            
        
    });

    return (
        <div ref={el=>menu = el} className="main-menu">
            <div className="menu-secondary-layer"> </div>
            <div className="menu-layer">
                <div className="menu-container">
                    <div className="inner-menu-logo">
                        <svg width="482" height="84" viewBox="0 0 482 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.6484 83.6364C55.1314 83.6364 70.5682 67.8729 70.5682 41.7365C70.5682 15.6818 55.1314 0 29.8935 0H0V83.6364H29.6484ZM17.6829 68.4854V15.1509H28.9542C44.636 15.1509 52.9261 23.1552 52.9261 41.7365C52.9261 60.3995 44.636 68.4854 28.9134 68.4854H17.6829Z" fill="white"/>
<path d="M89.417 83.6364H145.937V69.0572H107.1V49.0874H142.874V34.5082H107.1V14.5792H145.774V0H89.417V83.6364Z" fill="white"/>
<path d="M165.582 83.6364H201.315C220.101 83.6364 230.106 73.8352 230.106 60.522C230.106 48.1481 221.244 40.6747 211.729 40.2255V39.4087C220.428 37.4485 226.839 31.282 226.839 21.44C226.839 8.90269 217.528 0 199.069 0H165.582V83.6364ZM183.265 69.1797V46.9638H198.089C206.583 46.9638 211.852 51.8644 211.852 58.766C211.852 65.055 207.564 69.1797 197.681 69.1797H183.265ZM183.265 34.9982V14.2933H196.701C204.542 14.2933 208.993 18.3363 208.993 24.3803C208.993 30.9961 203.602 34.9982 196.374 34.9982H183.265Z" fill="white"/>
<path d="M329.778 0H312.095V83.6364H329.778V0Z" fill="white"/>
<path d="M350.076 83.6364H406.596V69.0572H367.759V49.0874H403.533V34.5082H367.759V14.5792H406.433V0H350.076V83.6364Z" fill="white"/>
<path d="M426.241 83.6364H443.924V49.0874H477.942V34.5082H443.924V14.5792H481.618V0H426.241V83.6364Z" fill="white"/>
</svg>
s
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