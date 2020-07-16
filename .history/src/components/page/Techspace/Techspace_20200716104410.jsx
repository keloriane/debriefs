import React, { useEffect } from "react";
import "./techspace.scss";
import video from './../../../assets/video/video.mp4';
import techspace from './../../../assets/images/techspace.png';
import gsap from "gsap";
import { Link } from 'react-router-dom';


const Techspace = () => {


    useEffect(() => {
        gsap.from([".screen-video", ".title-back-layer"], .4, { width: 0, stagger: .3 })
        gsap.from([".techspace h1", ".techspace p"], 1, { y: 100, delay: .6, opacity: 0, stagger: .3 })
        gsap.from(".techspace img", 1, { delay: .6, opacity: 0 })



    })



    return (
        <div id="techspace">

            <div className="techspace">
                <div className="screen">
                    <img src={techspace} alt="" />
                    <div class="screen-video">
                        <video loop muted autoplay="true" class="screen__video">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>

                </div>
                <div className="techspace-content">
                    <div className="title-back-layer">
                        <h1>Techspace</h1>
                    </div>
                    <div className="techspace-title">
                        <p> Nous croyons fermement que la technologie est l’affaire de tous. C’est une révolution, une culture, des compétences que tous citoyens en âge et capacité d’apprendre se doit d’acquérir. C’est pourquoi nous avons à cœur de contribuer au développement de tous, en ce qui concerne les domaines du numérique notamment à travers l’éducation et le coaching professionnel.</p>
                    </div>
                    <Link to="/techspace/histoire/" className="button-call">
                        <div className="line"></div>
                        <button>
                            <div className="button-overlay"></div>
                            <p>devenir partenaire</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Techspace;