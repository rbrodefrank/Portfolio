import React, { Component } from 'react';
import Project from "../components/Project";
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
        <Project title="Gooder Reads" url="https://goodest-reads.herokuapp.com/" git="https://github.com/shayneofficer/GooderReads" image={GooderReads}/>
        <Project title="Cross News" url="http://shayneofficer.me/CrossNews/" git="https://github.com/shayneofficer/CrossNews" image={CrossNews}/>
        <Project title="GifTastic" url="https://rbrodefrank.github.io/GifTastic/" git="https://github.com/rbrodefrank/GifTastic" image={GifTastic}/>
        <Project title="Pixar Trivia Game" url="https://rbrodefrank.github.io/TriviaGame/" git="https://github.com/rbrodefrank/TriviaGame" image={TriviaGame}/>
        <Project title="Word Guess Game" url="https://rbrodefrank.github.io/Word-Guess-Game/" git="https://github.com/rbrodefrank/Word-Guess-Game" image={WordGuess}/>        
        <Project title="Bamazon" url="https://rbrodefrank.github.io/Bamazon/" git="https://github.com/rbrodefrank/Bamazon" image={Bamazon}/>
        
      </div>
    );
  }
}

export default Portfolio;