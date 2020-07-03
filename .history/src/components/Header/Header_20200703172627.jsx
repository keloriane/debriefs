import React,{useState, useEffect} from 'react'
import Menu from '../../view/Menu/Menu';
import {withRouter} from "react-router-dom";
import "./header.scss";
import logo from "./../../components/page/Home/logo-Debriefs.png"
import social from "./../../components/page/Home/SOCIAL.png"


const Header = () => {
    const [state , setState] = useState({
        initial: false,
        clicked: false,
        menuName: "Menu"
    });

    const [disabled, setDisabled] = useState(false)

    useEffect(()=> {
        // history.listen(()=>{

        // })
    })
    const handleMenu = () => {
      disableMenu()
        if (state.initial === false) {
          setState({
            initial: null,
            clicked: true,
            menuName: "Close"
          });
        } else if (state.clicked === true) {
          setState({
            clicked: !state.clicked,
            menuName: "Menu"
          });
        } else if (state.clicked === false) {
          setState({
            clicked: !state.clicked,
            menuName: "Close"
          });
        }
      };
    
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(()=> {
            setDisabled(false)
        },1200)
    }


    return (
        <header>
            <div className="header-container">
                <div className="wrapper">
                <div className="hamburger-menu">
                    <button disabled={disabled} className="menu" onClick={handleMenu}>
                        Menu
                    </button>
                </div>
                <div className="logo-container">
                    <div className="inner-logo">
                        <img src={logo} className="miniature" alt="mini-logo"/>
                    </div>
                </div>
                <div className="social">
                    <div className="social-items">
                       <img src={social} alt="social"/>
                    </div>
                </div>
                   
                </div>
            </div>
            <Menu state={state} />
        </header>
    )
}


export default withRouter(Header);
