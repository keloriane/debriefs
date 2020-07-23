import React,{useEffect} from "react";
import {Link, useRouteMatch} from "react-router-dom"
import "./services.scss";
import {services} from './../../../data.js';
import gsap from 'gsap'
import { Title } from "../../Title/Title";
import { HomeB } from "../../BreadCrumbs/HomeB";
const Services = () => {

  const {url, path} = useRouteMatch()

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
        <HomeB/>
        {/* <div className="title-service">
          <h2>Nos Services</h2>
          <div className="underline"></div>
        </div> */}
        <Title title="Services" />
        <div className="services-grid">
          {services.map(({name,id,title,paragraph,paragraphBreak }) => (
              <Link to={`/debriefs/service/${name}`} key={id}>
                <div className="service-item" >
              <p className="number"> 0{(id) + 1} /</p>
              <div className="headline-service">
                <h3>{title}</h3>
              </div>

              <p>
                {paragraph} <br /> {paragraphBreak}{" "}
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
