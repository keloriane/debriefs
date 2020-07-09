import React,{useEffect} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Contact from './components/page/Contact/Contact.jsx';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Home from './components/page/Home/Home';
import Cursor from './components/Cursor/Cursor';
import Main from "./components/page/Main/Main";




function App() {
  useEffect(()=>{
    let vh = window.innerHeight *0.1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})
  return (
    <HashRouter basename="/">
      <div className="App" id="page">
          <Cursor/>
          <Header/>
    
       
              <Switch>
                <Route exact path="/debriefs/" component={Home} />
                <Route exact path="/debriefs/a-propos" component={Main} />
                <Route exact path="/services" component={Solutions} />
                <Route exact path="/debriefs/contact" component={Contact} />
                <Route exact path="/webinaires" component={Contact} />
                <Route exact path="/clients" component={Contact} />
              </Switch>
          </div>

    </HashRouter>
  );
}
function About() {
  return <h1>About</h1>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}





export default App;
