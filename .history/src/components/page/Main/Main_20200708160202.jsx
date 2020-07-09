import React,{useEffect} from "react";
import Head from './Head/Head';
import Categories from './Categories/Categories';
import "./main.scss";
import IntroOverlay from "./IntroOverlay";

const Main = () => {
useEffect(()=>{
    let vh = window.innerHeight *0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
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