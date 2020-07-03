import React from 'react';
import './App.css';
import Menu from "./view/Menu/Menu";
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App" id="page">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
