import React from 'react';
import './Footer.css';
import NewGame from './NewGame.js';

const Footer = React.createClass({
  displayName: 'Footer',

  render() {
    return (
      <div className="Footer">
        <NewGame />
      </div>
    );
  }
})

export default Footer;
