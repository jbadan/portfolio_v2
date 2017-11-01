import React, { Component } from 'react';
import './App.css';
import Home from "./Home";
import About from "./About";
import Work from  "./Work";
import Contact from "./Contact";
import NotFound from "./NotFound";

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/work" component={Work} />
           <Route path="/contact" component={Contact} />
           <Route component={NotFound} />
         </Switch>
    </Router>
    );
  }
}

export default App;
