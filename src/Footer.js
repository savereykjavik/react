import React from 'react';
import './Footer.css';
import NewGame from './NewGame.js';

const Footer = React.createClass({
  displayName: 'Footer',

// använder react för att definera TYP av proptype, i detta fall en function
  propTypes: {
    handleStartNewGame: React.PropTypes.func
  },

  render() {
    return (
      <div className="Footer">
        <NewGame handleStartNewGame={this.props.handleStartNewGame}/>
      </div>
    );
  }
})

export default Footer;
