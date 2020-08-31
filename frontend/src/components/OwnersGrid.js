import React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import Content from "../layout/Content";

export default function OwnersGrid({ header, league }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_TEAMS_URL}?league=${league}`)
      .then((response) => response.json())
      .then((teams) => setData(teams));
  }, [league]);

  return (
    <Content header={header}>
      <Grid>
        <Row>
          {data.map((d) => {
            return (
              <Col
                key={d.name}
                xs={12}
                md={league === "pro" ? 4 : 3}
                className="center owners-grid"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/files/${league}/Website/images/${d.logo}`}
                  alt={`${d.name} logo`}
                />
                <h2>{d.name}</h2>
                <p>{`${league === "pro" ? "Owner:" : "Head Coach:"} ${
                  d.owner || d.coach
                }`}</p>
              </Col>
            );
          })}
        </Row>
      </Grid>
    </Content>
  );
}
