import React,{useEffect} from "react";
import "main.scss";

const Main = () => {
useEffect(()=>{
    let vh = windows.innerHeight *0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})
    return (
        <div id="main">
            hello
        </div>
    )
} 

export default Main;