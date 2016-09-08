import React from 'react';
import './NewGame.css';


const NewGame = React.createClass({
  displayName: 'NewGame',

  propTypes: {
    handleStartNewGame: React.PropTypes.func
  },

  render() {
    return (
      <button className="NewGame" onClick={this.props.handleStartNewGame} >
        Start new game!
      </button>
    );
  }
})

export default NewGame;
