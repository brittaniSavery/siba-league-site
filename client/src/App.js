import React from 'react';
import Menu from './Menu.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faBasketballBall)

const App = () => (
      <main>
        <header className="siteHeader">
          <h2>Simulation International Basketball Assoication</h2>
        </header>
        <Menu />
      </main>
    );

export default App;
