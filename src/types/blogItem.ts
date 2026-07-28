import { PortableTextBlock } from "sanity";
import { Author } from "./author";
import { Seo } from "./seo";

export type Blog = {
  _id: number;
  title: string;
  slug: any;
  category: string;
  metadata?: string;
  metaDescription?: string;
  body?: PortableTextBlock[];
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  seo?: Seo;
};
