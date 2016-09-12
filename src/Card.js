import React from 'react';
import imgback from '../images/back.jpg';
import imgbackground from '../images/backgr.jpg';
import './Card.css';

let classNames = require('classnames');
const Card = React.createClass({
  displayName: 'Card',

  propTypes: {
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    isFlipped: React.PropTypes.bool,
    handleCardclick: React.PropTypes.func,
    flipped: React.PropTypes.array,
  },

  render() {
    let imgClass = classNames({
      'Card-image': this.props.isFlipped,
      'Back-image': !this.props.isFlipped,
      'blink-image scales': this.props.flipped.length === 2 &&
        (this.props.id === this.props.flipped[0].id ||
        this.props.id === this.props.flipped[1].id),
    })

    let image = (this.props.isFlipped) ?
      (<img className={imgClass} src={this.props.image.src} alt="card"/>) :
      (<img className={imgClass} src={imgbackground} alt="card"/>)

// bind argument etc..
    return (
      <div className="Card" onClick={this.props.handleCardclick.bind(null, this.props.id)}>
        {image}
      </div>

    );
  }
})

export default Card;
