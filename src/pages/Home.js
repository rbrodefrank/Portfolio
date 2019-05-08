import React, { Component } from 'react';
import "./Pages.css"

class Home extends Component {
  componentWillMount = () => {
    window.location = "/projects";
  }

  render() {
    return (
      <div className="backgroundCard">
        <h3>Home</h3>
        <hr />

        <h4>Hello, I'm Ryan</h4>
        <br/>
        
        <p>Web Developer / Backend Developer</p>

        <p>I am a web developer with a background in finance. While I am proficient in full stack development, I specialize in backend development. I am skilled with JavaScript, React, Node.js, MongoDB, MySQL, HTML, and a variety of other technologies. If you would like to know more about me please visit the <a href="/about">About Section</a>, or if you would like to see some of my work you can visit the <a href="/projects">Projects Section.</a></p>
      </div>
    );
  }
}

export default Home;