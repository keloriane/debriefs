import React,{useEffect} from "react";
import { services } from "./../../../data.js";
import {useParams,useRouteMatch, useHistory, useLocation} from "react-router-dom";
import gsap from "gsap";
import "./ServiceDetails.scss";
import { Title } from "../../Title/Title.jsx";

const ServiceDetails = () => {
  const detailsService = gsap.timeline({paused:true});
  useEffect(()=>{
    // const serviceTitle = document.querySelector('.service-title');
    // const photo = document.querySelector('.photo-inner');
    // const textDetails = document.querySelector('.details-service');
    // const blueBg = document.querySelector('.blue-layer-service-under');
    // detailsService.play()
    
    // detailsService
    //   .from([serviceTitle,textDetails], .4,{y:100, opacity:0, stagger: .15})
    //   .to(blueBg,1,{x:"100%"})
    //   .from(photo, .4,{x:"-100%", opacity:0})
    const imageSlider = document.getElementsByClassName('slider-image')
        let layer = document.getElementsByClassName('back-layer')
        const workTimeline = gsap.timeline();
        workTimeline
            .from(layer,.4,{x:"-50%", ease:"ease.out"})
            .from(imageSlider,.5    ,{x:"-100%", delay:-.2})
            .from(".works  p",.5 ,{y:"40%", opacity:0,delay:-.2})
  })




  const {serviceId} = useParams()
  let {url} = useRouteMatch()
  const service = services.find(({ name })=> name === serviceId)
  let history = useHistory()
  console.log(url)
  let location = useLocation()
  console.log(location)
  const handleNext = () => {
    switch (url) {
      case `/debriefs/service/${services[0].name}`:
          history.push(services[1].name)
          break
      case `/debriefs/service/${services[1].name}`:
          history.push(services[2].name)
          break
      case `/debriefs/service/${services[2].name}`:
          history.push(services[3].name)
          break
      case `/debriefs/service/${services[3].name}`:
          history.push(services[4].name)
          break
      case `/debriefs/service/${services[4].name}`:
          history.push(services[5].name)
        break;
      case `/debriefs/service/${services[5].name}`:
          history.push(services[0].name)
        break;
      default: break
    }
    detailsService.play()
  }
  const handlePrevious = () => {
    switch (url) {
      case `/debriefs/service/${services[0].name}`:
          history.push(services[5].name)
          break
      case `/debriefs/service/${services[1].name}`:
          history.push(services[0].name)
          break
      case `/debriefs/service/${services[2].name}`:
          history.push(services[1].name)
          break
      case `/debriefs/service/${services[3].name}`:
          history.push(services[2].name)
          break
      case `/debriefs/service/${services[4].name}`:
          history.push(services[3].name)
        break;
      case `/debriefs/service/${services[5].name}`:
          history.push(services[4].name)
        break;
      default: break
    }
  
  }

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
    <div className="folio">
    <div className="work--container">

        <div className="inner--left--container">
          <Title title={service.title} />
        <div className="inner--text-container">
              <p>{service.paragraphDetails}</p>
            </div>  
            <div className="work--navigation">
                <div className="next">
                    <button className="button-nav button--next" onClick={handlePrevious}>Prev</button>
                </div>
                <div className="previous">
                    <button className="button-nav button--previous" onClick={handleNext}> Next </button>
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
            <img className="slider-image" src={service.image} alt=""/>
                <div className="details--button">
                </div>
            </div>
        </div>
    </div>

    </div>

</div>
    </section>

  )
}
export default ServiceDetails;
