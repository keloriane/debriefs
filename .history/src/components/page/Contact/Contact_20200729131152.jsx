import React, { useEffect } from 'react';
import gsap from "gsap"
import "./contact.scss";
import { withRouter } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';

const Contact = (props) => {
    
    let contactTl = gsap.timeline({paused:true})
    useEffect(() => {

        let labels = document.querySelectorAll('label');
        let subtitle = document.querySelectorAll('.subtitle');
        let title = document.querySelector('.title');
        let inputs = document.querySelectorAll('input');
        let textarea = document.querySelectorAll('textarea');

        contactTl
            .from("#contact-page",.4,{opacity:0})
            .from("#contact-page .underline",.3,{width:0, delay:-.3})
            .from([labels, title, subtitle, inputs, textarea], {
                duration: 0.8,
                y: "100%",
                ease: "power3.inOut",
                opacity: 0,
                stagger: {
                    amount: 0.2
                }
            });
        contactTl.play();


    })
    const changePage=(e, destination) => {
        e.preventDefault();
        contactTl.reverse();
        const timelineDuration = contactTl.duration()*1000;
        setTimeout(() => {
            props.history.push(destination);
            console.log(props)
          }, timelineDuration);
    }



    return (
        <Transition>
        <div id="contact-page" className="no-scroll">
            <div className="logo-layer">
                <HomeB change={e=> changePage(e,('/debriefs/'))}  />
            </div>
            <div id="contact-wrapper">
                <div className="page-title">
                    <Title title="Contact" />
                   
                    <div className="descriptions">
                        <h4 className="subtitle">
                            Vous avez un projet ?
                    </h4>
                        <h4 className="subtitle">
                            Vous voulez rentrer en contact avec nous ?
                    </h4>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="post">
                        <div className="name-lastname-form">
                            <div className="name form-input">
                                <label>Name</label>
                                <input type="text" className="name-input" />
                            </div>
                            <div className="last-name form-input">
                                <label>Last name</label>
                                <input type="text" className="last-name-input" />
                            </div>
                        </div>
                        <div className="mail-form ">
                            <div className="mail-input form-input">
                                <label htmlFor="">mail</label>
                                <input type="mail" />
                            </div>
                        </div>
                        <div className="text-form  ">
                            <div className="text-input form-input">
                                <label> Votre projet / vos Questions  </label>
                                <textarea className="long-text" type="text" />
                            </div>
                        </div>
                        <div className="button-call">
                            <div className="line"></div>
                            <button type="submit">
                                <div className="button-overlay"></div>
                                <a href="#">CONFIRMER</a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </Transition>
    )
}

export default withRouter(Contact);