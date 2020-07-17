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
        gsap.to(".menu__item1",{ ease:"expo.easeInOut", duration:.5, y:"0%"})
        gsap.to(".menu__item2",{ ease:"expo.easeInOut", duration:.5, x:"0%"})
        gsap.to(".menu__item3",{ ease:"expo.easeInOut", duration:.5, x:"0%"})
        gsap.to(".menu__item4",{ ease:"expo.easeInOut", duration:.5, y:"0%"})
        gsap.to(".menu__item5",{ ease:"expo.easeInOut", duration:.5, y:"0%"})
        gsap.to(".menu-box", { ease:"expo.easeInOut", duration: .001, css: { zIndex:12 } })
        
      }
      else if(menuOpen === true){
        gsap.to(".menu__item1",{ duration:.5, y:"-100%"})
        gsap.to(".menu__item2",{ duration:.5, x:"-170%"})
        gsap.to(".menu__item3",{ duration:.5, x:"-100%"})
        gsap.to(".menu__item4",{ duration:.5, y:"100%"})
        gsap.to(".menu__item5",{ duration:.5, y:"0%"})
        gsap.to(".menu-box", { duration: .5, css: { zIndex:-1 } })
        
      }
      console.log(menuOpen)
    }
    const menuTl = gsap.timeline({paused:true})
    const changePage=(e, destination) => {
      e.preventDefault();
      menuTl
      .to(".menu__item1",{ duration:.2, y:"-100%"})
      .to(".menu__item2",{ duration:.2, delay:-2,  x:"-170%"})
      .to(".menu__item3",{ duration:.2,delay:-2, x:"-100%"})
      .to(".menu__item4",{ duration:.2,delay:-2, y:"100%"})
      .to(".menu__item5",{ duration:.2,delay:-2, y:"100%"})
      .to(".menu-box", { duration:.2 , css: {zIndex:-1 } })
      menuTl.play();
      setMenuOpen(false)
      const timelineDuration = menuTl.duration()*100;
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
            histoire={<Link onClick={e => changePage(e , "/techspace/histoire")} >Notre Histoire</Link>}
            agence={<Link onClick={e => changePage(e , "/debriefs/")} >l' agence</Link>}
            asbl={<Link onClick={e => changePage(e , "/techspace/")} >l' asbl</Link>}

            
            
            
            />
        </header>
    )
}


export default withRouter(Header);
