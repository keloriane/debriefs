import React,{useState, useRef, useEffect} from 'react'
import Menu from '../../view/Menu/Menu';
import {withRouter} from "react-router-dom";
import "./header.scss";
import logo from "./../../assets/images/logo-Debriefs.png";
import social from "./../../assets/images/SOCIAL.png";
import {Link} from "react-router-dom";


const Header = ({history}, props) => {
    const [state , setState] = useState({
        initial: false,
        clicked: false,
        menuName: "Menu"
    });
    let burgerIcon = useRef(null)

    const [disabled, setDisabled] = useState(false)

    useEffect(()=> {
        history.listen(() => {
            setState({ clicked: false, menuName: "Menu" });
          });
    },[history])
    const handleMenu = () => {
        burgerIcon.classList.add('open')
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
    



    return (
        <header className="header">
            <div className="header-container">
                <div className="wrapper">
                <div className="hamburger-menu">
                    <div className="menu" id="burger" ref={ e=> burgerIcon = e}onClick={handleMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    </div>
                </div>
                <div className="logo-container">
                    <div className="inner-logo">
                      <Link to="/debriefs/">
                        <img src={logo} className="miniature" alt="mini-logo"/>
                      
                      </Link>
                    </div>
                </div>
                <div className="social">
                    <div className="social-items">
                      <img src={social} alt="social"/>
                    </div>
                </div>
                </div>
            </div>
            <Menu state={state} props={props} />
        </header>
    )
}


export default withRouter(Header);
