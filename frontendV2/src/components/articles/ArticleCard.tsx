import { Article } from "@lib/global";
import { getFormattedDate } from "@lib/utils";
import { capitalize, sortBy } from "lodash";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const { title, image, slug, summary, tags, published_at, author, league } =
    article;

  const sortedTags = sortBy([...tags, { name: capitalize(league) }], ["name"]);

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image.url} alt={image.alternativeText} />
        </figure>
      </div>
      <div className="card-content">
        <h2 className="title">
          <a href={`${import.meta.env.BASE_URL}${slug}`}>{title}</a>
        </h2>
        <p className="subtitle">{summary}</p>
        <p>
          {author.name} &middot; {getFormattedDate(published_at)}
        </p>
        <div className="tags">
          {sortedTags.map(({ name }) => (
            <span key={`${slug}-${name}`} className="tag is-primary">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
