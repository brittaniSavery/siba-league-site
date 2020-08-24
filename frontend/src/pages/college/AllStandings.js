import React from "react";
import { Col, Grid, Image, Row } from "react-bootstrap";
import { Content } from "../../components/PageComponents";
import { CONFERENCES } from "../../lib/constants";

export default function AllStandings() {
  return (
    <Content header="College League Standings">
      <Grid className="center">
        <Row>
          {CONFERENCES.map((con) => {
            const imgFile = (con.img || con.file)
              .replace(/\W/, "")
              .toLowerCase();
            const link = con.file.replace(/\s/, "-").toLowerCase();
            return (
              <Col key={link} xs={12} md={3} lg={2} className="center">
                <div className="conference-card">
                  <a key={link} href={`/college/standings/${link}`}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/files/college/Website/images/1CM_${imgFile}.png`}
                    />
                    <h2>{con.title}</h2>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Grid>
    </Content>
  );
}
