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
  },

  renderCards() {
    console.log('running renderCards')
    const _this = this
    const cards = _.map(this.props.cards, function(card) {
      return (
        <Card
          key={card.id}
          id={card.id}
          image={card.images}
          isFlipped={card.isFlipped}
          flipCard={_this.props.flipCard}
        />
      )
    })
    return cards

  },

  render() {
    return (
      <div className="Content">
        {this.renderCards()}
      </div>
    );
  },

})

export default Content;
