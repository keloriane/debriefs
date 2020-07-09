import React from 'react';
import {services} from './../../../data.json';


const ServiceDetails = () => {
    console.log(window.location.href);
    let splitedUrl = window.location.href.split('/');
    console.log(services);
    let position = splitedUrl[4];
    console.log(position);
    services.map(service=>(
      <div className="details">
        <p>{service.id}</p>
      </div>  

    ))

    return(
    )
}
export default ServiceDetails;