import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import proSchedule from "../images/schedule.png";
import collegeDates from "../images/college-dates.png";
import collegeRegions from "../images/recruiting-regions.svg";
import collegeTournaments from "../images/college-tournaments.png";
import Content from "../layout/Content";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function MarkdownContainer({ file, header, children }) {
  const [markdown, setMarkdown] = React.useState("");

  //getting the string version of the markdown file
  React.useEffect(() => {
    fetch(file)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [file]);

  return (
    <Content header={header}>
      <ReactMarkdown
        plugins={[gfm]}
        children={markdown}
        renderers={{ image: SibaImage, table: BootstrapTable }}
      />
      {children}
    </Content>
  );
}

function SibaImage({ alt, src }) {
  const getSrc = () => {
    switch (src) {
      case "college-dates.png":
        return collegeDates;
      case "recruiting-regions.svg":
        return collegeRegions;
      case "college-tournaments.png":
        return collegeTournaments;
      case "schedule.png":
        return proSchedule;
      default:
        return src;
    }
  };

  return <img style={{ padding: "0.5em" }} src={getSrc()} alt={alt || ""} />;
}

export function BootstrapTable({ children }) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Table responsive>{children}</Table>
        </Col>
      </Row>
    </Container>
  );
}
