import _ from 'lodash';
import React from 'react';

// import img01 from './images/nara01.jpg';
// import img02 from './images/nara02.jpg';

import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';


const App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      numberOfCards: 0,
      cards: {},
      images: [],
      flipped: [],
    }
  },

  handleStartNewGame() {

    const numberOfCards = 4

    let images = [
      { id: 0, src: './images/nara01.jpg'},
      { id: 1, src: './images/nara02.jpg'}
    ]

    images = _.shuffle(_.concat([], images, images));

    let cards = {};

    for (let i = 0; i < numberOfCards; i++) {
      cards[i] = { id: i,
          images: images[i],
          isFlipped: false }
    }

    this.setState(
      { numberOfCards: numberOfCards,
        cards: cards,
        images: images
    })

    console.log('numberOfCards: ', numberOfCards)
    console.log('cards: ', cards)
    console.log('images: ', images)

  },

  flipCard(cardID) {



    let cards = _.cloneDeep(this.state.cards)
    cards[cardID].isFlipped = true

    let flipped = _.cloneDeep(this.state.flipped)
    flipped.push(cards[cardID])


    console.log('Card clicked: ', cardID );
    console.log('flipped:', flipped);

    this.setState({
        cards: cards,
        flipped: flipped
      }, () => {
        if (flipped.length === 2) {
          this.compareCards(flipped, cards)
        }
      })
    },

    compareCards(flipped, cards) {
      const cardOne = flipped[0]
      const cardTwo = flipped[1]

      if (cardOne.images.id === cardTwo.images.id) {
        cards[cardOne.id].images.src = './images/success.gif'
        cards[cardTwo.id].images.src = './images/success.gif'
      } else {
        cards[cardOne.id].isFlipped = false
        cards[cardTwo.id].isFlipped = false
      }
      this.setState({
        cards: cards,
        flipped: [],
      })
    },

  // skickar med något till footer, - REFERENS till funktionen, därför ingen parantes. this. säger att det är i hela scopet, had annars inte hitta. behöver inte heta handle.. men för enkelhets skull
  // skickar med referens till funktionen flipCard
    render() {
      return (
        <div className="App">
          <Header />
          <Content
            cards={this.state.cards}
            flipCard={this.flipCard}
            numberOfCards={this.state.numberOfCards}
          />
          <Footer handleStartNewGame={this.handleStartNewGame}/>
        </div>
      );
    }

})




export default App;
