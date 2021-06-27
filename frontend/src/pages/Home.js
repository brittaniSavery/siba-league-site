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
  const [siteUpdates, setSiteUpdates] = useState([]);
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
        setSiteUpdates(data);
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
        <Col xs={12} md={8} className="home-column">
          <h2>Updates</h2>
          {siteUpdates.map((update) => (
            <>
              <h3>
                {DateTime.fromISO(update.published_at).toLocaleString(
                  DateTime.DATE_MED
                )}
              </h3>
              <ReactMarkdown
                plugins={[gfm]}
                children={update.content}
                renderers={{ table: BootstrapTable }}
              />
            </>
          ))}
        </Col>
        <Col xs={12} md={4}>
          <h2>Latest Articles</h2>
          {articles.map((article) => (
            <>
              <p>
                <Link className="h5" to={`/news/${article.slug}`}>
                  {article.title}
                </Link>
                <br />
                <span className="small">
                  {DateTime.fromISO(article.published_at).toLocaleString(
                    DateTime.DATE_MED
                  )}
                </span>
              </p>
              <p>{article.summary}</p>
            </>
          ))}
        </Col>
      </Row>
    </Content>
  );
}
