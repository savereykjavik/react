import _ from 'lodash';
import React from 'react';

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
      { id: 0, src: 'images/nara01.jpg'},
      { id: 1, src: 'images/nara02.jpg'}
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
        images: images }
    )

    console.log('numberOfCards: ', numberOfCards)
    console.log('cards: ', cards)
    console.log('images: ', images)

  },

  // skickar med något till footer, - REFERENS till funktionen, därför ingen parantes. this. säger att det är i hela scopet, had annars inte hitta. behöver inte heta handle.. men för enkelhets skull
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer handleStartNewGame={this.handleStartNewGame}/>
      </div>
    );
  }

})


export default App;
