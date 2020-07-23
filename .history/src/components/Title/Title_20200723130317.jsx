import React from 'react';
import gsap from "gsap";
export const Title = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div className="underline"></div>
        </div>
    )
}
