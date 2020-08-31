import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Content from "../../layout/Content";

export default function TeamRankings() {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_TEAMS_URL}?league=college&order=ranking`)
      .then((response) => response.json())
      .then((teams) => setTeams(teams));
  });

  return (
    <Content header="SICBA Team Rankings">
      <Grid>
        <Row>
          {teams.map((team) => (
            <Col key={team.name} xs={12} md={4} className="center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-center",
                  alignContent: "center",
                  paddingBottom: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "3em",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  #{team.ranking}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "150px" }}
                    src={`${process.env.PUBLIC_URL}/files/college/Website/images/${team.logo}`}
                    alt={`${team.name} logo`}
                  />
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "1.25em",
                      margin: "0em",
                    }}
                  >
                    {team.name}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </Content>
  );
}
