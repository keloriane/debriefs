import React from "react";
import { services } from "./../../../data.js";
import "./ServiceDetails.scss";
import {Link} from 'react-router-dom';

const ServiceDetails = () => {
 
  return (
    <div className="details" id="service-details" className="no-scroll">
        <div className="service-details-wrapper">

        <div className="details-photo">
            <div className="blue-layer-service"></div>
            <img src={services[position].image} alt=""/>
        </div>
        <div className="details-content">
        <div className="title-details-services">
      <h2>{services[position].paragraph}  </h2>
      <div className="underline"></div>
      </div>
      <div className="text-details-service">
            <p>{services[position].paragraphDetails}</p>
        </div>
        </div>
    </div>
    <button >
      <Link>
      next
      </Link>
    </button>
    </div>
  );
};
export default ServiceDetails;
