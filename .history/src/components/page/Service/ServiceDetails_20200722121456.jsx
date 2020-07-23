import React from "react";
import { services } from "./../../../data.js";
import "./ServiceDetails.scss";
import {Link , useParams} from 'react-router-dom';

const ServiceDetails = () => {
  const {name} = useParams()
  return (
    <div className="details" id="service-details" className="no-scroll">
        <div className="service-details-wrapper">

        <div className="details-photo">
            <div className="blue-layer-service"></div>
            <img alt=""/>
        </div>
        <div className="details-content">
        <div className="title-details-services">
      <h2> </h2>
      <div className="underline"></div>
      </div>
      <div className="text-details-service">
            <p></p>
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
