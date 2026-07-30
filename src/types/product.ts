import { PortableTextBlock } from "sanity";
import { Seo } from "./seo";

export type Product = {
  _id: string;
  name: string;
  price: number;
  discountedPrice: number;
  category?: string;
  tags?: string[];
  description?: PortableTextBlock[];
  shortDescription?: string;
  colors?: string[];

  previewImages?: any;
  additionalInformation?: {
    name: string;
    description: string;
  }[];
  customAttributes?: {
    attributeName: string;
    attributeValues: Array<{
      id: string;
      title: string;
    }>;
  }[];
  status?: boolean;
  offers?: string[];
  slug?: {
    current: string;
  };
  price_id?: string;
  currency?: string;
  sku?: string;
  condition?: "New" | "UsedLikeNew" | "UsedGood" | "Refurbished" | "Damaged";
  body?: PortableTextBlock[];
  sizeVariants?: {
    size: string;
    price: number;
    discountedPrice?: number;
  }[];
  inStock?: boolean;
  quantity?: number;
  seo?: Seo;
};
