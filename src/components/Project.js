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
        marginTop: "10px",
        marginBottom: "10px",
      },
    }
    return (
      <div style={style.project}>
        <a href={this.state.url} target="_blank" rel="noopener noreferrer"><img style={style.images} src={this.state.image} alt="Deployed"/></a>
        <a href={this.state.git} target="_blank" rel="noopener noreferrer"><img style={style.git} src={GitHubLogo} alt="Github Logo"/></a>
      </div>
    );
  }
}

export default Project;
