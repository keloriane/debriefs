import React,{useState, useRef, useEffect} from 'react'
import MenuBox from './../MenuBox/MenuBox';
import {withRouter} from "react-router-dom";
import "./header.scss";
import logo from "./../../assets/images/logo-Debriefs.png";
import social from "./../../assets/images/SOCIAL.png";
import {Link} from "react-router-dom";
import gsap from "gsap";


const Header = ({history}) => {
  const [menuOpen , setMenuOpen] = useState(false);
    // const [state , setState] = useState({
    //     initial: false,
    //     clicked: false,
    //     menuName: "Menu"
    // });
    // let burgerIcon = useRef(null)

    // const [disabled, setDisabled] = useState(false)

    // useEffect(()=> {
    //     history.listen(() => {
    //         setState({ clicked: false, menuName: "Menu" });
    //       });
    // },[history])
    // const handleMenu = () => {
    //     burgerIcon.classList.add('open')
    //     if (state.initial === false) {
    //       setState({
    //         initial: null,
    //         clicked: true,
    //         menuName: "Close"
    //       });
    //     } else if (state.clicked === true) {
    //       setState({
    //         clicked: !state.clicked,
    //         menuName: "Menu"
    //       });
    //     } else if (state.clicked === false) {
    //       setState({
    //         clicked: !state.clicked,
    //         menuName: "Close"
    //       });
    //     }
    //   };
    const handleMenu = (e) => {
      e.preventDefault();
      setMenuOpen(!menuOpen);
      
  }

  useEffect(()=>{
    gsap.to(".menu__item1",{ duration:.5, y:"100%"})
  })



    return (
        <header className="header">
            <div className="header-container">
                <div className="wrapper">
                <div className="hamburger-menu">
                    <div className="menu" id="burger" onClick={handleMenu}>
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
            <MenuBox />
        </header>
    )
}


export default withRouter(Header);
