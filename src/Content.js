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

    let listOfCards = [];

    for (let i = 0; i < this.props.numberOfCards; i++) {
      let card = (
        <div key={this.props.cards[i].id}>
          <Card />
        </div>
      )

      listOfCards.push(card);
    }

    console.log(listOfCards);
    return listOfCards

    // let cards = listOfCards;
    // return (
    //   <div>
    //     {cards.map(function(cards) {
    //       return <div key={cards.id}> <Card /> </div>
    //     })}
    //   </div>
    // )


  },

  render() {
    return (
      <div className="Content">
        {this.renderCards()}
      </div>
    );
  }
})

export default Content;
