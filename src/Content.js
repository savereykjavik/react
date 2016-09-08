import _ from 'lodash';
import React from 'react';
import './Content.css';
import Card from './Card.js';

const Content = React.createClass({
  displayName: 'Content',

  propTypes: {
    cards: React.PropTypes.object,
    numberOfCards: React.PropTypes.number,
  },

  renderCards() {
    console.log('running renderCards')

    // let listOfCards = [];
    //
    // for (let i = 0; i < this.props.numberOfCards; i++) {
    //   let card = (
    //     <div key={this.props.cards[i].id}>
    //       <Card />
    //     </div>
    //   )
    //   listOfCards.push(card);
    // }
    // console.log(listOfCards);
    // return listOfCards


    const cards = _.map(this.props.cards, function(card) {
      return (
        <Card
          key={card.id}
          id={card.id}
          image={card.images}
          isFlipped={card.isFlipped}
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

  // getComponent(event) {
  //     console.log('item clicked!');
  //     event.currentTarget.style.backgroundColor = '#ccc';
  // }
})

export default Content;
