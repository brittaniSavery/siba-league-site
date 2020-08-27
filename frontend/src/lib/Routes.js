import React from "react";
import { Route, Switch } from "react-router-dom";
import IframeContainer from "../components/IframeContainer";
import MarkdownContainer from "../components/MarkdownContainer";
import { CommingSoon } from "../components/PageComponents";
import AllStandings from "../pages/college/AllStandings";
import ConferenceStandings from "../pages/college/ConferenceStandings";
import * as DisplayPages from "../pages/DisplayPages";
import Download from "../pages/Download";
import Home from "./home.md";
import Join from "../pages/Join";
import Upload from "../pages/Upload";
import About from "./about.md";
import CollegeRules from "./college-rules.md";
import ProRules from "./pro-rules.md";

export default function Routes() {
  return (
    <Switch>
      {/*General Links*/}
      <Route exact path="/">
        <MarkdownContainer header="Welcome to SIBA" file={Home} />
      </Route>
      <Route path="/about">
        <MarkdownContainer file={About} header="About" />
      </Route>
      <Route path="/upload" component={Upload} />
      <Route path="/join" component={Join} />

      {/*SIBA Links*/}
      <Route path="/siba/rules">
        <MarkdownContainer file={ProRules} header="SIBA Rules" />
      </Route>
      <Route path="/siba/standings">
        <IframeContainer
          header="SIBA League Standings"
          file="pro/Website/SIBAStandings"
        />
      </Route>
      <Route path="/siba/leaders">
        <IframeContainer
          header="SIBA League Leaders"
          file="pro/Website/SIBALeagueLeaders"
        />
      </Route>
      <Route path="/siba/transactions">
        <IframeContainer
          header="SIBA and DBL Transactions"
          file="pro/Website/Transactions"
        />
      </Route>
      <Route path="/siba/free-agents">
        <IframeContainer header="SIBA Free Agents" file="pro/Website/FA" />
      </Route>
      <Route path="/siba/available-coaches">
        <IframeContainer
          header="SIBA Available Coaches"
          file="pro/Website/FACoach"
        />
      </Route>
      <Route path="/siba/owners" component={DisplayPages.Owners} />
      <Route path="/siba/rewards">
        <CommingSoon header="SIBA Rewards" />
      </Route>
      <Route path="/siba/downloads" component={Download} />

      {/*College Links*/}
      <Route path="/college/rules">
        <MarkdownContainer header="SICBA League Rules" file={CollegeRules} />
      </Route>
      <Route
        path="/college/standings/:conference"
        component={ConferenceStandings}
      />
      <Route path="/college/standings" component={AllStandings} />
      <Route path="/college/coaches">
        <CommingSoon header="SICBA Head Coaches" />
      </Route>
      <Route path="/college/downloads" component={Download} />

      {/*DBL Links*/}
      <Route path="/dbl/standings">
        <IframeContainer
          header="DBL League Standings"
          file="pro/Website/DBLStandings"
        />
      </Route>
      <Route path="/dbl/leaders">
        <IframeContainer
          header="DBL League Leaders"
          file="pro/Website/DBLLeagueLeaders"
        />
      </Route>
    </Switch>
  );
}
