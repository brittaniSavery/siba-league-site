import React from "react";
import { Badge, Card, CardColumns } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ArticleCards({ articles }) {
  return (
    <CardColumns className="mt-4">
      {articles.map((article) => (
        <Card key={article._id}>
          {article.header && <Card.Img src={article.header.url} />}
          <Card.Body>
            <Card.Title>
              <Link to={`/news/${article.slug}`}>{article.title}</Link>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {article.author.name}
            </Card.Subtitle>
            <Card.Text>{article.summary}</Card.Text>
            <Badge variant="primary" className="mr-2 h5 text-capitalize">
              {article.league}
            </Badge>
            {article.tags.map((tag) => (
              <Badge variant="primary" className="mr-2 h5 text-capitalize">
                {tag.name}
              </Badge>
            ))}
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  );
}
