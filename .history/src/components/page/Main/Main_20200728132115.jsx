import React,{useState} from "react";
import "./main.scss";

import "./main.scss";
import {teams} from "./team";
import { HomeB } from "../../BreadCrumbs/HomeB";

const Main = () => {

    const [index , setIndex] = useState(0)
    
    
    const [slide , setSlide] = useState({
        teams: teams,
        team : teams[index]
    })

    const nextSlide = (e) => {
        e.preventDefault()
        setIndex(+1)
        console.log(index);
        setSlide({
            team: teams[index]
        })
    }
   

 
    return (
        <>
        <div id="main-about-page">
            <div className="logo-content-about">
                <HomeB />
            </div>
            <div className="about-media-content">
                <div className="title-content">
                    <h2>NOTRE EQUIPE</h2>
                    <div className="underline"></div>
                </div>
                <div className="team-content">
                
                <div className="image-container">
                    <img src={slide.team.image} alt="" />
                </div>
            
            <div className="about-text-content">
                <h3 className="about-title">{slide.team.title}</h3>
                <div className="underline-about"></div>
                <p className="about-text">
                   {slide.team.about}
                </p>
            </div>
            </div>
               
                </div>
        <button onClick={nextSlide}>
            next
        </button>
        </div>
        </>
    )
}
export default Main;