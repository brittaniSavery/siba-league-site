import React from "react";
import { Col, Grid, Image, Row } from "react-bootstrap";
import Content from "../layout/Content";

export default function OwnersGrid({ header, data, league }) {
  return (
    <Content header={header}>
      <Grid className="center">
        <Row>
          {data.map((d) => {
            return (
              <Col key={d.teamName} xs={12} md={3} lg={2} className="center">
                <div className="conference-card">
                  <Image
                    src={`${process.env.PUBLIC_URL}/files/${league}/Website/images/${d.teamImg}`}
                  />
                  <h2>{d.teamName}</h2>
                  <p>{d.teamOwner}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Grid>
    </Content>
  );
}
