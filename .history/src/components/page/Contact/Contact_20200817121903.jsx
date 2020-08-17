import React, { useEffect, useState } from 'react';
import gsap from "gsap"
import "./contact.scss";
import { Link, withRouter } from 'react-router-dom';
import { Title } from '../../Title/Title';
import { HomeB } from '../../BreadCrumbs/HomeB';
import Nav from './../../Nav/Nav';

const Contact = (props) => {
    
    const [state , setState] = useState({
        name:"",
        lastName:"",
        mail:"",
        message:''
    })


    const handleForm = (e) => {
        let target = e.target
        let value = e.target.value
        let name = target.name
    }
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
        
        <div id="contact-page" className="no-scroll">
        <Nav animation={e => changePage(e , "/")} animation0={e => changePage(e , "/services")} animation1={e => changePage(e , "/webinaire/")} animation2={e => changePage(e , "/techspace/")} animation3={e => changePage(e , "/blog")}  />

            <div className="logo-layer">
                <HomeB change={e=> changePage(e,('/'))}  />
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
                                <label>Nom</label>
                                <input type="text" className="name-input" onChange={handleForm} name="name" value={state.name} />
                            </div>
                            <div className="last-name form-input">
                                <label>Prénom</label>
                                <input type="text" className="last-name-input" />
                            </div>
                        </div>
                        <div className="mail-form ">
                            <div className="mail-input form-input">
                                <label htmlFor="">e-mail</label>
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
                                <Link href="/debriefs/home">CONFIRMER</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default withRouter(Contact);