import React,{useEffect} from "react";
import {Link} from "react-router-dom"
import "./services.scss";
import {services} from './../../../data.js';
import gsap from 'gsap'
const Services = () => {
    useEffect(()=>{
        gsap.from('#services p',.6,{
            y:70, 
            opacity:0,
            delay:.1
            
        })
        gsap.from('#services h3',.4,{
            y:70, 
            opacity:0,
            
        })
        
    })
  return (
    <div id="services" className="no-scroll">
      <div className="service-container">
        <div className="title-service">
          <h2>Nos Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
              <Link to={`/debriefs/details/${service.id}`} key={service.id}>
                <div className="service-item" >
              <p className="number"> 0{(service.id) + 1} /</p>
              <div className="headline-service">
                <h3>{service.title}</h3>
              </div>

              <p>
                {service.paragraph} <br /> {service.paragraphBreak}{" "}
              </p>
              <div className="underline-service"></div>
            </div>

              </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
