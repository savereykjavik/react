import React from 'react';

import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';


const App = React.createClass({
  displayName: 'App',


  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
})

export default App;


// Först externa bibliotek högst upp, i bokstavsordning, sedan egna
// from - sparas undan i en variabel
// render är som en nyckel i ett objekt (sätta object obj[n] = "x")
// nya JS gör inte var. const och let. Let kommer oftast funka, men försök använda const när den ska användas.
// klasser har inte funnits i javascript tidigare. Gjort en abstaction som är klass. Klass ger dom egenskaper som en klass skulle haft. Annie gör aldrig klasser. Gmla sättet
// const här var tidigare class
// skapar reactclasser
// i componenter finns både JS och css - render är det som renderas ut på skärmen. Du kan skriva html i JS-fil med JSX
// i html heter det class i JS className. I JSX används " inte '. HTML stoppas in i curly brackets.
// app kommer behöva rendera ut header, content och footer. Brukar ge all akomponenter färg.
