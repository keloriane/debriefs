import React, { useEffect, useState, useRef } from 'react';
import "./home.scss";
import { Link , withRouter } from 'react-router-dom'
import gsap from 'gsap';
import homeBg from "./../../../assets/images/home.png";
import {Transition, TransitionGroup} from "react-transition-group";
import Nav from './../../Nav/Nav';
import { HomeB } from '../../BreadCrumbs/HomeB';


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
            .from("#home",.4,{opacity:0})
            .from(imageGap, .4, { backgroundPositionX: "-30%", delay: -.6 })
            .from(["#home h1","#home h3","#home P"], {
                duration: 0.4,
                y: "100%",
                ease: "power3.inOut",
                opacity: 0,
                stagger: {
                    amount: 0.4
                }
            })
            .from(underline, .6, { width: 0, autoAlpha: 0, delay: -.5 })
            homeTl.play()
    }, [])

    const changePage=(e, destination) => {
        e.preventDefault();
        homeTl.reverse();
        const timelineDuration = homeTl.duration()*1000;
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
                     <HomeB />
                    </div>
                    <div className="blue-layer" ref={e => blueLayer = e} ></div>
                </div>
                <div className="center-home-content" ref={e => rightGap = e} >
                    {/* <nav className="home-nav">
                        <ul>
                            <li><Link onClick={e => changePage(e , "/debriefs/services")} to="/debriefs/services">SERVICES</Link></li>
                            <li><Link onClick={e => changePage(e , "/techspace/menubox/")}>WEBINAIRES</Link></li>
                            <li><Link onClick={e => changePage(e , "/techspace/")}>TECHSPACE</Link></li>
                            <li><button>NewsLetter</button></li>
                        </ul>
                    </nav> */}
                    <Nav animation={e => changePage(e , "/debriefs/services")} animation1={e => changePage(e , "/debriefs/about")} animation2={e => changePage(e , "/techspace/")} />
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
                            <p>Etes-vous prêt pour une transformation digitale ?  <br/>
                            Nous sommes là, pour accompagner, assurer et faciliter la transition digitale de votre business.
                            Notre spécificité, c’est un parfait mixte entre marketing digital et sécurité en ligne. 
                            Avec nous, grâce à nos services et formations, le digital deviendra pour vous plus clair et simple à gérer.
                            Nous sommes également une agence solidaire, au travers de notre ASBL Le TECHSPACE, nous souhaitons fournir notre expertise aux plus grands nombre.</p>
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
        </div>
    )
}
export default withRouter(Home)