import React from "react";
import { Content } from "../utilities/PageComponents";
import { Link } from "react-router-dom";
/* import { Jumbotron } from "react-bootstrap"; */

export default function Home() {
  return (
    <Content header="Welcome">
      <p>
        The Simulation International Basketball Assoication (SIBA) is a
        fictional basketball simulation league using the Draft Day Sports: Pro
        Basketball program by Wolverine Studios. 30 teams and 30 GM all plan,
        recruit, trade, train, and play in order to take home the coveted prize
        of the SIBA Championship. Will you be league champion?
        <Link to="/info/join">Join SIBA</Link> to claim your spot in the
        playoffs!
      </p>
      <h2>Updates</h2>
      <h4>April 12, 2020</h4>
      <p>
        The SIBA is officially open! Feel free to contact the commissioner with
        the <Link to="/info/join">Join</Link> form as well as check out the
        Rules to get a better idea on how the league will work. Also, remember
        to purcahse your copy of&nbsp;
        <a href="https://www.wolverinestudios.com/draft-day-sports-pro-basketball-simulation/">
          <b>Draft Day Sports: Pro Basketball 2019</b>
        </a>
        . More information will come as GMs and teams are finalized.
      </p>
    </Content>
  );
}
