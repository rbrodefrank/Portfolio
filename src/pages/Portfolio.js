import React, { Component } from 'react';
import Project from "../components/Project";
import GooderReads from "../images/gooder_reads.jpg";
import CrossNews from "../images/cross_news.jpg";
import GifTastic from "../images/giftastic.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h3>Portfolio</h3>
        <hr />
        <Project title="Gooder Reads" url="https://goodest-reads.herokuapp.com/" git="https://github.com/shayneofficer/GooderReads" image={GooderReads}/>
        <Project title="Cross News" url="http://shayneofficer.me/CrossNews/" git="https://github.com/shayneofficer/CrossNews" image={CrossNews}/>
        <Project title="GifTastic" url="https://rbrodefrank.github.io/GifTastic/" git="https://github.com/rbrodefrank/GifTastic" image={GifTastic}/>
        
      </div>
    );
  }
}

export default Portfolio;