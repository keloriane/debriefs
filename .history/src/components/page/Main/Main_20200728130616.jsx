import React,{useState} from "react";
import "./main.scss";

import "./main.scss";
import {teams} from "./team";
import { HomeB } from "../../BreadCrumbs/HomeB";

const Main = () => {

    const [slide , setSlide] = useState({
        teams: teams,
        team : teams[0]
    })

   

 
    return (
        <>
        <div id="main-about-page">
            <div className="logo-content-about">
                <HomeB />
            </div>
            <div className="about-media-content">
                
                    <div className="team-content">
                <div className="title-content">
                    <h2>NOTRE EQUIPE</h2>
                    <div className="underline"></div>
                </div>
                <div className="image-container">
                    <img src={slide.image} alt="" />
                </div>
            
            <div className="about-text-content">
                <h3 className="about-title">{slide.title}</h3>
                <div className="underline-about"></div>
                <p className="about-text">
                   {slide.about}
                </p>
            </div>
            </div>
               
                </div>
        <button>
            next
        </button>
        </div>
        </>
    )
}
export default Main;