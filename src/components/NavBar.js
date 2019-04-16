import React, { Component } from "react";
import GitHubLogo from "../images/Github-Logo.jpg";
import LinkedInLogo from "../images/linkedin.jpg";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="mr-auto">
          <a className="navbar-brand" id="Main" href="/">
            Ryan BrodeFrank
          </a>
          <a className="navbar-brand" id="Portfolio" href="/portfolio">Portfolio</a>
        </span>
        <span>
          <a className="navbar-brand" href="https://github.com/rbrodefrank" target="_blank" rel="noopener noreferrer" ><img style={{ height: "30px", width: "30px" }} src={GitHubLogo} alt="Github Link" /></a>
          <a className="navbar-brand" href="https://www.linkedin.com/in/ryan-brodefrank-7933288b/" target="_blank" rel="noopener noreferrer" ><img style={{ height: "30px", width: "30px" }} src={LinkedInLogo} alt="Linkedin Link" /></a>
        </span>
        {/* <a className="navbar-brand" id="Contact" href="/contact">Contact</a> */}
      </nav>
    );
  }
}

export default Navbar;
