import React,{useEffect, useRef} from "react";
import Head from './Head/Head';
import Categories from './Categories/Categories';
import "./main.scss";
import IntroOverlay from "./IntroOverlay";
import gsap from 'gsap'

const Main = () => {
    let title = useRef(null)

useEffect(()=>{
 
    let vh = window.innerHeight *0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    //timeline

    const aboutTl = gsap.timeline()

    aboutTl
    .from('#main h2',.4,{
        y:70, 
        opacity:0,
        skewY:7
    })
    .from('#main h2',.4,{
        y:70, 
        opacity:0,
        skewY:7,
        delay:-4
    })
    .to('.overlay-top',.4,{
        height:0,
        ease: "export.inOut",
        stagger:0.2
    })
    .to('.overlay-bottom',.4,{
        width:0,
        ease: "export.inOut",
        delay:-.2,
        stagger:{
            amount:.2
        }
    })
    .from(".cat-image img",1.6,{
        scale:1.4,
        ease:"expo.inOut",
        delay:-1,
        stagger:{
            amount:0.4
        }
    })

})
    return (
        <div id="">
            <IntroOverlay />
            <Head/>
            <Categories/>
        </div>
    )
} 

export default Main;