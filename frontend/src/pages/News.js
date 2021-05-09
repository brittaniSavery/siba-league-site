import React, { useState } from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import ArticleCards from "../components/ArticleCards";
import Content from "../layout/Content";

export default function News() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [articles, setArticles] = useState([]);

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_STRAPI_URL}/articles`)
      .then((response) => response.json())
      .then((cmsArticles) => {
        console.log(cmsArticles);
        setArticles(cmsArticles);

        const articleTags = cmsArticles
          .map((article) => article.tags)
          .flat()
          .map((tag) => tag.name);
        const totalTags = ["pro", "college", ...new Set(articleTags)];
        setTags(totalTags);
      });
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
              {tag}
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
      <ArticleCards articles={articles} />
    </Content>
  );
}
