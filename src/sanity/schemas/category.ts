const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },

      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        unique: true,
        slugify: (input: any) => {
          return input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        },
      },
      validation: (Rule: any) =>
        Rule.required().custom((fields: any) => {
          if (
            fields?.current !== fields?.current?.toLowerCase() ||
            fields?.current.split(" ").includes("")
          ) {
            return "Slug must be lowercase and not be included space";
          }
          return true;
        }),
    },
    {
      name: "description",
      title: "Short Description",
      type: "shortBlockContent",
      description:
        "Short intro shown on the category page under the title, and used as the fallback SEO meta description. Bold/italic only - keep it a sentence or two.",
    },
    {
      name: "bottomContent",
      title: "Bottom Content",
      type: "blockContent",
      description:
        "Longer content shown below the product grid on the category page (e.g. buying guide, category details).",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
export default category;
