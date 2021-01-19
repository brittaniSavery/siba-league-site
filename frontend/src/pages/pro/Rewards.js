import React from "react";
import { Col, Grid, Row, Table } from "react-bootstrap";
import MarkdownContainer from "../../components/MarkdownContainer";
import rewardsMd from "../../lib/pro-rewards.md";
import teamRewardFile from "../../lib/pro-reward-pts.csv";
import { readString } from "react-papaparse";

export default function Rewards() {
  const [teamPoints, setTeamPoints] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const fileResponse = await fetch(teamRewardFile);
      const file = await fileResponse.text();
      const parseResult = readString(file, {
        header: true,
        dynamicTyping: true,
        transformHeader: (header) => header.toLowerCase(),
      });

      if (parseResult.errors.length === 0) {
        setTeamPoints(parseResult.data);
      }
    };
    fetchData();
  }, []);

  return (
    <MarkdownContainer header="SIBA Rewards" file={rewardsMd}>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Table responsive>
              <thead>
                <tr>
                  <th>Team</th>
                  <th style={{ textAlign: "right" }}>Points (Current)</th>
                  <th style={{ textAlign: "right" }}>Points (Used)</th>
                </tr>
              </thead>
              <tbody>
                {teamPoints.map((row) => (
                  <tr key={row.team}>
                    <td>{row.team}</td>
                    <td style={{ textAlign: "right" }}>{row.points}</td>
                    <td style={{ textAlign: "right" }}>{row.used}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    </MarkdownContainer>
  );
}
