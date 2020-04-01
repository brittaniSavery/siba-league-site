import React from "react";
import { Link } from "react-router-dom";
import {
  BasicHeader,
  CommingSoon,
  OwnerBio,
  Content
} from "../utilities/PageComponents";
import { kansasCity, montreal, columbus } from "../utilities/Teams";
import Grid from "react-bootstrap/lib/Grid";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";

export const About = () => (
  <Content header="About">
    <h2>The SIBA</h2>
    <p>
      The Simulation International Basketball Assoication (SIBA for short) was
      the combined efforts of Kelley and Brittani Avery, a father and daughter
      team. Sharing a love of basketball and statistics, they worked together to
      create the league as a way to spend quality time together. Kelley created
      the teams, logos, and rules of the league while Brittani provided her
      technical expertise to build the website and other important tools to
      support it.
    </p>

    <h2>The Creators</h2>
    <h4>Kelley Avery</h4>
    <p>
      Basketball has always been a major portion of Kelly's life. He played the
      game throughout his childhood and in his high school years and shared the
      love of the game with fifth and sixth grades when he coached little
      league. However, he has always been a family man at heart and his favorite
      hobby is spending time with his wife and children.
    </p>
    <p>Fun Facts:</p>
    <ul>
      <li>Dream Job as Kid: Pro Basketball Player</li>
      <li>Favorite Color: Blue</li>
      <li>Favorite Animal: Polar Bear</li>
      <li>Favorite Food: Any Chinese Dish</li>
    </ul>

    <h4>Brittani Avery</h4>
    <p>
      When not leading her fictional basketball team, Brittani enjoys a variety
      of hobbies, such as reading, writing, and playing video games. Recently,
      her hobby of writing has turned into a venture with the publication of her
      first novel,{" "}
      <i>
        <a href="http://amzn.to/2vSpcxR">Element Unknown</a>
      </i>
      .
    </p>
    <p>Fun Facts:</p>
    <ul>
      <li>Dream Job as Kid: Veterinarian</li>
      <li>Favorite Color: Deep purple</li>
      <li>Favorite Animal: Black Panther</li>
      <li>Favorite Food: Shrimp Etouffee</li>
    </ul>
  </Content>
);

export const Home = () => (
  <section className="container">
    <header>
      <h1>Welcome</h1>
    </header>
    <p>
      The Simulation International Basketball Assoication (SIBA) is a fictional
      basketball simulation league using the Draft Day Sports: Pro Basketball
      program by Wolverine Studios. 30 teams and 30 GM all plan, recruit, trade,
      train, and play in order to take home the coveted prize of the SIBA
      Championship. Will you be league champion?
      <Link to="/info/join">Join SIBA</Link> to claim your spot in the playoffs!
    </p>
    <h2>Updates</h2>
    <h4>August [dd], 2019</h4>
    <p>
      The SIBA is officially open! Feel free to contact the commissioner with
      the <Link to="/info/join">Join</Link> form as well as check out the Rules
      to get a better idea on how the league will work. Also, remember to
      purcahse your copy of&nbsp;
      <a href="https://www.wolverinestudios.com/draft-day-sports-pro-basketball-simulation/">
        <b>Draft Day Sports: Pro Basketball 2019</b>
      </a>
      . More information will come as GMs and teams are finalized.
    </p>
  </section>
);

export const Owners = () => (
  <Grid className="owner-bio">
    <BasicHeader title="Owners" />
    <Row>
      <Col xs={12} md={4}>
        <OwnerBio
          name="Kelley Avery"
          email="genie2369@gmail.com"
          team={kansasCity.name}
          logo={kansasCity.logo}
          alt={kansasCity.alt}
        />
      </Col>
      <Col xs={12} md={4}>
        <OwnerBio
          name="Brittani Avery"
          email="mone.a.soul@gmail.com"
          team={montreal.name}
          logo={montreal.logo}
          alt={montreal.alt}
        />
      </Col>
      <Col xs={12} md={4}>
        <OwnerBio
          name="Robby Arnold"
          team={columbus.name}
          logo={columbus.logo}
          alt={columbus.alt}
        />
      </Col>
    </Row>
  </Grid>
);

export const Transactions = () => (
  <Content header="Transactions">
    <p>
      <a
        href={process.env.PUBLIC_URL + "/files/generated/transactions.html"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Click here
      </a>{" "}
      for the transaction for the current year. If you have any questions or
      concerns, please contact the commissioner.
    </p>
  </Content>
);

export const FreeAgents = () => (
  <Content header="Free Agents">
    <p>
      Here are the current free agents available. Free Agency starts the end of
      every season.
    </p>
    <a
      href={process.env.PUBLIC_URL + "/files/generated/fa.html"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4>Players</h4>
    </a>
    <a
      href={process.env.PUBLIC_URL + "/files/generated/facoach.html"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4>Coaches</h4>
    </a>
  </Content>
);

export const Rewards = () => <CommingSoon header="Rewards" />;
export const DblLeaders = () => <CommingSoon header="DBL Leaders" />;
export const DblStandings = () => <CommingSoon header="DBL Standings" />;
export const SibaLeaders = () => <CommingSoon header="SIBA Leaders" />;
export const SibaStandings = () => <CommingSoon header="SIBA Standings" />;
