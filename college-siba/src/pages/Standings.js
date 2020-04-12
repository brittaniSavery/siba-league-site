import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { BasicHeader, Division } from "../utilities/PageComponents";
import divisions from "../utilities/Divisions";

const Standings = () => (
  <Grid className="division">
    <BasicHeader title="SICBA Division Standings" />
    <Row>
      {divisions.map(({ key, name, link, img }, index) => (
        <Col key={key} xs={12} sm={6} md={3}>
          <Division name={name} link={link} img={img} />
        </Col>
      ))}
    </Row>
  </Grid>
);

export default Standings;
