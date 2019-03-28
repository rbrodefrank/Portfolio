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
        width:"200px",
        height: "150px",
        marginRight: "5px",
      },
      git: {
        height: "50px",
        width: "50px",
      },
      project: {
        marginTop: "15px",
        marginBottom: "15px",
      },
    }
    return (
      <span style={style.project}>
        <h4>{this.props.title}</h4>
        <a href={this.state.url} target="_blank" rel="noopener noreferrer"><img style={style.images} src={this.state.image} alt="Deployed"/></a>
        <a href={this.state.git} target="_blank" rel="noopener noreferrer"><img style={style.git} src={GitHubLogo} alt="Github Logo"/></a>
      </span>
    );
  }
}

export default Project;
