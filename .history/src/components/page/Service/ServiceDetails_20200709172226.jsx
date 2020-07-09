import React from "react";
import { services } from "./../../../data.js";

const ServiceDetails = () => {
  let splitedUrl = window.location.href.split("/");
  let position = splitedUrl[4];

  let para = services[position].paragraphDetails.replace('\n',"<br/>")
  let service = services.position;
  return (
    <div className="details">
        <div className="details-photo">
            <div className="blue-layer"></div>
            <img src={service.image} alt=""/>
        </div>
        <div className="details-content">

        <div className="title-details-services">
      <h2>{service.title}</h2>
      </div>

      <div className="text-details-service">
            <p>{para}</p>
        </div>
        </div>
    </div>
  );
};
export default ServiceDetails;
