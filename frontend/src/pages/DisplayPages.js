import React from "react";
import Col from "react-bootstrap/lib/Col";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import { BasicHeader, OwnerBio } from "../components/PageComponents";
import { columbus, kansasCity, montreal } from "../lib/Teams";

export const Owners = () => (
  <Grid className="owner-bio">
    <BasicHeader title="Owners" />
    <Row>
      <Col xs={12} md={4}>
        <OwnerBio
          name="Kelley Avery"
          team={kansasCity.name}
          logo={kansasCity.logo}
          alt={kansasCity.alt}
        />
      </Col>
      <Col xs={12} md={4}>
        <OwnerBio
          name="Brittani Avery"
          team={montreal.name}
          logo={montreal.logo}
          alt={montreal.alt}
        />
      </Col>
      <Col xs={12} md={4}>
        <OwnerBio
          name="Robby Arnold"
          team={columbus.name}
          logo={columbus.logo}
          alt={columbus.alt}
        />
      </Col>
    </Row>
  </Grid>
);
