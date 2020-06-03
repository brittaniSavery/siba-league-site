import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import * as DisplayPages from "./pages/DisplayPages";
import Download from "./pages/Download";
import Join from "./pages/Join";
import Rules from "./pages/Rules";
import Upload from "./pages/Upload";
import Home from "./pages/Home";

library.add(faBasketballBall);

const App = () => (
  <Router basename="/">
    <main>
      <Menu />
      <section id="content">
        <Route exact path="/" component={Home} />
        <Route path="/info/about" component={DisplayPages.About} />
        <Route path="/info/rules" component={Rules} />
        <Route path="/info/rewards" component={DisplayPages.Rewards} />
        <Route path="/info/join" component={Join} />
        <Route path="/siba/standings" component={DisplayPages.SibaStandings} />
        <Route path="/siba/owners" component={DisplayPages.Owners} />
        <Route path="/dbl" component={DisplayPages.Dbl} />
        <Route path="/transactions" component={DisplayPages.Transactions} />
        <Route path="/freeagents/" component={DisplayPages.FreeAgents} />
        <Route path="/upload" component={Upload} />
        <Route path="/download" component={Download} />
      </section>
      <Footer />
    </main>
  </Router>
);

export default App;
