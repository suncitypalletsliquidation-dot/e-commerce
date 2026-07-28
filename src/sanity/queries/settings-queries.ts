import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  siteName,
  defaultMetaTitle,
  defaultMetaDescription,
  defaultOgImage,
  logo,
  organization,
  sameAs
}`;
