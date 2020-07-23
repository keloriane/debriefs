import React,{useState, useEffect} from "react";
import { services } from "./../../../data.js";
import {useParams,useRouteMatch, useHistory, useLocation} from "react-router-dom";
import gsap from "gsap";
import "./ServiceDetails.scss";

const ServiceDetails = () => {
  useEffect(()=>{
    const serviceTitle = document.querySelector('.service-title');
    const photo = document.querySelector('.photo-inner');
    const textDetails = document.querySelector('.details-service');

    gsap.from([serviceTitle,textDetails], .4,{y:100, opacity:0, stagger: .3})
    gsap.from(photo, .4,{x:"-100%", opacity:0})
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

    <div className="details" id="service-details" className="no-scroll">
        <div className="service-details-wrapper">
        <div className="details-photo">
            <div className="blue-layer-service"></div>
            <img className="photo-inner" src={service.image} alt=""/> 
        </div>
        <div className="absolute-details">

        <div className="details-content">
        <div className="title-details-services">
        <h2 className="service-title">{service.title}  </h2> 
      <div className="underline"></div>
      </div>
      <div className="text-details-service">
          <p className="details-service">{service.paragraphDetails}</p> 
        </div>
        </div>
        </div>
    </div>
    <button onClick={()=>handleNext()}>
      next
    </button>
    <button onClick={()=>handlePrevious()}>
      previous
    </button>
    </div>
  )
}
export default ServiceDetails;
