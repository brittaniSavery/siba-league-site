import React, { useState } from "react";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
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
    getArticles().then((info) => {
      setTotalPages(info.total);
      setArticles(info.articles);
    });

    fetch(`${process.env.REACT_APP_CMS_URL}/tags`)
      .then((response) => response.json())
      .then((cmsTags) => {
        const cmsTagNames = cmsTags.map((tag) => tag.name);
        const totalTags = ["pro", "college", ...new Set(cmsTagNames)];
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
            onSelect={async (newPage) => {
              setPage(newPage);
              const league = /college|pro/i.test(selectedTag)
                ? selectedTag
                : null;
              const { articles: newArticles, total: newTotal } =
                await getArticles(newPage, league, selectedTag);
              setArticles(newArticles);
              setTotalPages(newTotal);
            }}
          />
        </>
      )}
    </Content>
  );
}

async function getArticles(page, league, tag) {
  const paging = `_limit=${PAGE_SIZE}&_start=${
    page ? (page - 1) * PAGE_SIZE : 0
  }&_sort=published_at:DESC`;
  const filters = league ? `&league=${league}` : tag ? `&tags.name=${tag}` : "";

  const articlesRes = await fetch(
    `${process.env.REACT_APP_CMS_URL}/articles?${filters}${paging}`
  );
  const articles = await articlesRes.json();

  const totalRes = await fetch(
    `${process.env.REACT_APP_CMS_URL}/articles/count?${filters}${paging}`
  );
  const total = await totalRes.json();
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return { articles, total: totalPages };
}
