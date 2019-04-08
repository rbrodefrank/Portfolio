import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from "../components/Project";
import POSS from "../images/pos_system.jpg";
import GooderReads from "../images/gooder_reads.jpg";
import CrossNews from "../images/cross_news.jpg";
import GifTastic from "../images/giftastic.jpg";
import Bamazon from "../images/bamazon.jpg";
import TriviaGame from "../images/trivia_game.jpg";
import WordGuess from "../images/word_guess.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h3>Portfolio</h3>
        <hr />
        <Row>
        <Col><Project title="Point-of-Sale System" url="https://radiant-beyond-45567.herokuapp.com/" git="https://github.com/shayneofficer/POS-System" image={POSS} /></Col>     
          <Col><Project title="Cross News" url="http://shayneofficer.me/CrossNews/" git="https://github.com/shayneofficer/CrossNews" image={CrossNews} /></Col>     
          <Col><Project title="Gooder Reads" url="https://goodest-reads.herokuapp.com/" git="https://github.com/shayneofficer/GooderReads" image={GooderReads} /></Col>
        </Row>
        <br/>
        <Row>
          <Col><Project title="GifTastic" url="https://rbrodefrank.github.io/GifTastic/" git="https://github.com/rbrodefrank/GifTastic" image={GifTastic} /></Col>
          <Col><Project title="Pixar Trivia Game" url="https://rbrodefrank.github.io/TriviaGame/" git="https://github.com/rbrodefrank/TriviaGame" image={TriviaGame} /></Col>
          <Col><Project title="Word Guess Game" url="https://rbrodefrank.github.io/Word-Guess-Game/" git="https://github.com/rbrodefrank/Word-Guess-Game" image={WordGuess} /></Col>
        </Row>
        <br/>
        <Row>
          <Col><Project title="Bamazon" url="https://rbrodefrank.github.io/Bamazon/" git="https://github.com/rbrodefrank/Bamazon" image={Bamazon} /></Col>
        </Row>
      </div>
    );
  }
}

export default Portfolio;