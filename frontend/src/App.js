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
import IframeContainer from "./components/IframeContainer";

import { CommingSoon } from "./components/PageComponents";
import ConferenceStandings from "./pages/college/ConferenceStandings";

const App = () => (
  <Router basename="/">
    <main>
      <Menu />
      <section id="content">
        {/*General Links*/}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={DisplayPages.About} />
        <Route path="/siba/rules" component={Rules} />
        <Route path="/upload" component={Upload} />
        <Route path="/join" component={Join} />

        {/*SIBA Links*/}
        <Route
          path="/siba/standings"
          render={() => (
            <IframeContainer
              header="SIBA League Standings"
              file="pro/Website/SIBAStandings"
            />
          )}
        />
        <Route
          path="/siba/leaders"
          render={() => (
            <IframeContainer
              header="SIBA League Leaders"
              file="pro/Website/SIBALeagueLeaders"
            />
          )}
        />
        <Route
          path="/siba/transactions"
          render={() => (
            <IframeContainer
              header="SIBA and DBL Transactions"
              file="pro/Website/Transactions"
            />
          )}
        />
        <Route
          path="/siba/free-agents-players"
          render={() => (
            <IframeContainer
              header="SIBA Player Free Agents"
              file="pro/Website/FA"
            />
          )}
        />
        <Route
          path="/siba/free-agents-coaches"
          render={() => (
            <IframeContainer
              header="SIBA Coach Free Agents"
              file="pro/Website/FACoach"
            />
          )}
        />
        <Route path="/siba/owners" component={DisplayPages.Owners} />
        <Route path="/siba/rewards" component={DisplayPages.Rewards} />
        <Route path="/siba/downloads" component={Download} />

        {/*College Links*/}
        <Route
          path="/college/rules"
          render={() => <CommingSoon header="College League Rules" />}
        />
        <Route
          path="/college/standings"
          render={() => <CommingSoon header="College League Standings" />}
        />
        <Route
          path="/college/standings/:conferenceId"
          component={ConferenceStandings}
        />
        <Route
          path="/college/coaches"
          render={() => <CommingSoon header="College Head Coaches" />}
        />
        <Route
          path="/college/downloads"
          render={() => <CommingSoon header="College League Downloads" />}
        />

        {/*DBL Links*/}
        <Route
          path="/dbl/standings"
          render={() => (
            <IframeContainer
              header="DBL League Standings"
              file="pro/Website/DBLStandings"
            />
          )}
        />
        <Route
          path="/dbl/leaders"
          render={() => (
            <IframeContainer
              header="DBL League Leaders"
              file="pro/Website/DBLLeagueLeaders"
            />
          )}
        />
      </section>
      <Footer />
    </main>
  </Router>
);

export default App;
