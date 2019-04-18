import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
// import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Portfolio} />
            {/* <Route exact path="/contact" component={Contact} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
