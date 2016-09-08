import React from 'react';
import './Card.css';


const Card = React.createClass({
  displayName: 'Card',

  propTypes: {
    id: React.PropTypes.number,
    image: React.PropTypes.object,
    isFlipped: React.PropTypes.bool,
    flipCard: React.PropTypes.func,
  },

  render() {

    let image = (this.props.isFlipped) ? (<img className="Card-image" src={this.props.image.src} alt="card"/>) : null

// bind argument etc.. kolla upp mer
    return (
      <div className="Card" onClick={this.props.flipCard.bind(null, this.props.id)}>
        {image}
      </div>
    );
  }
})

export default Card;
