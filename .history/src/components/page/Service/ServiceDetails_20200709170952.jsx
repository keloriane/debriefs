import React from "react";
import { services } from "./../../../data.js";

const ServiceDetails = () => {
  let splitedUrl = window.location.href.split("/");
  let position = splitedUrl[4];

  let para = services[position].paragraphDetails.replace('/n',"<br>")
  console.log(para);
  return (
    <div className="details">
        <div className="title-details-services">
      <h2>{services[position].title}</h2>

        </div>
      <div className="text-details-service">
        <p>{services[position].paragraphDetails}</p>
      </div>
    </div>
  );
};
export default ServiceDetails;
