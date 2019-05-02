import React, { Component } from "react";
import GitHubLogo from "../images/Github-Logo.jpg";
import LinkedInLogo from "../images/linkedin.jpg";

class Navigation extends Component {
  componentDidMount = () => {
    var active = document.getElementById(window.location.pathname.slice(1));
    var removal = document.getElementsByClassName("active")[0];
    if (removal) removal.classList.remove("active");
    if (active) active.classList.add("active");
  }

  render() {
    return (
      <div>
        <div style={{ minWidth: "325px", minHeight: "66px" }}></div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top scrolling-navbar" style={{ minWidth: "325px", minHeight: "66px" }}>
          {/* className for Nav: fixed-top scrolling-navbar */}
          <a className="navbar-brand" id="main" href="/">Ryan BrodeFrank</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active" id="projects" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="about" href="/about">About</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <a className="navbar-brand" href="https://github.com/rbrodefrank" target="_blank" rel="noopener noreferrer" ><img style={{ height: "40px", width: "40px" }} src={GitHubLogo} alt="Github Link" /> GitHub</a>
              <a className="navbar-brand" href="https://www.linkedin.com/in/ryan-brodefrank-7933288b/" target="_blank" rel="noopener noreferrer" ><img style={{ height: "40px", width: "40px" }} src={LinkedInLogo} alt="Linkedin Link" /> LinkedIn</a>
            </ul>
          </div>
          {/* <a className="navbar-brand" id="Contact" href="/contact">Contact</a> */}
        </nav>
      </div>
    );
  }
}

export default Navigation;
