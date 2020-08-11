import React from "react";
import "./main.scss";

import "./main.scss";

import { HomeB } from "../../BreadCrumbs/HomeB";

const Main = () => {

    const teams = [
        {
            id: 1,
            title: "Notre Equipe",
            image: `${require("./../../../assets/images/team.png")}`,
            about: "Notre agence est née de la passion de deux amies pour le digitale… Pamela Gerbino et Ornella Simba, fondatrices de l’agence Debrief. Nous avons décidé suites à nos transitions professionnelles respectives vers le digitale, de rassembler autour de nous les meilleures de nos collègues pour ensemble travailler et fournir des services qui répondraient à deux challenges que nous considérons cruciaux : 1. Lutte contre la fracture numérique par l’acquisition des compétences digitale et/ou technologique plus largement 2. La digitalisation des services et des métiers, par l’accompagnement des PME, indépendants, startups. Au travers de notre agence, nous souhaitons accompagner les entreprises, organismes publics, associations et indépendants tout au long de leurs projets digitales, en leurs permettant d’acquérir l’autonomie et la confiance nécessaire pour faire croître et sécuriser leurs activités et business."
        },
        {
            id: 2,
            title: "Pamela",
            image: `${require("./../../../assets/images/webinaires.png")}`
        },
        {
            id: 3,
            title: "Ornella",
            image: `${require("./../../../assets/images/articles.png")}`
        }
    ]

 
    return (
        <>
        <div id="main-about-page">
            <div className="logo-content-about">
                <HomeB />
            </div>
            <div className="about-media-content">
                {  teams.map((team) => (

                <div className="title-content">
                    <h2>NOTRE EQUIPE</h2>
                    <div className="underline"></div>
                </div>
                <div className="image-container">
                    <img src={categories[0].image} alt="" />
                </div>
            
            <div className="about-text-content">
                <h3 className="about-title">A propos de nous</h3>
                <div className="underline-about"></div>
                <p className="about-text">
                    Notre agence est née de la passion de deux amies pour le digitale…
                    Pamela Gerbino et Ornella Simba, fondatrices de l’agence Debrief.
                    Nous avons décidé suites à nos transitions professionnelles respectives vers le digitale, de rassembler
                    autour de nous les meilleures de nos collègues pour ensemble travailler et fournir des services qui
                    répondraient à deux challenges que nous considérons cruciaux :
                    <br/> 1. Lutte contre la fracture numérique par l’acquisition des compétences digitale et/ou
                    technologique plus largement
                    <br/> 2. La digitalisation des services et des métiers, par l’accompagnement des PME, indépendants,
                    startups.
                    <br/>
                    Au travers de notre agence, nous souhaitons accompagner les entreprises, organismes publics,
                    associations et indépendants tout au long de leurs projets digitales, en leurs permettant d’acquérir
                    l’autonomie et la confiance nécessaire pour faire croître et sécuriser leurs activités et business.
                </p>
            </div>
                ))
                }
                </div>
        <button>
            next
        </button>
        </div>
        </>
    )
}
export default Main;