import React from 'react';
import './App.css';

import Home from './components/page/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App" id="page">


          
        <Home />
              <Switch>
              
                <Route exact path="/a-propos" component={Opportunities} />
                <Route exact path="/services" component={Solutions} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/webinaires" component={Contact} />
                <Route exact path="/clients" component={Contact} />
              </Switch>
          </div>

    </Router>
  );
}
function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}



export default App;
