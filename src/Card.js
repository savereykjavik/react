import React from 'react';
import './Card.css';


const Card = React.createClass({
  displayName: 'Card',

  propTypes: {
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    isFlipped: React.PropTypes.bool,
  },

  render() {
    return (
      <div className="Card">
        <img src= {this.props.image.src} />
      </div>
    );
  }
})

export default Card;
