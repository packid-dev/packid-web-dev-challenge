// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;