import React, { Component } from 'react';
import Project from "../components/Project";
import GooderReads from "../images/gooder_reads.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h3>Portfolio</h3>
        <hr />
        <Project url="https://goodest-reads.herokuapp.com/" git="https://github.com/shayneofficer/GooderReads" image={GooderReads}/>
      </div>
    );
  }
}

export default Portfolio;