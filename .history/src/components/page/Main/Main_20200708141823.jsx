import React,{useEffect} from "react";
import Head from './Head/Head';
import Categories from './Head/Categories/Categories';
import "./main.scss";

const Main = () => {
useEffect(()=>{
    let vh = window.innerHeight *0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})
    return (
        <div id="main">
            <Head/>
            <Categories/>
        </div>
    )
} 

export default Main;