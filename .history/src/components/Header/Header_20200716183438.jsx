import React,{useState, useRef, useEffect} from 'react'
import MenuBox from './../MenuBox/MenuBox';
import {withRouter} from "react-router-dom";
import "./header.scss";
import logo from "./../../assets/images/logo-Debriefs.png";
import social from "./../../assets/images/SOCIAL.png";
import {Link} from "react-router-dom";
import gsap from "gsap";


const Header = (props) => {
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
     
      setMenuOpen(!menuOpen)
      if(menuOpen === false) {
        gsap.to(".menu-box", { duration: 0, css: { display: "grid", zIndex:12 } })
        gsap.to(".menu__item1",{ duration:.5, opacity:1, y:"0%"})
        gsap.to(".menu__item2",{ duration:.5, opacity:1, x:"0%"})
        gsap.to(".menu__item3",{ duration:.5, opacity:1, x:"0%"})
        gsap.to(".menu__item4",{ duration:.5, opacity:1, x:"0%"})
        gsap.to(".menu__item5",{ duration:.5, opacity:1, y:"0%"})
        
      }
      else if(menuOpen === true){
        gsap.to(".menu__item1",{ duration:.5, opacity:0, y:"-100%"})
        gsap.to(".menu__item2",{ duration:.5, opacity:0, x:"-170%"})
        gsap.to(".menu__item3",{ duration:.5, opacity:0, x:"-100%"})
        gsap.to(".menu__item4",{ duration:.5, opacity:0, x:"-100%"})
        gsap.to(".menu__item5",{ duration:.5, opacity:0, y:"-100%"})
        gsap.to(".menu-box", { duration: 2, css: { display: "none", zIndex:0 } })
        
      }
      console.log(menuOpen)
    }
    const menuTl = gsap.timeline()
    const changePage=(e, destination) => {
      const menubox = document.getElementsByClassName('.menu-box')
      e.preventDefault();
      menuTl
      .to(".menu__item1",{ duration:.2, opacity:0, y:"-100%"})
      .to(".menu__item2",{ duration:.2, delay:-2, opacity:0, x:"-170%"})
      .to(".menu__item3",{ duration:.2,delay:-2, opacity:0, x:"-100%"})
      .to(".menu__item4",{ duration:.2,delay:-2, opacity:0, x:"-100%"})
      .to(".menu__item5",{ duration:.2,delay:-2, opacity:0, y:"-100%"})
      menubox[0].style.display = "none";
      menubox[0].style.zIndex = '12'
      const timelineDuration = menuTl.duration()*1000;
      setTimeout(() => {
          props.history.push(destination);
          console.log(props)
        }, timelineDuration);
  }
  useEffect(()=>{

  })



    return (
        <header className="header">
            <div className="header-container">
                <div className="wrapper">
                <div className="hamburger-menu">
                    <div className="menu" id="burger" onClick={e => handleMenu(e)}>
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
            <MenuBox  
            home={<Link onClick={e => changePage(e , "/debriefs/")} >Accueil</Link>}
            services={<Link onClick={e => changePage(e , "/debriefs/services")} >Services</Link>}
            webinaires={<Link onClick={e => changePage(e , "/debriefs/webinaire")} >Webinaires</Link>}
            contact={<Link onClick={e => changePage(e , "/debriefs/contact")} >Contact</Link>}

            
            
            
            />
        </header>
    )
}


export default withRouter(Header);
