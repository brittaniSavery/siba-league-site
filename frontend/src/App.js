import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createInstance, MatomoProvider } from "@datapunt/matomo-tracker-react";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import Routes from "./Routes";
import "./App.scss";

const instance = createInstance({
  urlBase: "https://analytics.averyincorporated.com",
  siteId: 2,
});

const App = () => (
  <MatomoProvider value={instance}>
    <Router basename="/">
      <main>
        <Menu />
        <section id="content">
          <Routes />
        </section>
        <Footer />
      </main>
    </Router>
  </MatomoProvider>
);

export default App;
