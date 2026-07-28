import { SiteSettings } from "@/types/siteSettings";
import { siteSettingsQuery } from "./queries/settings-queries";
import { sanityFetch } from "./sanity-utils";

export async function getSiteSettings() {
  return sanityFetch<SiteSettings | null>({
    query: siteSettingsQuery,
    qParams: {},
    tags: ["siteSettings"],
  });
}
