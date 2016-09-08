import _ from 'lodash';
import React from 'react';

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

    const numberOfCards = 16

    let images = [
      { id: 0, src: img01},
      { id: 1, src: img02},
      { id: 2, src: img03},
      { id: 3, src: img04},
      { id: 4, src: img05},
      { id: 5, src: img06},
      { id: 6, src: img07},
      { id: 7, src: img08},
      { id: 8, src: img09},
      { id: 9, src: img10},
      { id: 10, src: img11},
      { id: 11, src: img12},
      { id: 12, src: img13},
      { id: 13, src: img14},
      { id: 14, src: img15},
      { id: 15, src: img16}
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
    if (this.state.flipped.length === 2) {return}

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
        setTimeout(() => this.compareCards(flipped, cards), 1500);
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
