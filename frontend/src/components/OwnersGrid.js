import React from "react";
import { Col, Grid, Row } from "react-bootstrap";
import Content from "../layout/Content";

export default function OwnersGrid({ header, data, league }) {
  //sorting owners by team name
  data.sort(function (a, b) {
    const aName = a.teamName.toLowerCase();
    const bName = b.teamName.toLowerCase();

    if (aName > bName) return 1;
    else if (aName < bName) return -1;
    else return 0;
  });

  return (
    <Content header={header}>
      <Grid>
        <Row>
          {data.map((d) => {
            return (
              <Col
                key={d.teamName}
                xs={12}
                md={league === "pro" ? 4 : 3}
                className="center owners-grid"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/files/${league}/Website/images/${d.teamImg}`}
                  alt={`${d.teamName} logo`}
                />
                <h2>{d.teamName}</h2>
                <p>{`${league === "pro" ? "Owner:" : "Head Coach:"} ${
                  d.teamOwner
                }`}</p>
              </Col>
            );
          })}
        </Row>
      </Grid>
    </Content>
  );
}
