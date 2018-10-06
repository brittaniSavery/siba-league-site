import React, { Component } from 'react';
import Menu from './Menu.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <p>Simulation International Basketball Assoication</p>
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
