const seo = {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description:
        "Overrides the auto-generated page title. Keep under 60 characters so it isn't truncated in search results.",
      validation: (Rule: any) => Rule.max(60),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description:
        "Overrides the auto-generated page description. Keep under 160 characters so it isn't truncated in search results.",
      validation: (Rule: any) => Rule.max(160),
    },
    {
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description:
        "Overrides the image used when this page is shared on social media (Open Graph / Twitter). Falls back to the default preview image when empty.",
      options: {
        hotspot: true,
      },
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};

export default seo;
