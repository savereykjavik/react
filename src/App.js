import _ from 'lodash';
import React from 'react';

import img01 from '../images/nara01.jpg';
import img02 from '../images/nara02.jpg';
import imgsuccess from '../images/success.gif';

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

  componentDidMount(){
    this.handleStartNewGame()
  },

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  },

  handleStartNewGame() {

    const numberOfCards = 4

    let images = [
      { id: 0, src: img01},
      { id: 1, src: img02}
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

    // console.log('numberOfCards: ', numberOfCards)
    // console.log('cards: ', cards)
    // console.log('images: ', images)

  },

  flipCard(cardID) {

    if (this.state.cards[cardID].isFlipped) {return}

    let cards = _.cloneDeep(this.state.cards)
    cards[cardID].isFlipped = true

    let flipped = _.cloneDeep(this.state.flipped)
    flipped.push(cards[cardID])

    this.setState({
        cards: cards,
        flipped: flipped
      })
    console.log('updated state first time')

    if (flipped.length === 2) {
        console.log('two cards clicked - would like to sleep function here')
        this.compareCards(flipped, cards)
    }

  },

  compareCards(flipped, cards) {
    const cardOne = flipped[0]
    const cardTwo = flipped[1]

    if (cardOne.images.id === cardTwo.images.id) {
      cards[cardOne.id].images.src = imgsuccess
      cards[cardTwo.id].images.src = imgsuccess
    } else {
      cards[cardOne.id].isFlipped = false
      cards[cardTwo.id].isFlipped = false

    }
    this.setState({
      cards: cards,
      flipped: [],
    })
    console.log('updated state after comparison')
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
