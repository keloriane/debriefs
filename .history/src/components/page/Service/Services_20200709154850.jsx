import React from "react";
import "./services.scss";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Sécurité & protection des données",
      paragraph: "Security by design ",
      paragraphBreak: "RGPD",
    },
    {
      id: 2,
      title: "Dévelopement",
      paragraph: "Site web/ E-commerce/ Application",
      paragraphBreak: "Modélisation et Assurance qualité ",
    },
    {
      id: 3,
      title: "Stratégie & Marketing digital",
      paragraph: "Plan et Stratégie digitale ",
      paragraphBreak: "Optimisation et référencement",
    },
    {
      id: 4,
      title: "Création contenu & design",
      paragraph: "Création et montage vidéos",
      paragraphBreak: "Branding",
    },
    {
      id: 5,
      title: "Audit",
      paragraph: "Audit sécurité de votre site",
      paragraphBreak: "internet Audit digital marketing",
    },
    {
      id: 6,
      title: "Formations et workshops",
      paragraph: "Sur mesure ou en entreprise",
      paragraphBreak: "Webinaire & E-learning",
    },
  ];

  return (
    <div id="services">
      <div className="service-container">
        <div className="title-service">
          <h2>Nos Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-item" key={service.id}>
              <p className="number"> 0{service.id} /</p>
              <div className="headline-service">
                <h3>{service.title}</h3>
              </div>

              <p>
                {service.paragraph} <br /> {service.paragraphBreak}{" "}
              </p>
              <div className="underline-service"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
