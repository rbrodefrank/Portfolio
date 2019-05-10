import React, { Component } from 'react';
import ComputerBackground from "../images/background_computer.jpg";
import DeveloperBackground from "../images/background_developer.jpg";
import "./Background.css";

// import Contact from './pages/Contact';

class Background extends Component {
  render() {
    const style = {
      backgroundImg: {
        height: "100vh",
        width: "100vw",
        backgroundImage: "url(" + DeveloperBackground + ")",
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