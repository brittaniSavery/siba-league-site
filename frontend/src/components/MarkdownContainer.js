import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Content from "../layout/Content";

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
  console.log(`${process.env.REACT_APP_URL}/images/${src}`);
  return (
    <img
      style={{ padding: "0.5em" }}
      src={`${process.env.REACT_APP_URL}/images/${src}`}
      alt={alt || ""}
    />
  );
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
