import React, { Component } from 'react';
import profilePic from "../images/profile_pic.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <h3>About Me</h3>
        <hr/>
        <img id="profile-picture" src={profilePic} alt="Headshot of Ryan BrodeFrank" />
      </div>
    );
  }
}

export default About;