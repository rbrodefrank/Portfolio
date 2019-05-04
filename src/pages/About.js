import React, { Component } from 'react';
import profilePic from "../images/profile_pic.jpg";
import "./Pages.css"

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
      <div className="backgroundCard">
        <h3>About Me</h3>
        <hr />
        <img id="profile-picture" style={this.style.image} src={profilePic} alt="Headshot of Ryan BrodeFrank" />
        <p>
          I started my career almost five years ago in finance after graduating from Knox College with my BA in Economics. Though I started as an acquisitions analyst in finance, I quickly became aware that the only parts of my finance jobs I was enjoying were the computer programming aspects that were relegated to me due to my minor in Computer Science. I was often put on more technical tasks such as writing computer algorithms to predict complex financial data or using tenant data to send automated notices, and after a few years it became obvious what I truly enjoyed were these programmatic tasks.
        </p>
        <p>
          I decided to make a complete career change into computer programming when we relocated to Chicago and started creating computer games on my own. Using Game Maker I worked on a handful of projects, learning new skills and confronting new issues with each one, until I discovered the Northwestern University Web Development Boot Camp. I was quickly accepted into the program and am currently completing the program with a graduation date of February 2019. In this program I have learned and become skilled in: JavaScript, Node.js, HTML, CSS, MySQL, full-stack development, and database management.  Through this program I have become assured I have made the right career path change, finding particular enjoyment in the back-end programming of websites and databases.
        </p>
        <p>
          My previous experiences in finance has given me a unique leg up. I not only managed entire offices, taking the lead on scheduling, payments, travel arrangements, budgeting and website management, but I also have worked with outside vendors as well as contractors.  This experience will serve me well in any office situation and is a great asset when combined with my computer programming skills.  I am new to programming, but I am not new to working well within a team and that is one of my finer assets.
        </p>

      </div>
    );
  }
}

export default About;