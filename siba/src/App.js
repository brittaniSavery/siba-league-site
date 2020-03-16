import React from "react";
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import Upload from "./pages/Upload";
import Rules from "./pages/Rules";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as DisplayPages from "./pages/DisplayPages";
import Join from "./pages/Join";
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
          <h1>Simulation International Basketball Assoication</h1>
        </div>
        <div className="center visible-xs-block hidden-sm hidden-md hidden-lg">
          <img src={sibaLogoMini} alt="SIBA Logo" />
          <h1>SIBA</h1>
        </div>
      </header>
      <Menu />
      <section id="content">
        <Route exact path="/" component={DisplayPages.Home} />
        <Route path="/info/about" component={DisplayPages.About} />
        <Route path="/info/rules" component={Rules} />
        <Route path="/info/rewards" component={DisplayPages.Rewards} />
        <Route path="/info/join" component={Join} />
        <Route path="/siba/standings" component={DisplayPages.SibaStandings} />
        <Route path="/siba/leaders" component={DisplayPages.SibaLeaders} />
        <Route path="/siba/owners" component={DisplayPages.Owners} />
        <Route path="/dbl/standings" component={DisplayPages.DblStandings} />
        <Route path="/dbl/leaders" component={DisplayPages.DblLeaders} />
        <Route path="/transactions" component={DisplayPages.Transactions} />
        <Route path="/fa/players" component={DisplayPages.FaPlayers} />
        <Route path="/fa/coaches" component={DisplayPages.FaCoaches} />
        <Route path="/upload" component={Upload} />
      </section>
      <Footer />
    </main>
  </Router>
);

export default App;
