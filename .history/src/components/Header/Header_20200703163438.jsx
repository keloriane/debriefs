import React,{useState, useEffect} from 'react'
import Menu from '../../view/Menu/Menu';
import {Link , withRouter} from "react-router-dom";
import "./header.scss";
import logo from "./../../components/page/Home/logo-Debriefs.png"


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
                        <img src={logo} className="miniature" alt=""/>
                    </div>
                </div>
                <div className="social">
                    <div className="social-items">
                        <a href="/"><i className="fa"></i></a>
                        <a href="/"><i className="fa"></i></a>
                        <a href="/"><i className="fa"></i></a>
                    </div>
                </div>
                   
                </div>
            </div>
            <Menu state={state} />
        </header>
    )
}


export default withRouter(Header);
