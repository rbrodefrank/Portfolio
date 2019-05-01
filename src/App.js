import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import ComputerBackground from "./images/background_computer.jpg";
import DeveloperBackground from "./images/background_developer.jpg";
// import Contact from './pages/Contact';

class App extends Component {
  render() {
    const style = {
      height: "100%",
      backgroundImage: "url(" + DeveloperBackground + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }

    return (
      <div  style={style}>
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
