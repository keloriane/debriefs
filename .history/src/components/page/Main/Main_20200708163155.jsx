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
    .from('#main h2',1,{
        y:70, 
        opacity:0,
        skewY:7
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