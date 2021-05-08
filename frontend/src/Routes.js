import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import IframeContainer from "./components/IframeContainer";
import MarkdownContainer from "./components/MarkdownContainer";
import OwnersGrid from "./components/OwnersGrid";
import About from "./lib/about.md";
import CollegeRules from "./lib/college-rules.md";
import Home from "./lib/home.md";
import ProRules from "./lib/pro-rules.md";
import AllStandings from "./pages/college/AllStandings";
import ConferenceStandings from "./pages/college/ConferenceStandings";
import Download from "./pages/Download";
import Join from "./pages/Join";
import News from "./pages/News";
import Article from "./pages/Article";
import TeamRankings from "./pages/college/TeamRankings";
import Rewards from "./pages/pro/Rewards";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      {/*General Links*/}
      <Route exact path="/">
        <MarkdownContainer header="Welcome" file={Home} />
      </Route>
      <Route path="/about">
        <MarkdownContainer file={About} header="About" />
      </Route>
      <Route path="/join" component={Join} />
      <Route path="/news" component={News} />
      <Route path="/news/:article" component={Article} />
      <Route path="/:league/downloads" component={Download} />

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
      <Route path="/siba/schedule">
        <IframeContainer header="SIBA Schedule" file="pro/Website/Schedule" />
      </Route>
      <Route path="/siba/transactions">
        <IframeContainer
          header="SIBA & DBL Transactions"
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
      <Route path="/siba/owners">
        <OwnersGrid header={"SIBA Owners"} league="pro" />
      </Route>
      <Route path="/siba/rewards" component={Rewards} />

      {/*College Links*/}
      <Route path="/college/rules">
        <MarkdownContainer header="SICBA League Rules" file={CollegeRules} />
      </Route>
      <Route
        path="/college/standings/:conference"
        component={ConferenceStandings}
      />
      <Route path="/college/standings" component={AllStandings} />
      <Route path="/college/rankings" component={TeamRankings} />
      <Route path="/college/coaches">
        <OwnersGrid header="SICBA Head Coaches" league="college" />
      </Route>

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
      <Route path="/404" component={NotFound} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
}
