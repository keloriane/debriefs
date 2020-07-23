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
import {CSSTransition} from 'react-transition-group';
import Histoire from './components/page/Histoire/Histoire';
import MenuBox from "./components/MenuBox/MenuBox";
import Loader from "./components/Loader/Loader"
import Footer from './components/page/Footer/Footer';


const routes = [
  { path: "/debriefs/", name: "Home", Component: Home },
  { path: "/debriefs/a-propos", name: "Main", Component: Main },
  { path: "/debriefs/services", name: "Services", Component: Service },
  { path: "/debriefs/service/:serviceId", name: "Detaille Services", Component: ServiceDetails },
  { path: "/debriefs/contact", name: "Contact", Component: Contact },
  { path: "/debriefs/webinaire", name: "Webinaire", Component: Webinaires },
  { path: "/techspace/", name: "Techspace", Component: Techspace },
  { path: "/techspace/histoire/", name: "Histoire", Component: Histoire },
  { path: "/techspace/menubox/", name: "MenuBox", Component: MenuBox },
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
    <HashRouter basename="/">


       { loaded ? 
        <div className="App" id="page">
        <Cursor />
        <Header />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key="name" path={path} exact  render={routeProps => <Component {...routeProps} />} >
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames="page"
                  unmountOnExit
                >
                  <Component />
                </CSSTransition>
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


function Solutions() {
  return <h1>SERVICES</h1>;
}





export default App;
