export type Opportunity = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  description: string[];
  category: string;
  status: string;
  image?: string;
  featured?: boolean;
};

export type Event = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  location?: string;
  image?: string;
  registrationUrl?: string;
  status: "upcoming" | "past" | "draft";
};

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image?: string;
  category: string;
  publishedAt?: string;
  featured?: boolean;
};
