import React, { Component } from 'react';
import Project from "../components/Project";
import GooderReads from "../images/gooder_reads.jpg";
import CrossNews from "../images/cross_news.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h3>Portfolio</h3>
        <hr />
        <Project url="https://goodest-reads.herokuapp.com/" git="https://github.com/shayneofficer/GooderReads" image={GooderReads}/>
        <Project url="http://shayneofficer.me/CrossNews/" git="https://github.com/shayneofficer/CrossNews" image={CrossNews}/>
        
      </div>
    );
  }
}

export default Portfolio;