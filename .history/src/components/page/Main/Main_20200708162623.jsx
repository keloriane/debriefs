import React,{useEffect, useRef} from "react";
import Head from './Head/Head';
import Categories from './Categories/Categories';
import "./main.scss";
import IntroOverlay from "./IntroOverlay";
import gsap from 'gsap'

const Main = () => {
    let title = useRef(null)

useEffect(()=>{
    console.log(title.current);
    let vh = window.innerHeight *0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    //timeline

    const aboutTl = gsap.timeline()

    aboutTl
    .from(title.current,1,{y:40, opacity:0})
})
    return (
        <div id="">
            <IntroOverlay />
            <Head title={title}/>
            <Categories/>
        </div>
    )
} 

export default Main;