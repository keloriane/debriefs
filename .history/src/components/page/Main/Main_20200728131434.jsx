import React,{useState} from "react";
import "./main.scss";

import "./main.scss";
import {teams} from "./team";
import { HomeB } from "../../BreadCrumbs/HomeB";

const Main = () => {

    const [slide , setIndex] = useState({
        index:0,
        teams: teams,
        team : teams[]
        teams: teams,
        team : teams[]
    })

    const nextSlide = (e) => {
        e.preventDefault()
        const newIndex = slide.team.index+1;
        setSlide({
            team: teams[newIndex]
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