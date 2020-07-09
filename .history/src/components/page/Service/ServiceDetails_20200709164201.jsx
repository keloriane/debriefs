import React from 'react';
import {services} from './../../../data.json';


const ServiceDetails = () => {
    console.log(window.location.href);
    let splitedUrl = window.location.href.split('/');
    console.log(services);
    let position = splitedUrl[4];
    console.log(position);
    if(services[0] === position){
        
    }
    
    return(
        services.map(service=>(
          <div className="details">
            <p>{service[position].id}</p>
          </div>  
    
        ))
    )
}
export default ServiceDetails;