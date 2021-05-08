import React from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Content from "../layout/Content";

export default function News() {
  const [tags, setTags] = React.useState([]);
  const [selectedTag, setSelectedTag] = React.useState("");

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_STRAPI_URL}/tags`)
      .then((response) => response.json())
      .then((strapiTags) => setTags(strapiTags));
  }, []);

  return (
    <Content header="League News">
      <Row>
        <Col xs={12} md={6}>
          <Button
            variant={!selectedTag ? "primary" : "light"}
            className="mx-1 text-capitalize"
            onClick={() => setSelectedTag("")}
          >
            All Articles
          </Button>
          {tags.map((tag) => (
            <Button
              variant={selectedTag === tag ? "primary" : "light"}
              className="mx-1 text-capitalize"
              onClick={() => setSelectedTag(tag)}
            >
              {tag.Name}
            </Button>
          ))}
        </Col>
        <Col xs={12} md={6}>
          <InputGroup>
            <FormControl
              placeholder="Enter a search term"
              aria-label="Search within the News Articles"
            ></FormControl>
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
    </Content>
  );
}
