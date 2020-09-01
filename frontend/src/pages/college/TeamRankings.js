import React from "react";
import { Alert, Tabs, Tab, Table, Row, Col, Grid } from "react-bootstrap";
import Content from "../../layout/Content";
import allTeamsFile from "../../lib/sicba-rankings.csv";
import { readString } from "react-papaparse";

export default function TeamRankings() {
  const [allTeams, setAllTeams] = React.useState([]);
  const [humanTeams, setHumanTeams] = React.useState([]);
  const [errors, setErrors] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const fileResponse = await fetch(allTeamsFile);
      const file = await fileResponse.text();
      const parseResult = readString(file, {
        header: true,
        dynamicTyping: true,
        transformHeader: (header) => header.toLowerCase(),
      });

      if (parseResult.errors.length > 0) {
        setErrors([...errors, parseResult.errors]);
      } else {
        setAllTeams(parseResult.data);
      }

      const dbResponse = await fetch(
        `${process.env.REACT_APP_TEAMS_URL}?league=college&order=ranking`
      );

      if (dbResponse.ok) {
        setHumanTeams(await dbResponse.json());
      } else {
        setErrors([
          ...errors,
          { message: `${dbResponse.status}: ${dbResponse.statusText}}` },
        ]);
      }
    };
    fetchData();
  }, [errors]);

  return (
    <Content header="SICBA Team Rankings">
      <p>
        All teams in SICBA are ranked and those rankings are used to determine
        the school's tier. #1–40 are Tier 1, #41–196 are Tier 2, and #197–353
        are Tier 3. Points used for creating a coach's attributes are also
        determined by the tier of the school: 325 points (Tier 1), 240 points
        (Tier 2), 150 points (Tier 3). For more information, check the{" "}
        <a href="/college/rules">SICBA Rules</a>.
      </p>
      <p>
        <b>Note:</b> Teams that are{" "}
        <span style={{ backgroundColor: "#E8F5FF" }}>highlighted</span> and have
        a head coach are unavailable.
      </p>
      {errors.length > 0 && (
        <Alert bsStyle="danger">
          <p>
            <b>Error!</b>
            <br />
            Something went wrong when loading the team ranking data. Please try
            again later.
          </p>
        </Alert>
      )}
      {errors.length === 0 && (
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <Tabs defaultActiveKey={1} animation={false} id="sicba-rankings">
                <Tab eventKey={1} title="Tier 1">
                  <TierTable
                    tier={allTeams.filter((t) => t.tier === 1)}
                    humanTeams={humanTeams}
                  />
                </Tab>
                <Tab eventKey={2} title="Tier 2">
                  <TierTable
                    tier={allTeams.filter((t) => t.tier === 2)}
                    humanTeams={humanTeams}
                  />
                </Tab>
                <Tab eventKey={3} title="Tier 3">
                  <TierTable
                    tier={allTeams.filter((t) => t.tier === 3)}
                    humanTeams={humanTeams}
                  />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Grid>
      )}
    </Content>
  );
}

function TierTable({ tier, humanTeams }) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>School</th>
          <th>Nickname</th>
          <th>Head Coach</th>
        </tr>
      </thead>
      <tbody>
        {tier.map((t) => {
          const curr = humanTeams.find(
            (team) => team.name === `${t.school} ${t.nickname}`
          );
          return (
            <tr
              key={`${t.school} ${t.nickname}`}
              style={{ backgroundColor: curr && "#E8F5FF" }}
            >
              <td>{t.ranking}</td>
              <td>{t.school}</td>
              <td>{t.nickname}</td>
              <td>{curr && curr.coach}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
