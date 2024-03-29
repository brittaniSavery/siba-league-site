import React from "react";
import { Alert, Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import { readString } from "react-papaparse";
import ProbationIcon from "../../components/ProbationIcon";
import Content from "../../layout/Content";
import allTeamsFile from "../../lib/sicba-rankings.csv";
import coachesFile from "../../lib/coaches.csv";

export default function TeamRankings() {
  const [allTeams, setAllTeams] = React.useState([]);
  const [humanTeams, setHumanTeams] = React.useState([]);
  const [errors, setErrors] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      let errors = 0;

      try {
        const fileResponse = await fetch(allTeamsFile);
        const file = await fileResponse.text();
        const parseResult = readString(file, {
          header: true,
          dynamicTyping: true,
          transformHeader: (header) => header.toLowerCase(),
        });

        if (parseResult.errors.length) {
          errors += parseResult.errors.length;
          console.log(parseResult.errors);
        } else {
          setAllTeams(parseResult.data.sort((a, b) => a.ranking - b.ranking));
        }
      } catch (error) {
        errors += 1;
        console.log(error);
      }

      try {
        const coachesFileResponse = await fetch(coachesFile);
        const coachesData = await coachesFileResponse.text();
        const coachesResult = readString(coachesData, {
          header: true,
          dynamicTyping: false,
          transformHeader: (header) => header.toLowerCase(),
        });

        if (coachesResult.errors.length) {
          errors += coachesResult.errors.length;
          console.log(coachesResult.errors);
        } else {
          setHumanTeams(coachesResult.data);
        }
      } catch (error) {
        errors += 1;
        console.log(error);
      }

      setErrors(errors);
    };
    fetchData();
  }, []);

  return (
    <Content header="SICBA Pre-season Tier Rankings">
      <p>
        All teams in SICBA are ranked and those rankings are used to determine
        the school's tier. #1–40 are Tier 1, #41–196 are Tier 2, and #197–353
        are Tier 3. Points used for creating a coach's attributes are also
        determined by the tier of the school: 325 points (Tier 1), 240 points
        (Tier 2), 150 points (Tier 3). For more information, check the{" "}
        <a href="/college/rules">SICBA Rules</a>.
      </p>
      <p>
        <b>Note:</b> Teams that are <span className="mark">highlighted</span>{" "}
        and have a head coach are unavailable. Teams that have an exclamation
        icon (<ProbationIcon />) are on probation.
      </p>
      {errors > 0 && (
        <Alert variant="danger">
          <Alert.Heading>Error!</Alert.Heading>
          <p>
            Something went wrong when loading the team ranking data. Please try
            again later.
          </p>
        </Alert>
      )}
      {errors === 0 && (
        <Container>
          <Row>
            <Col xs={12}>
              <Tabs defaultActiveKey={1} transition={false} id="sicba-rankings">
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
        </Container>
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
          <th>Region</th>
          <th>Head Coach</th>
        </tr>
      </thead>
      <tbody>
        {tier.map((t) => {
          const findHeadCoaches = RegExp(t.school + "\\s+" + t.nickname);
          const curr = humanTeams.find((t) => findHeadCoaches.test(t.team));
          return (
            <tr key={`${t.school} ${t.nickname}`} className={curr && "mark"}>
              <td>{t.ranking}</td>
              <td>
                {t.probation && <ProbationIcon isPadded />}
                {t.school}
              </td>
              <td>{t.nickname}</td>
              <td>{t.region}</td>
              <td>{curr && curr.name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
