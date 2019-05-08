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
import StarWars from "../images/starwars.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div style={{marginBottom: "10px", marginTop: "10px"}}>
        <h3>Projects</h3>
        <hr />
        <Row >
          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="Point-of-Sale System" url="https://radiant-beyond-45567.herokuapp.com/" git="https://github.com/shayneofficer/POS-System" image={POSS} discription="This app was developed to improve upon some of the pain points that restaurants typically have with their POS systems. The Webster Halsted POS system combines a consumer facing view and a restaurant employee view accessed through a login system." /></Col>
          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="Cross News" url="http://shayneofficer.me/CrossNews/" git="https://github.com/shayneofficer/CrossNews" image={CrossNews} discription="Primarily a crossword app, which can display almost all of the puzzles published by the New York Times since Jan 1st 1977 by accessing the open source archive maintained by @doshea." /></Col>
          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="Gooder Reads" url="https://goodest-reads.herokuapp.com/" git="https://github.com/shayneofficer/GooderReads" image={GooderReads} discription="GooderReads was conceived as a parody project of Good Reads to let us test our knowledge of Object Oriented Programming and Relational Database Usage." /></Col>

          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="GifTastic" url="https://rbrodefrank.github.io/GifTastic/" git="https://github.com/rbrodefrank/GifTastic" image={GifTastic} discription="Gif Tastic is a website app that retreives Gifs from Giphy using the Giphy API." /></Col>
          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="Pixar Trivia Game" url="https://rbrodefrank.github.io/TriviaGame/" git="https://github.com/rbrodefrank/TriviaGame" image={TriviaGame} discription="Pixar Trivia is a trivia game with 10 multiple choice questions to test a user's knowledge on all things Pixar. " /></Col>
          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="Star Wars RPG" url="https://rbrodefrank.github.io/Star-Wars-RPG/" git="https://github.com/rbrodefrank/Star-Wars-RPG" image={StarWars} discription="Star Wars RPG is a game app that allows users to pick and battle different characters from the Star Wars franchise" /></Col>        

          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="Bamazon" url="https://rbrodefrank.github.io/Bamazon/" git="https://github.com/rbrodefrank/Bamazon" image={Bamazon} discription="Bamazon is an interactive program for buying, stocking, and keeping track of store inventory. It is meant to be used by three seperate user types: customers, managers, and supervisors." /></Col>
          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"><Project title="Word Guess Game" url="https://rbrodefrank.github.io/Word-Guess-Game/" git="https://github.com/rbrodefrank/Word-Guess-Game" image={WordGuess} discription="A simple Word Guessing Game with a fantasy creature theme." /></Col>          
          <Col style={{minWidth: "318px"}} xl="4" md="6" s="9"></Col>
        </Row>
      </div>
    );
  }
}

export default Portfolio;