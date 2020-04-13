import React from "react";
import { Link } from "react-router-dom";
import { BasicHeader, CommingSoon } from "../utilities/PageComponents.js";

export const About = () => (
  <section className="container">
    <BasicHeader title="About" />

    <h2>The SIBA</h2>
    <p>
      The Simulation International College Basketball Assoication (SICBA for
      short) was the combined efforts of Kelley and Brittani Avery, a father and
      daughter team. Sharing a love of basketball and statistics, they worked
      together to create the league as a way to spend quality time together.
      Kelley created the teams, logos, and rules of the league while Brittani
      provided her technical expertise to build the website and other important
      tools to support it.
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
  </section>
);

export const Rules = () => (
  <section className="container">
    <BasicHeader title="Rules" />

    <section>
      <header>
        <h4>General Information</h4>
      </header>
      <p>
        The Simulation Internet College Basketball Association is a league where
        you get to coach your favorite team and also enter the league as a
        rookie coach with a lower teir team "20 prestige rating and lower" and
        try to move up the ranks of coaching.
      </p>

      <p>
        Simulations will occur three times a week. If you're going to be unable
        to access a computer for a few days for whatever reason please let the
        commissioner know. You are free to ask anyone in the league to act as a
        proxy for your team if you will be away for an extended period of time.
        Missing a sim or 2 here and there isn’t a big deal.
      </p>

      <p>
        Each coach has a personality as well as skills in their coaching
        ability. There are 5 different categories for a coach's skills: offense,
        defense, scouting, recruiting, and player development. Each category has
        a minimum of 10 points and a maximum of 100 points.
      </p>
    </section>

    <section>
      <header>
        <h4>Owner & Coach Creation</h4>
      </header>

      <p>
        If your are coaching three teams the coaches names need to be different.
        There is a tier level for each coach and this level will be posted at
        the beginning of every season. Coach 1 teams will be considered ranked
        1-60; Coach 2 teams will be considered 61-206; Coach 3 teams will be
        considered 207-352.
      </p>

      <p>The following information is required to set up a coach:</p>
      <ul>
        <li>Login PIN (4-digit number)</li>
        <li>Full Name for Owner</li>
        <li>
          Details for Coach
          <ul>
            <li>Full name</li>
            <li>Age (25-years-old is minimum)</li>
            <li>Temper (1=very laid back to 10=very aggressive)</li>
            <li>Ambition (very low, low, average, high, or very high)</li>
            <li>Academics (very low, low, average, high, or very high)</li>
            <li>Discipline (very low, low, average, high, or very high)</li>
            <li>Integrity (very low, low, average, high, or very high)</li>
          </ul>
        </li>
      </ul>
    </section>

    <section>
      <header>
        <h4>Team Choices</h4>
      </header>

      <ul>
        <li>
          First Team Choice
          <ul>
            <li>Veteran Coach Model</li>
            <li>375 points for skill distribuation</li>
          </ul>
        </li>
        <li>
          Second Team Choice
          <ul>
            <li>Average Coach Model</li>
            <li>275 points for skill distribuation</li>
          </ul>
        </li>
        <li>
          Third Team Choice
          <ul>
            <li>Rookie Coach Model</li>
            <li>150 points for skill distribuation</li>
          </ul>
        </li>
      </ul>
    </section>
  </section>
);

export const Home = () => (
  <section className="container">
    <header>
      <h1>Welcome</h1>
    </header>
    <p>
      The Simulation International College Basketball Assoication (SICBA) is a
      fictional basketball simulation league using the Draft Day Sports: College
      Basketball program by Wolverine Studios. Colleges and coaches from around
      the world all plan, recruit, train, and play in order to take home the
      coveted prize of the SICBA Championship. Will your team be number 1 in the
      league? <Link to="/info/join">Join SICBA</Link> to claim your spot in the
      playoffs!
    </p>
    <h2>Updates</h2>
    <h4>February 10, 2019</h4>
    <p>
      The SICBA is officially open! Feel free to contact the commissioner with
      the <Link to="/info/join">Join</Link> form as well as check out the Rules
      to get a better idea on how the league will work. Also, remember to
      purcahse your copy of{" "}
      <a href="https://www.wolverinestudios.com/draft-day-sports-college-basketball-simulation/">
        <b>Draft Day Sports: College Basketball 2019</b>
      </a>
      . More information will come as GMs and teams are finalized.
    </p>
  </section>
);

export const Owners = () => <CommingSoon header="SICBA Owners" />;
export const SicbaRanking = () => <CommingSoon header="SICBA Team Rankings" />;
export const SicbaSchedule = () => <CommingSoon header="SICBA Schedule" />;
