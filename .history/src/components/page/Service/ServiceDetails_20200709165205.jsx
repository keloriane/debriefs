import React from 'react';
import {services} from './../../../data.json';


const ServiceDetails = () => {
    console.log(window.location.href);
    let splitedUrl = window.location.href.split('/');
    console.log(services);
    let position = splitedUrl[4];
    console.log(position);
    
    return(
        
          <div className="details">
            <p>{services[position].title}</p>
            <p>{services[position].paragraphDetails}</p>
          </div>  
    
       
    )
}
export default ServiceDetails;