import React,{useEffect} from "react";
import {Link, useParams} from "react-router-dom"
import "./services.scss";
import {services} from './../../../data.js';
import gsap from 'gsap'
const Services = () => {
  const services=
  [{
      id: 0,
      title: "Sécurité & protection des données",
      name: "Sécurité",
      paragraph: "Security by design ",
      paragraphDetails:"Aujourd’hui la sécurité des informations et des données clients devient un enjeu commercial et juridique incontournables. La sécurité en ligne est indispensable Nous accompagnons nos clients dans la mise en place de standard de sécurité dès la conception et développement de leurs plateformes en lignes et autres systèmes informatiques Pour que celle-ci soient sécurisé by design. Nous assurons également la mise en conformité avec le RGPD, Règlement Général sur la protection des données.Vous trouverez plus de détails sur nos packs et prix dans notre brochures à télécharger",
      paragraphBreak: "RGPD",
      image: `${require("./assets/images/test.png")}`
    },
    {
      id: 1,
      title: "Dévelopement",
      name: "Dévelopement",
      paragraph: "Site web/ E-commerce/ Application",
      paragraphBreak: "Modélisation et Assurance qualité ",
      paragraphDetails:"Notre équipe marketing vous apporte toute l’aide nécessaire en vue d’optimiser la visibilité de votre activité tout en s’assurant de la cohérence et qualité globale de votre contenue et méthode de communication en ligne. Une bonne stratégie Marketing digital vous aidera à entrer en relation avec votre clientèle au bon moment au bon endroit, et de la bonne manière. L’optimisation pour les moteurs de recherches (SEO), la publicité sur Réseaux sociaux et Ads, votre site web et la qualité de votre contenue, nous vous accompagnons à tous les niveaux pour vous assurer une meilleures visibilités.",
      image: `${require("./assets/images/test.png")}`

    },
    {
      id: 2,
      title: "Stratégie & Marketing digital",
      name: "Stratégie",
      paragraph: "Plan et Stratégie digitale ",
      paragraphBreak: "Optimisation et référencement",
      image: `${require("./assets/images/test.png")}`
    },
    {
      id: 3,
      title: "Création contenu & design",
      name:"Design",
      paragraph: "Création et montage vidéos",
      paragraphBreak: "Branding",
      image: `${require("./assets/images/test.png")}`
    },
    {
      id: 4,
      title: "Audit",
      name: "Audit",
      paragraph: "Audit sécurité de votre site",
      paragraphBreak: "internet Audit digital marketing",
      image: `${require("./assets/images/test.png")}`
    },
    {
      id: 5,
      title: "Formations et workshops",
      name:"Workshop",
      paragraph: "Sur mesure ou en entreprise",
      paragraphBreak: "Webinaire & E-learning",
      image: `${require("./assets/images/test.png")}`
}]
  return (
    <div id="services" className="no-scroll">
       <div className="logo-layer">
                <Link to="/">
                    <svg width="84" height="482" viewBox="0 0 84 482" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="logo-letter" d="M83.9999 452.338C83.9999 426.855 68.2364 411.419 42.1 411.419C16.0453 411.419 0.363523 426.855 0.363524 452.093L0.363525 481.987L83.9999 481.987L83.9999 452.338ZM68.849 464.304L15.5144 464.304L15.5144 453.033C15.5144 437.351 23.5187 429.061 42.1 429.061C60.763 429.061 68.849 437.351 68.849 453.073L68.849 464.304Z" fill="white" />
                        <path className="logo-letter" d="M83.9999 392.57L83.9999 336.05L69.4207 336.05L69.4207 374.887L49.4509 374.887L49.4509 339.113L34.8717 339.113L34.8717 374.887L14.9427 374.887L14.9427 336.213L0.363519 336.213L0.363521 392.57L83.9999 392.57Z" fill="white" />
                        <path className="logo-letter" d="M83.9999 316.405L83.9999 280.671C83.9999 261.886 74.1987 251.881 60.8855 251.881C48.5116 251.881 41.0382 260.742 40.589 270.258L39.7723 270.258C37.812 261.559 31.6455 255.148 21.8035 255.148C9.26621 255.148 0.363516 264.459 0.363517 282.918L0.363518 316.405L83.9999 316.405ZM69.5432 298.722L47.3273 298.722L47.3273 283.898C47.3273 275.403 52.2279 270.135 59.1295 270.135C65.4186 270.135 69.5432 274.423 69.5432 284.306L69.5432 298.722ZM35.3617 298.722L14.6568 298.722L14.6568 285.286C14.6568 277.445 18.6998 272.994 24.7438 272.994C31.3596 272.994 35.3617 278.385 35.3617 285.613L35.3617 298.722Z" fill="white" />
                        <path className="logo-letter" d="M0.363511 152.209L0.363512 169.892L83.9999 169.892L83.9999 152.209L0.363511 152.209Z" fill="white" />
                        <path className="logo-letter" d="M83.9999 131.911L83.9999 75.3907L69.4207 75.3907L69.4207 114.228L49.4509 114.228L49.4509 78.4536L34.8717 78.4536L34.8717 114.228L14.9427 114.228L14.9427 75.5541L0.363508 75.5541L0.36351 131.911L83.9999 131.911Z" fill="white" />
                        <path className="logo-letter" d="M83.9999 55.7456L83.9999 38.0627L49.4509 38.0627L49.4509 4.04461L34.8717 4.04462L34.8717 38.0627L14.9427 38.0627L14.9427 0.369201L0.363504 0.369202L0.363507 55.7456L83.9999 55.7456Z" fill="white" />
                        <path className="logo-letter" d="M83.9999 183.66L83.9999 201.343L54.3515 201.343L54.3515 214.247L83.9999 230.093L83.9999 249.613L51.4928 231.849C47.409 241.364 39.1189 246.632 27.6842 246.632C11.0631 246.632 0.363523 235.647 0.363524 216.657L0.363525 183.66L83.9999 183.66ZM40.1398 201.343L14.8202 201.343L14.8202 213.267C14.8202 223.477 19.3532 228.418 27.6842 228.418C35.9743 228.418 40.1398 223.477 40.1398 213.349L40.1398 201.343Z" fill="#85C3E6" />
                    </svg>
                </Link>
            </div>
      <div className="service-container">
        <div className="title-service">
          <h2>Nos Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
              <Link to={`/debriefs/services/:${service.name}`} key={service.id} name={service.name}>
                <div className="service-item" >
              <p className="number"> 0{(service.id) + 1} /</p>
              <div className="headline-service">
                <h3>{service.title}</h3>
              </div>

              <p>
                {service.paragraph} <br /> {service.paragraphBreak}{" "}
              </p>
              <div className="underline-service"></div>
            </div>

              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
