import { Article } from "@lib/global";
import { getFormattedDate } from "@lib/utils";
import { useEffect, useState } from "react";

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.PUBLIC_CMS_URL
      }/articles?_limit=5&_start=0&_sort=published_at:DESC`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <>
      {articles.map((a) => (
        <div key={a.slug} className="mb-5">
          <p>
            <a className="is-size-5" href={`/news/${a.slug}`}>
              {a.title}
            </a>
            <br />
            <span className="is-size-7">
              {getFormattedDate(a.published_at)} · {a.author.name}
            </span>
          </p>
          <p>{a.summary}</p>
        </div>
      ))}
    </>
  );
}
