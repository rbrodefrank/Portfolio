import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Background from './components/Background';
import NoMatch from './components/NoMatch';
// import Contact from './pages/Contact';

class App extends Component {
  render() {
    // let style = {
    //   height: "100%",
    //   backgroundImage: "url(" + DeveloperBackground + ")",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center center",
    //   backgroundAttachment: "fixed",
    // }

    return (
      <div >
        <Background />
        <NavBar />
        <Router>
          <div className="container">
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Portfolio} />
              {/* <Route exact path="/contact" component={Contact} /> */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
