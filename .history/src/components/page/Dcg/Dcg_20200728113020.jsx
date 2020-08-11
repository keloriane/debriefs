import React from 'react';
import room from "./../../../assets/images/room.png"
import "./dcg.scss";

const Dcg = () => {
    return (
        <div id="digital-career-center">
            <div className="dcg-image-container">
                <div className="inner-image">
                    <img src={room} alt=""/>
                </div>
            </div>
            <div className="dcg-text-container"></div>
        </div>
    )
}
export default Dcg;
