import React,{useState, useEffect} from "react";
import { services } from "./../../../data.js";
import {useParams,useRouteMatch, useHistory, useLocation} from "react-router-dom";
import gsap from "gsap";
import "./ServiceDetails.scss";

const ServiceDetails = () => {
  const detailsService = gsap.timeline({paused:true});
  useEffect(()=>{
    const serviceTitle = document.querySelector('.service-title');
    const photo = document.querySelector('.photo-inner');
    const textDetails = document.querySelector('.details-service');
    const blueBg = document.querySelector('.blue-layer-service-under');
    detailsService.play()
    
    detailsService
      .from([serviceTitle,textDetails], .4,{y:100, opacity:0, stagger: .15})
      .to(blueBg,1,{x:"100%"})
      .from(photo, .4,{x:"-100%", opacity:0})
  })




  const {serviceId} = useParams()
  let {url} = useRouteMatch()
  const service = services.find(({ name })=> name === serviceId)
  const [state , setState] = useState()
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
    <div className="folio">
    <div className="work--container">
        <div className="inner--left--container">
            <div className="work--navigation">
                <div className="next">
                    <button className="button-nav button--next" onClick={handlePrevious}>Prev</button>
                </div>
                <div className="previous">
                    <button className="button-nav button--previous" onClick={handleNext}> Next </button>
                </div>
            </div>
        <div className="breadcrumbs">
            <p>1/2</p>
        </div>
    </div>
    <div className="inner--right--container">
        <div className="slider--work">
            <div className="image--wrapper ">
            <div className="back-layer"></div>
                <img src="./assets/img/omismo.png" alt="" className="slider-image"/>
                <div className="details--button">
                    <button className="details"> 
                        Details 
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="#131636"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="#131636"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    </div>

</div>

  )
}
export default ServiceDetails;
