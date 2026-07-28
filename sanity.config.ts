import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import type { StructureResolver } from "sanity/structure";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => listItem.getId() !== "siteSettings"
      ),
    ]);

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE!,
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [structureTool({ structure })],
  schema: { types: schemas },
});

export default config;
