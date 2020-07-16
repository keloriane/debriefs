import React,{useEffect, useState} from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
const MenuBox = ({state}) => {

 

  


  return (
    <nav className="menu-box">
      <div className="menu__item menu__item1">
        <div className="menu__item-inner">
          <Link>Accueil</Link>
          <Link>Services</Link>
          <Link>Webinaires</Link>
          <Link>Contact</Link>
        </div>
      </div>
      <div className="menu__item menu__item2">
          <h1>2</h1>
      </div>
      <div className="menu__item menu__item3">
      </div>
      <div className="menu__item menu__item4"></div>
      <div className="menu__item menu__item5"></div>
    </nav>
  );
};
export default MenuBox;
