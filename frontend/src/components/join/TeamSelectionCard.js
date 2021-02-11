import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { COLLEGE, PRO } from "../../lib/constants";
import TeamCard from "./TeamCard";

export default function TeamSelectionCard({ teams, onAdd, onDelete }) {
  const proTeam = teams.find((team) => team.type === PRO);
  const collegeTeams = teams.filter((team) => team.type === COLLEGE);

  return (
    <Tab.Container id="team-selection" defaultActiveKey={PRO}>
      <Card>
        <Card.Header>
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey={PRO}>{PRO.toUpperCase()}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={COLLEGE}>{COLLEGE.toUpperCase()}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey={PRO}>
              <p>
                If you're an artist and would like to create a new logo for your
                team, be sure to let the commissioners when joining our
                community on{" "}
                <a
                  href="https://join.slack.com/t/sibabball/shared_invite/zt-grkrrq9i-je57xB2Y7NGoPTh0GlKNNg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Slack
                </a>
                . We love creativity!
              </p>
              {proTeam ? (
                <TeamCard
                  team={proTeam}
                  onEdit={() => onAdd(proTeam)}
                  onDelete={onDelete}
                />
              ) : (
                <AddTeamButton type={PRO} onAdd={onAdd} />
              )}
            </Tab.Pane>
            <Tab.Pane eventKey={COLLEGE}>
              <p>
                Remember that you can coach up to three (3) teams. They each
                must be in different tiers and different recruiting regions.
              </p>
              <Row className="mb-2">
                {collegeTeams.map((team) => (
                  <TeamCard
                    key={team.basics.name}
                    team={team}
                    onEdit={() => onAdd(team)}
                    onDelete={onDelete}
                  />
                ))}
              </Row>

              {collegeTeams.length < 3 && (
                <AddTeamButton type={COLLEGE} onAdd={onAdd} />
              )}
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Card>
    </Tab.Container>
  );
}

function AddTeamButton({ type, onAdd }) {
  return (
    <Button
      variant="secondary"
      className="text-capitalize"
      onClick={() => onAdd(type)}
    >
      Add {type} Team
    </Button>
  );
}
