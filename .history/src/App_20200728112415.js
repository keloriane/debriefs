import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Contact from './components/page/Contact/Contact.jsx';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Home from './components/page/Home/Home';
import Cursor from './components/Cursor/Cursor';
import Main from "./components/page/Main/Main";
import Service from './components/page/Service/Services'
import ServiceDetails from './components/page/Service/ServiceDetails'
import Webinaires from './components/page/Webinaire/Webinaires';
import Techspace from './components/page/Techspace/Techspace';

import Histoire from './components/page/Histoire/Histoire';
import MenuBox from "./components/MenuBox/MenuBox";
import Loader from "./components/Loader/Loader"
import Footer from './components/page/Footer/Footer';
import Blog from "./components/page/Blog/Blog";
import Dcg from './components/page/Dcg/Dcg';


const routes = [
  { path: "/debriefs/", name: "Home", Component: Home },
  { path: "/debriefs/a-propos", name: "Main", Component: Main },
  { path: "/debriefs/services", name: "Services", Component: Service },
  { path: "/debriefs/contact", name: "Contact", Component: Contact },
  { path: "/debriefs/webinaire", name: "Webinaire", Component: Webinaires },
  { path: "/debriefs/blog", name: "Blog", Component: Blog },
  { path: "/techspace/", name: "Techspace", Component: Techspace },
  { path: "/techspace/histoire", name: "Histoire", Component: Histoire },
  { path: "/techspace/digital-career", name: "Dcg", Component: Dcg },
  { path: "/techspace/menubox/", name: "MenuBox", Component: MenuBox },
  { path: "/debriefs/services/:serviceId", name: "Detaille Services", Component: ServiceDetails },
  { path: "/debriefs/services/Sécurité", name: "Detaille Services", Component: ServiceDetails },
  { path: "/debriefs/services/Dévelopment", name: "Detaille Services", Component: ServiceDetails },
  { path: "/debriefs/services/Stratégie", name: "Detaille Services", Component: ServiceDetails },
  { path: "/debriefs/services/Design", name: "Detaille Services", Component: ServiceDetails },
  { path: "/debriefs/services/Audit", name: "Detaille Services", Component: ServiceDetails },
  { path: "/debriefs/services/Workshop", name: "Detaille Services", Component: ServiceDetails },
]

function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setLoaded(true)
    }, 2500)
    const page = window.location.href.split('/');
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    let webPage = document.getElementById('page')
    let header = document.getElementsByClassName('header-container')
    let lines = document.querySelectorAll('.burger-line')
    if (page[3] === "techspace" & loaded === true) {

        webPage.style.background = 'none'
        webPage.style.backgroundColor = 'white'
        webPage.style.color = 'black'
        header[0].style.backgroundColor = '#020f18'
        header[0].style.color = 'white'
        lines[0].style.backgroundColor="white"
        lines[1].style.backgroundColor="white"
        lines[2].style.backgroundColor="white"
    }
  })
  return (
    <HashRouter basename="/" >


       { loaded ? 
        <div className="App" id="page">
        <Cursor />
        <Header />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key="name" path={path} exact  render={routeProps => <Component {...routeProps} />} >
              {({ match }) => (
                  <Component  />
              )}
            </Route>
          ))}
        </Switch>
        <Footer />
      </div>
      
      
    
        :  <Loader />  }
      
    
    

    </HashRouter>
  );
}








export default App;
