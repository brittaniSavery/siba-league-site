type SiteUpdate = {
  content: string;
  published_at: string;
};

type Article = {
  author: Author;
  content: string;
  image: Picture & {
    formats: {
      thumbnail: Picture;
    };
  };
  league: "pro" | "college";
  published_at: string;
  slug: string;
  summary: string;
  title: string;
  tags: Tag[];
  updatedAt: string;
};

type Picture = {
  url: string;
  alternativeText: string;
};

type Author = {
  name: string;
  url: string;
  picture: Picture;
};

type Tag = {
  name: string;
};
