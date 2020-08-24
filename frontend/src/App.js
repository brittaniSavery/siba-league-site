import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./layout/Footer";
import Menu from "./layout/Menu";
import Routes from "./lib/Routes";
import "./App.css";

const App = () => (
  <Router basename="/">
    <main>
      <Menu />
      <section id="content">
        <Routes />
      </section>
      <Footer />
    </main>
  </Router>
);

export default App;
