import { readString } from "react-papaparse";
import coachesFile from "../lib/coaches.csv";
import gmsFile from "../lib/gms.csv";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Content from "../layout/Content";
import { PRO } from "../lib/constants";

export default function OwnersGrid({ header, league }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const gmsFileResponse = await fetch(gmsFile);
      const gmsData = await gmsFileResponse.text();
      const gmsResult = readString(gmsData, {
        header: true,
        dynamicTyping: false,
        transformHeader: (header) => header.toLowerCase(),
      });

      const coachesFileResponse = await fetch(coachesFile);
      const coachesData = await coachesFileResponse.text();
      const coachesResult = readString(coachesData, {
        header: true,
        dynamicTyping: false,
        transformHeader: (header) => header.toLowerCase(),
      });

      if (league === PRO) {
        setData(gmsResult.data);
      } else {
        setData(coachesResult.data);
      }
    };

    fetchData();
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
