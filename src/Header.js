import React from 'react';
import './Header.css';


const Header = React.createClass({
  displayName: 'Header',

  render() {
    return (
      <div className="Header">
        Nara-da-cat memory
        <div className="intro">Matcha korten rätt i par</div>
      </div>
    );
  }
})

export default Header;
