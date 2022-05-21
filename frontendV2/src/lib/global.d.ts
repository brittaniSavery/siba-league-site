// GENERAL TYPES

import { LEAGUE } from "@data/constants";

type SiteUpdate = {
  content: string;
  published_at: string;
};

// CALENDAR TYPES

type SibaEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
};

type CollegeEvent = SibaEvent & {
  tournament?: boolean;
};

type ProEvent = SibaEvent & {
  league: LEAGUE;
};

// ARTICLE TYPES

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
