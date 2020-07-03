import React,{useEffect} from 'react';
import "./home.scss";
import Menu from './../../Menu/Menu';
import Background from './home.png';
import gsap from 'gsap';

export default function Home() {

    useEffect(()=> {
        const homeIntro = gsap.timeline();
        const image = document.getElementById('sideImg')
        const subtitle = document.getElementsByClassName('subtitle');
        const crumps = document.getElementsByClassName('crumps');


        homeIntro
            .from(image,1,{x:"-100%"})
            .from(subtitle,1,{y:"100%",delay:-1, opacity:0})
            .from(crumps,1,{y:"100%", delay:-1,opacity:0});
            
            TweenMax.from(image,5,{scaleX:1.2, scaleY:1.2})
            
    })
    return (
        <div id="home">
            <div className="content">

            <div className="left-gap">

                <div className="void"></div>
                <div className="side-home-bar">
                <div className="logo-container">
                <svg width="84" height="482" viewBox="0 0 84 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M83.9999 452.338C83.9999 426.855 68.2364 411.419 42.1 411.419C16.0453 411.419 0.363523 426.855 0.363524 452.093L0.363525 481.987L83.9999 481.987L83.9999 452.338ZM68.849 464.304L15.5144 464.304L15.5144 453.033C15.5144 437.351 23.5187 429.061 42.1 429.061C60.763 429.061 68.849 437.351 68.849 453.073L68.849 464.304Z" fill="white"/>
                    <path d="M83.9999 392.57L83.9999 336.05L69.4207 336.05L69.4207 374.887L49.4509 374.887L49.4509 339.113L34.8717 339.113L34.8717 374.887L14.9427 374.887L14.9427 336.213L0.363519 336.213L0.363521 392.57L83.9999 392.57Z" fill="white"/>
                    <path d="M83.9999 316.405L83.9999 280.671C83.9999 261.886 74.1987 251.881 60.8855 251.881C48.5116 251.881 41.0382 260.742 40.589 270.258L39.7723 270.258C37.812 261.559 31.6455 255.148 21.8035 255.148C9.26621 255.148 0.363516 264.459 0.363517 282.918L0.363518 316.405L83.9999 316.405ZM69.5432 298.722L47.3273 298.722L47.3273 283.898C47.3273 275.403 52.2279 270.135 59.1295 270.135C65.4186 270.135 69.5432 274.423 69.5432 284.306L69.5432 298.722ZM35.3617 298.722L14.6568 298.722L14.6568 285.286C14.6568 277.445 18.6998 272.994 24.7438 272.994C31.3596 272.994 35.3617 278.385 35.3617 285.613L35.3617 298.722Z" fill="white"/>
                    <path d="M0.363511 152.209L0.363512 169.892L83.9999 169.892L83.9999 152.209L0.363511 152.209Z" fill="white"/>
                    <path d="M83.9999 131.911L83.9999 75.3907L69.4207 75.3907L69.4207 114.228L49.4509 114.228L49.4509 78.4536L34.8717 78.4536L34.8717 114.228L14.9427 114.228L14.9427 75.5541L0.363508 75.5541L0.36351 131.911L83.9999 131.911Z" fill="white"/>
                    <path d="M83.9999 55.7456L83.9999 38.0627L49.4509 38.0627L49.4509 4.04461L34.8717 4.04462L34.8717 38.0627L14.9427 38.0627L14.9427 0.369201L0.363504 0.369202L0.363507 55.7456L83.9999 55.7456Z" fill="white"/>
                    <path d="M83.9999 183.66L83.9999 201.343L54.3515 201.343L54.3515 214.247L83.9999 230.093L83.9999 249.613L51.4928 231.849C47.409 241.364 39.1189 246.632 27.6842 246.632C11.0631 246.632 0.363523 235.647 0.363524 216.657L0.363525 183.66L83.9999 183.66ZM40.1398 201.343L14.8202 201.343L14.8202 213.267C14.8202 223.477 19.3532 228.418 27.6842 228.418C35.9743 228.418 40.1398 223.477 40.1398 213.349L40.1398 201.343Z" fill="#85C3E6"/>
                </svg>

                </div>
                <div className="image-wrapper">
                    
                </div>
                    <div className="img-bg">
                        <img src={Background} alt="sidebar background" id='sideImg'/>
                    </div>

                </div>
            </div>
            <div className="right-gap">
            <div className="text-container">
                <h2 className="subtitle">Agence Digitale</h2>
                <h3 className="crumps">BRANDING, SITE WEB, FORMATION CYBERSECURITY, DIGITAL MARKETING</h3>

                <p>Notre spécificité un parfait mixte entre Marketing digital et Sécurité en ligne !</p>
            </div>

            </div>
            <Menu/>
            </div>
        </div>
    )
}
