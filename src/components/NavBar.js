import React, { Component } from "react";

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" id="Main" href="/">
          Ryan BrodeFrank
        </a>
        <a className="navbar-brand" id="Portfolio" href="/portfolio">Portfolio</a>
        <a className="navbar-brand" id="Contact" href="/contact">Contact</a>
      </nav>
    );
  }
}

export default Navbar;
