import React from 'react';
import room from "./../../../assets/images/room.png"
import "./dcg.scss";
import { Title } from '../../Title/Title';

const Dcg = () => {
    return (
        <div id="digital-career-center">
            <div className="dcg-image-container">
                <div className="inner-image">
                    <img src={room} alt=""/>
                </div>
                <div className="inner-text-content">
                    <div className="title-container">
                        
                    </div>
                    <p>Nous croyons fermement que la technologie est l’affaire de tous. C’est une révolution, une culture, des compétences que tous citoyens en âge et capacité d’apprendre se doit d’acquérir. C’est pourquoi nous avons à cœur de contribuer au développement de tous, en ce qui concerne les domaines du numérique notamment à travers l’éducation et le coaching professionnel.</p>
                    <p>Nous croyons fermement que la technologie est l’affaire de tous. C’est une révolution, une culture, des compétences que tous citoyens en âge et capacité d’apprendre se doit d’acquérir. C’est pourquoi nous avons à cœur de contribuer au développement de tous, en ce qui concerne les domaines du numérique notamment à travers l’éducation et le coaching professionnel.</p>
                </div>
            </div>
            <div className="dcg-text-container"></div>
        </div>
    )
}
export default Dcg;
