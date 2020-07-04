import React,{useEffect} from 'react';
import "./home.scss";
import {Link} from 'react-router-dom'
import gsap from 'gsap';
import Header from '../../Header/Header';
import homeBg from "./../../../assets/images/home.png";
export default function Home() {

    // useEffect(()=> {
    //     const homeIntro = gsap.timeline();
    //     const page = document.getElementById('page')
    //     const image = document.getElementById('sideImg')
    //     const subtitle = document.getElementsByClassName('subtitle');
    //     const crumps = document.getElementsByClassName('crumps');
    //     const para = document.getElementsByClassName('para');
    //     const path = document.querySelectorAll('path')

    //     const textArray = [];
    //     textArray.push(subtitle,crumps,para);
    //     console.log(textArray);

    //     homeIntro
    //         .from(page,.8,{x:"-100%"})
    //         .from(image,.5,{x:"-100%" , delay:-.3} )
    //         .staggerTo(textArray,.4,{y:-20,opacity:1},.2)
    //         .staggerFrom(path,.2,{x:100,delay:-1},.1);
    //         gsap.to(image,5,{scaleX:1.2, scaleY:1.2, delay:.3})
            
    // })

    const imageLayer = {
        width: "100%",
        
        backgroundImage: "url(" + { homeBg } + ")"
      };
    return (
        <div id="home">
            <div className="home-wrapper">
             <div className="left-gap"></div>
             <div className="image-layer">
                 <div className="logo-layer">
                     
                 </div>
                 
                     <div className="blue-layer"></div>
   
                 
             </div>
             <div className="center-home-content">
            <nav className="home-nav">
                <ul>

                    <li><Link>SERVICES</Link></li>
                    <li><Link>WEBINAIRES</Link></li>
                    <li><Link>TECHSPACE</Link></li>
                    <li><button>NewsLetter</button></li>
                </ul>
            </nav>
             <div className="home-content">
                 <div className="home-title">
                     <h1>AGENCE DIGITALE</h1>
                 </div>
                 <div className="home-subtitle">
                    <h3>
                    BRANDING, SITE WEB, FORMATION CYBERSECURITY, DIGITAL MARKETING
                    </h3>     
                 </div>
                 <div className="home-text">
                     <p>Notre spécificité un parfait mixte entre Marketing digital et Sécurité en ligne !</p>
                 </div>
             </div>
                <div className="button-container">
                <div className="line"></div>
             <button>
                 <Link to="/contact">Parlons digital</Link>
             </button>
                </div>
             </div>

            </div>
        </div>
    )
}
