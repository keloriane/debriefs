import React,{useEffect, useState} from "react";
import "./menu.scss";
import { Link, withRouter } from "react-router-dom";
import gsap from "gsap";
const MenuBox = (props) => {

 

const menuTl = gsap.timeline();
 


  return (
    <nav className="menu-box">
      <div className="menu__item menu__item1">
        <div className="menu__item-inner">
          <Link  >Accueil</Link>
          <Link >Services</Link>
          <Link >Webinaires</Link>
          <Link >Contact</Link>
          {props.home}
          {props.services}
          {props.webinaires}
          {props.contact}
        </div>
      </div>
      <div className="menu__item menu__item2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10071.152410930676!2d4.3810729!3d50.8721225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdce754b51bcbb245!2sLambermont%20140!5e0!3m2!1sen!2sbe!4v1594914561883!5m2!1sen!2sbe" width="100%" height="100%" frameborder="0" style={{border:0}} allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
      </div>
      <div className="menu__item menu__item3">
      </div>
      <div className="menu__item menu__item4"></div>
      <div className="menu__item menu__item5"></div>
    </nav>
  );
};
export default withRouter(MenuBox);
