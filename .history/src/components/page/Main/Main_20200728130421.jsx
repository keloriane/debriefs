import React,{useState} from "react";
import "./main.scss";

import "./main.scss";

import { HomeB } from "../../BreadCrumbs/HomeB";

const Main = () => {

    const [slide , setSlide] = useState(0)

    const nextSlide = () => {
        


    }
    

 
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
                    <img src={team.image} alt="" />
                </div>
            
            <div className="about-text-content">
                <h3 className="about-title">{team.title}</h3>
                <div className="underline-about"></div>
                <p className="about-text">
                   {team.about}
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