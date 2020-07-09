import React,{useEffect} from "react";
import Head from './Head/Head'
import "main.scss";

const Main = () => {
useEffect(()=>{
    let vh = window.innerHeight *0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})
    return (
        <div id="main">
            <Head/>
        </div>
    )
} 

export default Main;