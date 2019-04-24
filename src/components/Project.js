import React, { Component } from "react";
import GitHubLogo from "../images/Github-Logo.jpg";
import "./Project.css";

class Project extends Component {
  state = {
    git: this.props.git,
    url: this.props.url,
    image: this.props.image,
  }

  render() {
    return (
      <div className="project">
        <h4>{this.props.title}</h4>
        <a href={this.state.url} target="_blank" rel="noopener noreferrer" className="holder">
          <img className="images" src={this.state.image} alt="Deployed" />
          <div className="middleText">
            <div className="text">Click to View</div>
          </div>
        </a>
        <a className="aGit" href={this.state.git} target="_blank" rel="noopener noreferrer"><img className="git" src={GitHubLogo} alt="Github Logo" /></a>
        <p>{this.props.discription}</p>
      </div>

    );
  }
}

export default Project;
