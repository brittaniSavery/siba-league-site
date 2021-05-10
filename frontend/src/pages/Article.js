import React, { useEffect, useState } from "react";
import { Badge, Image, Row, Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { DateTime } from "luxon";
import Content from "../layout/Content";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BootstrapTable } from "../components/MarkdownContainer";

export default function Article() {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);
  const { slug } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CMS_URL}/articles?slug=${slug}`)
      .then((response) => {
        if (response.ok) return response.json();
        else history.push("/404");
      })
      .then((data) => {
        setArticle(data[0]);
        setLoading(false);
      });
  }, [history, slug]);

  if (loading)
    return (
      <Content header="Loading...">
        <Spinner className="mx-auto mt-3" animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Content>
    );

  return (
    <Content header={article.title} hideHeader>
      <div className="justify-content-center">
        <Image
          src={article.header.url}
          alt={article.header.alternativeText}
          className="pt-3"
          fluid
        />
      </div>
      <Row>
        <p className="mt-2 mb-0">
          <Badge variant="primary" className="mr-2 text-capitalize">
            {article.league}
          </Badge>
          {article.tags.map((tag) => (
            <Badge key={tag} variant="primary" className="mr-2 text-capitalize">
              {tag.name}
            </Badge>
          ))}
        </p>
      </Row>
      <Row>
        <header>
          <h1>{article.title}</h1>
        </header>
      </Row>

      <Row>
        <Image
          src={article.author.profile.url}
          alt={article.author.profile.alternativeText}
          className="author-pic"
          roundedCircle
        />
        <p className="h3 text-muted">{article.author.name}</p>
      </Row>

      <Row>
        <p>
          Published on{" "}
          {DateTime.fromISO(article.published_at).toLocaleString(
            DateTime.DATETIME_FULL
          )}
        </p>
        {article.updatedAt > article.published_at && (
          <p className="font-italic ml-1">
            | Last Updated on{" "}
            {DateTime.fromISO(article.updatedAt).toLocaleString(
              DateTime.DATETIME_FULL
            )}
          </p>
        )}
      </Row>
      <ReactMarkdown
        plugins={[remarkGfm]}
        children={article.content}
        renderers={{ table: BootstrapTable }}
      />
    </Content>
  );
}
