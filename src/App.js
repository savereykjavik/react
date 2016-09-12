import _ from 'lodash';
import React from 'react';

// images
import img01 from '../images/nara01.jpg';
import img02 from '../images/nara02.jpg';
import img03 from '../images/nara03.jpg';
import img04 from '../images/nara04.jpg';
import img05 from '../images/nara05.jpg';
import img06 from '../images/nara06.jpg';
import img07 from '../images/nara07.jpg';
import img08 from '../images/nara08.jpg';
import img09 from '../images/nara09.jpg';
import img10 from '../images/nara10.jpg';
import img11 from '../images/nara11.jpg';
import img12 from '../images/nara12.jpg';
import img13 from '../images/nara13.jpg';
import img14 from '../images/nara14.jpg';
import img15 from '../images/nara15.jpg';
import img16 from '../images/nara16.jpg';
import imgsuccess from '../images/success.gif';

import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

let counter = 0;

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

  handleStartNewGame() {
    counter = 0
    const numberOfCards = 12

    let images = [
      { id: 0, src: img01},
      // { id: 1, src: img02},
      { id: 2, src: img03},
      // { id: 3, src: img04},
      { id: 4, src: img05},
      { id: 5, src: img06},
      // { id: 6, src: img07},
      // { id: 7, src: img08},
      // { id: 8, src: img09},
      // { id: 9, src: img10},
      { id: 10, src: img11},
      // { id: 11, src: img12},
      { id: 12, src: img13},
      // { id: 13, src: img14},
      // { id: 14, src: img15},
      // { id: 15, src: img16}
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

  handleCardclick(cardID) {
    // if card isflipped already, do nothing
    if (this.state.cards[cardID].isFlipped) {return}

    // there is a setTimeOut function running
    if (this.state.timeOutID) {
      clearTimeout(this.state.timeOutID)
      this.compareCards(() => this.flipCard(cardID))

    } else {
      this.flipCard(cardID)
    }
  },

  flipCard(cardID) {

    let cards = _.cloneDeep(this.state.cards)
    cards[cardID].isFlipped = true

    let flipped = _.cloneDeep(this.state.flipped)
    flipped.push(cards[cardID])

    let timeOutID = null

    if (flipped.length === 2) {
      // console.log('adding timeout before running compare cards')
      timeOutID = setTimeout(this.compareCards, 1950);
    }

    this.setState({
        cards: cards,
        flipped: flipped,
        timeOutID: timeOutID
      })
    // console.log('updated state, flipped card up')
  },

  compareCards(callback) {

    let cards = _.cloneDeep(this.state.cards)
    let flipped = _.cloneDeep(this.state.flipped)

    const cardOne = flipped[0]
    const cardTwo = flipped[1]

    if (cardOne.images.id === cardTwo.images.id) {
      cards[cardOne.id].images.src = imgsuccess
      cards[cardTwo.id].images.src = imgsuccess
      counter++

    } else {
      cards[cardOne.id].isFlipped = false
      cards[cardTwo.id].isFlipped = false

    }
    this.setState({
      cards: cards,
      flipped: [],
      timeOutID: null,
    }, callback)
    // console.log('updated state, closes or wins cards')
  },

  render() {

    return (
      <div className="App">
        <Header />
        <Content
          cards={this.state.cards}
          handleCardclick={this.handleCardclick}
          numberOfCards={this.state.numberOfCards}
          counter={counter}
          flipped={this.state.flipped}
        />
        <Footer
        handleStartNewGame={this.handleStartNewGame}
        />
        <div className="low">/ Caroline Thordenberg | Growth & Data Strategist @ <a href="http://www.yuriagency.com/" target="_blank">YURI</a> and designer at <a href="http://www.silvertheories.com/" target="_blank">Silver theories</a>. Built using JavaScript and React during a weeks code camp in Barcelona with <a href="http://www.tjejerkodar.se/" target="_blank">Tjejer Kodar</a>!
        </div>
      </div>
    );
  }



})

export default App;
