import React, { Component } from 'react';
import profilePic from "../images/profile_pic.jpg";

class About extends Component {
  style = {
    image: {
      float: "left",
      marginRight: "5px",
      marginBottom: "5px",
    }
  }
  render() {
    return (
      <div>
        <h3>About Me</h3>
        <hr />
        <img id="profile-picture" style={this.style.image} src={profilePic} alt="Headshot of Ryan BrodeFrank" />
        <p>
          Illinois born and raised, Ryan has lived in Milwaukee, Washington D.C., and Chicago. Currently residing in Chicago with his wife and his dog, Ryan transitioned from the financial sector to the tech world. His love for most things "nerd" means that Ryan and his wife spend a lot of time watching tv, movies, playing games, reading books, and traveling. Ryan's love of video games inspired him to build his own, which inspired his passion for programming.
        </p>
        <p>
          When he's not in Chicago, working or spending time on one of his many nerdy passions, Ryan and his wife love to travel. They are frequent visitors of Disney World, but also like to explore the natural beauty of America, and the exciting cultural highlights of the world. Fresh off an eating tour of Western Europe, Ryan and his wife are already planning their next trip to Tokyo!
        </p>

      </div>
    );
  }
}

export default About;