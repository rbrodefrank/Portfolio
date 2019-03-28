import React, { Component } from "react";
import GitHubLogo from "../images/Github-Logo.jpg";

class Project extends Component {
  state = {
    git: this.props.git,
    url: this.props.url,
    image: this.props.image,
  }

  render () {
    const style = {
      images: {
        maxWidth:"250px",
        maxHeight: "200px",
        marginRight: "5px",
      },
      git: {
        height: "50px",
        width: "50px",
      }
    }
    return (
      <div>
        <a href={this.state.url} target="_blank" rel="noopener noreferrer"><img style={style.images} src={this.state.image} alt="Deployed"/></a>
        <a href={this.state.git} target="_blank" rel="noopener noreferrer"><img style={style.git} src={GitHubLogo} alt="Github Logo"/></a>
      </div>
    );
  }
}

export default Project;
