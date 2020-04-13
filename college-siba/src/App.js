import React from "react";
import Menu from "./layout/Menu.js";
import Footer from "./layout/Footer.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as DisplayPages from "./pages/DisplayPages.js";
import Join from "./pages/Join.js";
import Standings from "./pages/Standings";
import sibaLogo from "./images/logo.svg";
import sibaLogoMini from "./images/logo-mini.svg";
import "./App.css";

library.add(faBasketballBall);

const App = () => (
  <Router basename="/">
    <main>
      <header id="siteHeader">
        <div className="center hidden-xs">
          <img src={sibaLogo} alt="SIBA Logo" />
          <h1>Simulation International College Basketball Assoication</h1>
        </div>
        <div className="center visible-xs-block hidden-sm hidden-md hidden-lg">
          <img src={sibaLogoMini} alt="SIBA Logo" />
          <h1>SICBA</h1>
        </div>
      </header>
      <Menu />
      <section id="content">
        <Route exact path="/" component={DisplayPages.Home} />
        <Route path="/info/about" component={DisplayPages.About} />
        <Route path="/info/rules" component={DisplayPages.Rules} />
        <Route path="/info/join" component={Join} />
        <Route path="/sicba/rankings" component={DisplayPages.SicbaRanking} />
        <Route path="/sicba/standings" component={Standings} />
        <Route path="/sicba/schedule" component={DisplayPages.SicbaSchedule} />
      </section>
      <Footer />
    </main>
  </Router>
);

export default App;
