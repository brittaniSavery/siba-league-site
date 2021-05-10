import React, { useState } from "react";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  Pagination,
  Row,
  Spinner,
} from "react-bootstrap";
import ArticleCards from "../components/news/ArticleCards";
import NewsPagination from "../components/news/NewsPagination";
import Content from "../layout/Content";
import { PAGE_SIZE } from "../lib/constants";

export default function News() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [articles, setArticles] = useState([]);

  React.useEffect(() => {
    // const fetchCMSData = async () => {
    //   const
    // }

    fetch(`${process.env.REACT_APP_CMS_URL}/articles?_limit=${PAGE_SIZE}`)
      .then((response) => response.json())
      .then((cmsArticles) => {
        setArticles(cmsArticles);

        const articleTags = cmsArticles
          .map((article) => article.tags)
          .flat()
          .map((tag) => tag.name);
        const totalTags = ["pro", "college", ...new Set(articleTags)];
        setTags(totalTags);
        setLoading(false);
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
      {loading && (
        <Row>
          <Spinner className="mx-auto mt-3" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      )}
      {articles.length > 0 && (
        <>
          <ArticleCards articles={articles} />
          <NewsPagination
            pages={totalPages}
            active={page}
            onSelect={(e) => console.log(e.target.value)}
          />
        </>
      )}
    </Content>
  );
}
