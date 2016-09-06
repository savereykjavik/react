import React from 'react';
import './Content.css';
import Card from './Card.js';

const Content = React.createClass({
  displayName: 'Content',

  render() {
    return (
      <div className="Content">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    );
  }
})

export default Content;
