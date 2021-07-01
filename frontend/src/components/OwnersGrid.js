import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "../layout/Content";
import { PRO } from "../lib/constants";

export default function OwnersGrid({ header, league }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `${process.env.REACT_APP_CMS_URL}/${
        league === PRO ? "general-managers" : "coaches"
      }`
    )
      .then((response) => response.json())
      .then((teams) => setData(teams));
  }, [league]);

  return (
    <Content header={header}>
      <Container>
        <Row>
          {data.map((d) => {
            return (
              <Col
                key={d.team}
                xs={12}
                md={league === "pro" ? 4 : 3}
                className="center owners-grid"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/files/${league}/Website/images/${d.logo}`}
                  alt={`${d.team} logo`}
                />
                <h2>{d.team}</h2>
                <p>{`${league === PRO ? "Owner:" : "Head Coach:"} ${
                  d.name
                }`}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Content>
  );
}
