import React from 'react';
import imgback from '../images/back.jpg';
import imgbackground from '../images/background.jpg';
import './Card.css';

let classNames = require('classnames');
const Card = React.createClass({
  displayName: 'Card',

  propTypes: {
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    isFlipped: React.PropTypes.bool,
    flipCard: React.PropTypes.func,
    flipped: React.PropTypes.array,
  },

  render() {
    console.log('flipped: ', this.props.flipped)
    console.log(this.props.id)

    let imgClass = classNames({
      'Card-image': this.props.isFlipped,
      'Back-image': !this.props.isFlipped,
      'blink-image': this.props.flipped.length === 2 &&
        (this.props.id === this.props.flipped[0].id ||
        this.props.id === this.props.flipped[1].id),
    })

    let image = (this.props.isFlipped) ?
      (<img className={imgClass} src={this.props.image.src} alt="card"/>) :
      (<img className={imgClass} src={imgback} alt="card"/>)

// bind argument etc.. kolla upp mer
    return (
      <div className="Card" onClick={this.props.flipCard.bind(null, this.props.id)}>
        {image}
      </div>

    );
  }
})

export default Card;
