import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HomeData from "../lib/home.md";
import Content from "../layout/Content";
import { BootstrapTable } from "../components/MarkdownContainer";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

export default function Home() {
  const [markdown, setMarkdown] = useState("");
  const [updates, setUpdates] = useState([]);
  const [articles, setArticles] = useState([]);

  //Getting the static blurb of the welcome page
  useEffect(() => {
    fetch(HomeData)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));

    fetch(
      `${process.env.REACT_APP_CMS_URL}/site-updates?_limit=5&_start=0&_sort=published_at:DESC`
    )
      .then((response) => response.json())
      .then((data) => {
        setUpdates(data);
      });

    fetch(
      `${process.env.REACT_APP_CMS_URL}/articles?_limit=5&_start=0&_sort=published_at:DESC`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <Content header="Welcome">
      <ReactMarkdown plugins={[gfm]} children={markdown} />
      <Row>
        <Col xs={12} md={8}>
          <h2>Announcements</h2>
          {updates.map((announcement) => (
            <ReactMarkdown
              plugins={[gfm]}
              children={announcement.content}
              renderers={{ table: BootstrapTable }}
            />
          ))}
        </Col>
        <Col xs={12} md={4}>
          <h2>Latest Articles</h2>
          {articles.map((article) => (
            <>
              <p className="small">
                {DateTime.fromISO(article.published_at).toLocaleString(
                  DateTime.DATE_MED
                )}
              </p>
              <p>
                <Link to={`/news/${article.slug}`}>{article.title}</Link>
              </p>
              <p>{article.summary}</p>
            </>
          ))}
        </Col>
      </Row>
    </Content>
  );
}
