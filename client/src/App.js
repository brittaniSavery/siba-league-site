import React from 'react';
import Menu from './Menu.js';
import Footer from './Footer.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faBasketballBall)

const App = () => (
      <main>
        <header className="header" id="siteHeader">
          <h1>Simulation International Basketball Assoication</h1>
        </header>
        <Menu />
        <Footer />
      </main>
    );

export default App;
