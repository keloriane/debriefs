import React,{useState} from "react";
import { services } from "./../../../data.js";
import {useParams,useRouteMatch, useHistory, useLocation} from "react-router-dom";

import "./ServiceDetails.scss";

const ServiceDetails = () => {
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
      case `/debriefs/details/${services[0].name}`:
          history.push(services[1].name)
          break
      case `/debriefs/details/${services[1].name}`:
          history.push(services[2].name)
          break
      case `/debriefs/details/${services[2].name}`:
          history.push(services[3].name)
          break
      case `/debriefs/details/${services[3].name}`:
          history.push(services[4].name)
          break
      case `/debriefs/details/${services[4].name}`:
          history.push(services[5].name)
        break;
      case `/debriefs/details/${services[5].name}`:
          history.push(services[0].name)
        break;
      default: break
    }
  const handlePrevious = () => {
    switch (url) {
      case `/debriefs/details/${services[0].name}`:
          history.push(services[5].name)
          break
      case `/debriefs/details/${services[1].name}`:
          history.push(services[4].name)
          break
      case `/debriefs/details/${services[2].name}`:
          history.push(services[3].name)
          break
      case `/debriefs/details/${services[3].name}`:
          history.push(services[2].name)
          break
      case `/debriefs/details/${services[4].name}`:
          history.push(services[1].name)
        break;
      case `/debriefs/details/${services[5].name}`:
          history.push(services[0].name)
        break;
      default: break
    }
  
  }

  return (
    <div className="details" id="service-details" className="no-scroll">
        <div className="service-details-wrapper">
        <div className="details-photo">
            <div className="blue-layer-service"></div>
            {/* <img src={services[position].image} alt=""/> */}
        </div>
        <div className="details-content">
        <div className="title-details-services">
        <h2>{service.title}  </h2> 
      <div className="underline"></div>
      </div>
      <div className="text-details-service">
          <p>{service.paragraphDetails}</p> 
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
