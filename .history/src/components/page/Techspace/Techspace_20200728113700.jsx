import React from "react";
import "./techspace.scss";
import video from './../../../assets/video/video.mp4';
import techspace from './../../../assets/images/techspace.png';
import gsap from "gsap";
import { Link, withRouter } from 'react-router-dom';



const Techspace = (props) => {
    const techspaceTl = gsap.timeline();
 const changePage=(e, destination) => {
    e.preventDefault();
    techspaceTl.reverse();
    const timelineDuration = techspaceTl.duration()*1000;
    setTimeout(() => {
      console.log(props)
        props.history.push(destination);
      }, timelineDuration);
  }
    return (
        <div id="techspace">
            <div className="navigation">
            <nav>
                <Link>Notre Histoire</Link>
                <Link>digital career center</Link>
                <Link onClick={e => changePage(e , "/debriefs/")}>l'Agence</Link>

            </nav>

            </div>
            <div className="techspace">
                <div className="screen">
                    <img src={techspace} alt="" />
                    <div className="screen-video">
                        <video loop muted autoplay="true" className="screen__video">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>

                </div>
                <div className="techspace-content">
                    <div className="title-back-layer">
                        <h1 className="text-letter">Techspace</h1>
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

export default withRouter(Techspace);