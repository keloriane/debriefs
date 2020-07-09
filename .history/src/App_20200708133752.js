import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Contact from './components/page/Contact/Contact.jsx';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Home from './components/page/Home/Home';
import Cursor from './components/Cursor/Cursor';



function App() {
  return (
    <HashRouter basename="/">
      <div className="App" id="page">
          <Cursor/>
          <Header/>
    
       
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/a-propos" component={About} />
                <Route exact path="/services" component={Solutions} />
                <Route exact path="/contact" component={Contact} />
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
