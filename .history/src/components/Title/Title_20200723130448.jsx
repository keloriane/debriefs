import React from 'react';
import gsap from "gsap";
import "./title.scss";
export const Title = (props) => {
    const titleTl = gsap.timeline({})
    
    return (
        <div className="title-container">
            <h2>{props.title}</h2>
            <div className="underline"></div>
        </div>
    )
}
