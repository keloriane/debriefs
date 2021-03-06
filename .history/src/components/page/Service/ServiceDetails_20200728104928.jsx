import React, { useEffect } from "react";
import {
  useParams,
  useRouteMatch,
  useHistory,
  useLocation,
} from "react-router-dom";
import gsap from "gsap";
import "./ServiceDetails.scss";
import { Title } from "../../Title/Title.jsx";
import { HomeB } from "../../BreadCrumbs/HomeB.jsx";

const ServiceDetails = (props) => {
  const services=
  [{
      id: 0,
      title: "Sécurité & protection des données",
      name: "Sécurité",
      paragraph: "Security by design ",
      paragraphDetails:"Aujourd’hui la sécurité des informations et des données clients devient un enjeu commercial et juridique incontournables. La sécurité en ligne est indispensable Nous accompagnons nos clients dans la mise en place de standard de sécurité dès la conception et développement de leurs plateformes en lignes et autres systèmes informatiques Pour que celle-ci soient sécurisé by design. Nous assurons également la mise en conformité avec le RGPD, Règlement Général sur la protection des données.Vous trouverez plus de détails sur nos packs et prix dans notre brochures à télécharger",
      paragraphBreak: "RGPD",
      image: `https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
    },
    {
      id: 1,
      title: "Dévelopement",
      name: "Dévelopement",
      paragraph: "Site web/ E-commerce/ Application",
      paragraphBreak: "Modélisation et Assurance qualité ",
      paragraphDetails:"Nous développons pour vous vos plateformes en ligne, site web vitrines, applications web, e- commerce. Vous avez l’idée, nous avons les compétences… De la maquette passant par le développement jusqu’au déploiement, nous vous accompagnons de A à Z.",
      image: `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
      
    },
    {
      id: 2,
      title: "Stratégie & Marketing digital",
      name: "Stratégie",
      paragraph: "Plan et Stratégie digitale ",
      paragraphBreak: "Optimisation et référencement",
      paragraphDetails:"Notre équipe marketing vous apporte toute l’aide nécessaire en vue d’optimiser la visibilité de votre activité tout en s’assurant de la cohérence et qualité globale de votre contenue et méthode de communication en ligne. Une bonne stratégie Marketing digital vous aidera à entrer en relation avec votre clientèle au bon moment au bon endroit, et de la bonne manière. L’optimisation pour les moteurs de recherches (SEO), la publicité sur Réseaux sociaux et Ads, votre site web et la qualité de votre contenue, nous vous accompagnons à tous les niveaux pour vous assurer une meilleures visibilités.",
      image: `https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80`
    },
    {
      id: 3,
      title: "Création contenu & design",
      name:"Design",
      paragraph: "Création et montage vidéos",
      paragraphBreak: "Branding",
      paragraphDetails:"Une image de marque forte est importante pour se démarquer et marquer les esprits. C’est ce que nous vous aidons à réaliser dans la création de contenu et le branding de votre activité. Logo, web-design et création de contenu de tout genre pour vos publicités et réseaux sociaux, l’agence peut réaliser avec vous chacune de vos idées.",
      image: `https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
    },
    {
      id: 4,
      title: "Audit",
      name: "Audit",
      paragraph: "Audit sécurité de votre site",
      paragraphBreak: "internet Audit digital marketing",
      paragraphDetails:"Nous réalisons des audits de sécurités, RGPD et Marketing. A quoi ça sert ? En ce qui concerne la sécurité et le RGDP, l’audit vous permet d’évaluer le risque que votre business encourt en cas de faiblesse de vos plateforme en ligne. Etes vous vulnérable ou carrément sujet à des cyberattaques ( vols de données bancaires, ou informations clients, données personnelles, etc…). Grâce à cette audit, vous recevez un état des lieux de votre niveau de sécurité et de conformité à la réglementation ainsi que des recommandations sur base du niveau de risque que vous encourez. Vous pouvez ainsi décider d’y remédier selon votre ordre de priorités. L’audit marketing est dans la même ligné, car elle vous informera du niveau d’impact et d’efficacité de votre stratégie marketing, pour vous permettre suite aux recommandations fournies d’améliorer les zones de faiblesses.",
      image: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
    },
    {
      id: 5,
      title: "Formations et workshops",
      name:"Workshop",
      paragraph: "Sur mesure ou en entreprise",
      paragraphBreak: "Webinaire & E-learning",
      paragraphDetails:"L’un des éléments clés et caractérisant notre agence, c’est que nous croyons fortement en la force de l’apprentissage tout au long de la vie. Nous sommes nous même des autodidactes et constamment en train de nous former à de nouvelles branches des nouvelles technologies. L’autonomie de nos clients est essentielles pour nous car nous savons que c’est essentielle à une relation dans le long terme. Vous apprendre à apprendre, nous permet de vous garder près de nous car nous pourrons avancer, comprendre et faire face aux nouveaux enjeux de demain ensemble. C’est dans cette optique que nous proposons en entreprise, en format e-learning ou webinaires des formations dans les domaines du e-commerce, de la cybersécurité et du marketing digitale. N’hésitez pas à nous contacter et nous faire part de vos besoins en terme de formation.",
      image: `https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`
}]



  useEffect(() => {
    // const serviceTitle = document.querySelector('.service-title');
    // const photo = document.querySelector('.photo-inner');
    // const textDetails = document.querySelector('.details-service');
    // const blueBg = document.querySelector('.blue-layer-service-under');
    // detailsService.play()

    // detailsService
    //   .from([serviceTitle,textDetails], .4,{y:100, opacity:0, stagger: .15})
    //   .to(blueBg,1,{x:"100%"})
    //   .from(photo, .4,{x:"-100%", opacity:0})
    const imageSlider = document.getElementsByClassName("slider-image");
    let layer = document.getElementsByClassName("back-layer");
    const workTimeline = gsap.timeline();

    workTimeline
      .from(layer, 1, { x: "-50%", ease: "Power4.easeOut" })
      .from(imageSlider, 0.9, {
        ease: "Power4.easeOut",
        x: "-100%",
        delay: -0.8,
      });
  });

  const { serviceId } = useParams();
  let { url } = useRouteMatch();
  let history = useHistory();
  // const service = services.find(( {id} ) =>{
  //    console.log( id === serviceId);
  //   });
  console.log(url);
  let location = useLocation();
  console.log(location);
  console.log("fonctionne putain");
  
  
  function handleSlider(services , id){
    const service = services.find(({ name }) => name === serviceId);
    
  }
  
  const service = services[serviceId];
  console.log(service);

  const handleNext = () => {
   
    switch (url) {
      case `/debriefs/services/${services[0].id}`:
        history.push(`/debriefs/services/1`);
        break;
      case `/debriefs/services/${services[1].id}`:
        history.push(`/debriefs/services/2`);
        break;
      case `/debriefs/services/${services[2].id}`:
        history.push(`/debriefs/services/3`);
        break;
      case `/debriefs/services/${services[3].id}`:
        history.push(`/debriefs/services/4`);
        break;
      case `/debriefs/services/${services[4].id}`:
        history.push(`/debriefs/services/5`);
        break;
      case `/debriefs/services/${services[5].id}`:
        history.push(`/debriefs/services/0`);
        break;
      default:
        break;
    }
  };
  const handlePrevious = () => {
    switch (url) {
      case `/debriefs/service/${services[0].id}`:
        history.push(`/debriefs/services/5`);
        break;
      case `/debriefs/service/${services[1].id}`:
        history.push(`/debriefs/services/0`);
        break;
      case `/debriefs/service/${services[2].id}`:
        history.push(`/debriefs/services/1`);
        break;
      case `/debriefs/service/${services[3].id}`:
        history.push(`/debriefs/services/2`);
        break;
      case `/debriefs/service/${services[4].id}`:
        history.push(`/debriefs/services/3`);
        break;
      case `/debriefs/service/${services[5].id}`:
        history.push(`/debriefs/services/4`);
        break;
      default:
        break;
    }
  };

  return (
    // <div className="details" id="service-details" className="no-scroll">
    //     <div className="service-details-wrapper">
    //     <div className="details-photo">
    //         <div className="blue-layer-service"></div>
    //         <div className="blue-layer-service-under"></div>
    //         <img className="photo-inner" src={service.image} alt=""/>
    //     </div>
    //     <div className="absolute-details">

    //     <div className="details-content">
    //     <div className="title-details-services">
    //     <h2 className="service-title">{service.title}  </h2>
    //   <div className="underline"></div>
    //   </div>
    //   <div className="text-details-service">
    //       <p className="details-service">{service.paragraphDetails}</p>
    //     </div>
    //     </div>
    //     </div>
    // </div>
    // <button onClick={()=>handleNext()}>
    //   next
    // </button>
    // <button onClick={()=>handlePrevious()}>
    //   previous
    // </button>
    // </div>
    <section className="works">
      <HomeB />
      <div className="folio">
        <div className="work--container">
          <div className="inner--left--container">
            <Title title={service.title} />
            <div className="inner--text--container">
              <p>{service.paragraphDetails}</p>
            </div>
            <div className="work--navigation">
              <div className="next">
                <button
                  className="button-nav button--next"
                  onClick={handlePrevious}
                >
                  <p>Prev</p>
                </button>
              </div>

              <div className="previous">
                <button
                  className="button-nav button--previous"
                  onClick={handleNext}
                >
                  {" "}
                  <p>Next</p>{" "}
                </button>
              </div>
            </div>
            <div className="breadcrumbs">
              <p>{service.id + 1}/6</p>
            </div>
          </div>
          <div className="inner--right--container">
            <div className="slider--work">
              <div className="image--wrapper ">
                <div className="back-layer"></div>
                <img className="slider-image" src={service.image} alt="" />
                <div className="details--button"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceDetails;




