import React from "react";
import { services } from "./../../../data.js";

const ServiceDetails = () => {
  let splitedUrl = window.location.href.split("/");
  let position = splitedUrl[4];

  let para = services[position].paragraphDetails.replace('\n',"<br/>")
  let paraquot =para.replace(/['"]+/g, '')
  return (
    <div className="details">
        <div className="title-details-services">
      <h2>{services[position].title}</h2>

        </div>
      <div className="text-details-service">
  <p>{paraquot}</p>
      </div>
    </div>
  );
};
export default ServiceDetails;
