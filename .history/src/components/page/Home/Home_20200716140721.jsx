import React, { useEffect, useState, useRef } from 'react';
import "./home.scss";
import { Link , withRouter } from 'react-router-dom'
import gsap from 'gsap';
import homeBg from "./../../../assets/images/home.png";
import {Transition, TransitionGroup} from "react-transition-group"

const Home = (props) => {

    let home = useRef(null)
    let leftGap = useRef(null)
    let imageGap = useRef(null)
    let blueLayer = useRef(null)
    let rightGap = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let underline = useRef(null)
    let button = useRef(null)
    let nav = useRef(null);
    let lines = []
    const pathLogo = document.querySelectorAll(".logo-letter");



    let homeTl = gsap.timeline({ paused:true })

   

    
    
    useEffect(() => {
        homeTl
    
            .from(imageGap, .4, { backgroundPositionX: "-30%", delay: -.6 })
            .from(pathLogo, .3, {
                duration: 0.8,
                x: "100%",
                ease: "power3.inOut",
                stagger: {
                    amount: 0.2
                }
            })
            .from(["#home P" ,"#home h1","#home h3"], .6, {
                duration: 0.8,
                y: "100%",
                ease: "power3.inOut",
                opacity: 0,
                stagger: {
                    amount: 0.3
                }
            })
            .from(underline, .6, { width: 0, autoAlpha: 0, delay: -.5 })
            homeTl.play()
    }, [])

    const changePage=(e, destination) => {
        e.preventDefault();
        homeTl.reverse();
        const timelineDuration = homeTl.duration() * 1000;
        setTimeout(() => {
            props.history.push(destination);
            console.log(props)
          }, timelineDuration);
    }

    const imageLayer = {
        width: "100%",

        backgroundImage: "url(" + { homeBg } + ")"
    };
    return (
        <div id="home" ref={e => home = e} className="no-scroll">
            <div className="home-wrapper">
                <div className="left-gap" ref={e => leftGap = e}></div>
                <div className="image-layer" ref={e => imageGap = e}>
                    <div className="logo-layer">
                        <Link to="/debriefs/">
                            <svg width="84" height="482" viewBox="0 0 84 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="logo-letter" d="M83.9999 452.338C83.9999 426.855 68.2364 411.419 42.1 411.419C16.0453 411.419 0.363523 426.855 0.363524 452.093L0.363525 481.987L83.9999 481.987L83.9999 452.338ZM68.849 464.304L15.5144 464.304L15.5144 453.033C15.5144 437.351 23.5187 429.061 42.1 429.061C60.763 429.061 68.849 437.351 68.849 453.073L68.849 464.304Z" fill="white" />
                                <path className="logo-letter" d="M83.9999 392.57L83.9999 336.05L69.4207 336.05L69.4207 374.887L49.4509 374.887L49.4509 339.113L34.8717 339.113L34.8717 374.887L14.9427 374.887L14.9427 336.213L0.363519 336.213L0.363521 392.57L83.9999 392.57Z" fill="white" />
                                <path className="logo-letter" d="M83.9999 316.405L83.9999 280.671C83.9999 261.886 74.1987 251.881 60.8855 251.881C48.5116 251.881 41.0382 260.742 40.589 270.258L39.7723 270.258C37.812 261.559 31.6455 255.148 21.8035 255.148C9.26621 255.148 0.363516 264.459 0.363517 282.918L0.363518 316.405L83.9999 316.405ZM69.5432 298.722L47.3273 298.722L47.3273 283.898C47.3273 275.403 52.2279 270.135 59.1295 270.135C65.4186 270.135 69.5432 274.423 69.5432 284.306L69.5432 298.722ZM35.3617 298.722L14.6568 298.722L14.6568 285.286C14.6568 277.445 18.6998 272.994 24.7438 272.994C31.3596 272.994 35.3617 278.385 35.3617 285.613L35.3617 298.722Z" fill="white" />
                                <path className="logo-letter" d="M0.363511 152.209L0.363512 169.892L83.9999 169.892L83.9999 152.209L0.363511 152.209Z" fill="white" />
                                <path className="logo-letter" d="M83.9999 131.911L83.9999 75.3907L69.4207 75.3907L69.4207 114.228L49.4509 114.228L49.4509 78.4536L34.8717 78.4536L34.8717 114.228L14.9427 114.228L14.9427 75.5541L0.363508 75.5541L0.36351 131.911L83.9999 131.911Z" fill="white" />
                                <path className="logo-letter" d="M83.9999 55.7456L83.9999 38.0627L49.4509 38.0627L49.4509 4.04461L34.8717 4.04462L34.8717 38.0627L14.9427 38.0627L14.9427 0.369201L0.363504 0.369202L0.363507 55.7456L83.9999 55.7456Z" fill="white" />
                                <path className="logo-letter" d="M83.9999 183.66L83.9999 201.343L54.3515 201.343L54.3515 214.247L83.9999 230.093L83.9999 249.613L51.4928 231.849C47.409 241.364 39.1189 246.632 27.6842 246.632C11.0631 246.632 0.363523 235.647 0.363524 216.657L0.363525 183.66L83.9999 183.66ZM40.1398 201.343L14.8202 201.343L14.8202 213.267C14.8202 223.477 19.3532 228.418 27.6842 228.418C35.9743 228.418 40.1398 223.477 40.1398 213.349L40.1398 201.343Z" fill="#85C3E6" />
                            </svg>
                        </Link>
                    </div>
                    <div className="blue-layer" ref={e => blueLayer = e} ></div>
                </div>
                <div className="center-home-content" ref={e => rightGap = e} >
                    <nav className="home-nav">
                        <ul>
                            <li><Link to="/debriefs/services">SERVICES</Link></li>
                            <li><Link>WEBINAIRES</Link></li>
                            <li><Link>TECHSPACE</Link></li>
                            <li><button>NewsLetter</button></li>
                        </ul>
                    </nav>
                    <div className="home-content">
                        <div className="home-title">
                            <h1 ref={e => line1 = e}>AGENCE DIGITALE</h1>
                            <div className="underline" ref={e => underline = e}></div>
                        </div>
                        <div className="home-subtitle">
                            <h3 ref={e => line2 = e}>
                                BRANDING, SITE WEB, FORMATION CYBERSECURITY, DIGITAL MARKETING
                    </h3>
                        </div>
                        <div className="home-text">
                            <p>Etes-vous prêt pour une transformation digitale ? </p>
                            <p>Nous sommes là, pour accompagner, assurer et faciliter la transition digitale de votre business.</p>
                            <p>Notre spécificité, c’est un parfait mixte entre marketing digital et sécurité en ligne. </p>
                            <p>Avec nous, grâce à nos services et formations, le digital deviendra pour vous plus clair et simple à gérer.</p>
                            <p>Nous sommes également une agence solidaire, au travers de notre ASBL Le TECHSPACE, nous souhaitons fournir notre expertise aux plus grands nombre.</p>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="line"></div>
                        <Link onClick={e => changePage(e , "/debriefs/contact")} to="/debriefs/contact">
                            <button>
                                <div className="button-overlay"></div>
                                <p className="animated-button thar-three">Parlons digital</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Home)