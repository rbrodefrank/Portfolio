import React, { Component } from 'react';
import ForestBackground from "../images/background_forest.jpg";
import DeveloperBackground from "../images/background_developer.jpg";
import "./Background.css"

// import Contact from './pages/Contact';

class Background extends Component {
  state = {
    backgroundImage: DeveloperBackground,
  }

  componentDidMount = () => {
    var active = window.location.pathname.slice(1);
    if (active === "portfolio") this.setState({backgroundImage: DeveloperBackground}) 
    else if (active === "about") this.setState({backgroundImage: ForestBackground})
  }
  
  render() {
    const style = {
      backgroundImg: {
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + this.state.backgroundImage + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "fixed",
        zIndex: -100,
      },
      mask: {
        height: "100vh",
        width: "100vw",
        zIndex: -99,
      }
    }

    return (
      <div style={style.backgroundImg} >
        <div style={style.mask} className="gradient">

        </div>
      </div>
    );
  }
}

export default Background;