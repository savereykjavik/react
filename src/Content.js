import _ from 'lodash';
import React from 'react';
import './Content.css';
import Card from './Card.js';

const Content = React.createClass({
  displayName: 'Content',

  propTypes: {
    cards: React.PropTypes.object,
    flipCard: React.PropTypes.func,
    numberOfCards: React.PropTypes.number,
    counter: React.PropTypes.number,
    flipped: React.PropTypes.array,
  },

  renderCards() {
    // console.log('ran renderCards')
    const _this = this
    const cards = _.map(this.props.cards, function(card) {
      return (
        <Card
          key={card.id}
          id={card.id}
          image={card.images}
          isFlipped={card.isFlipped}
          flipCard={_this.props.flipCard}
          flipped={_this.props.flipped}
        />
      )
    })
    return cards

  },

  render() {

    let isDone
    // just testing
    if (this.props.counter === 6) {
      isDone = "win"
    } else {
      isDone = "nowin"
    }

    return (
      <div className="Content">
        {this.renderCards()}
        <div id="winBox" className={isDone}>Mjao <br></br> Win!</div>

      </div>
    );
  },

})

export default Content;
