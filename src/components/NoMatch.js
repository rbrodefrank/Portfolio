import React, { Component } from 'react';

class NoMatch extends Component {
  componentWillMount = () => {
    window.location = "/projects";
  }
  
  render() {
    return (
      <div >

      </div>
    );
  }
}

export default NoMatch;