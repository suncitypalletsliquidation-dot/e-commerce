const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "defaultMetaTitle",
      title: "Default Meta Title",
      type: "string",
      description:
        "Used on pages that don't define their own SEO title (e.g. static pages).",
      validation: (Rule: any) => Rule.required().max(60),
    },
    {
      name: "defaultMetaDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 3,
      description:
        "Used on pages that don't define their own SEO description.",
      validation: (Rule: any) => Rule.required().max(160),
    },
    {
      name: "defaultOgImage",
      title: "Default Social Share Image",
      type: "image",
      description:
        "Used when a page doesn't define its own social share image.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Used for the Organization structured data logo.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "organization",
      title: "Organization",
      type: "object",
      description: "Business details used for Organization structured data.",
      fields: [
        {
          name: "legalName",
          title: "Legal Name",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "priceRange",
          title: "Price Range",
          type: "string",
          description:
            "Free text shown in structured data, e.g. \"$\" or \"Varies by pallet and product\".",
        },
        {
          name: "streetAddress",
          title: "Street Address",
          type: "string",
        },
        {
          name: "addressLocality",
          title: "City",
          type: "string",
        },
        {
          name: "addressRegion",
          title: "State / Region",
          type: "string",
        },
        {
          name: "postalCode",
          title: "Postal Code",
          type: "string",
        },
        {
          name: "addressCountry",
          title: "Country (2-letter code)",
          type: "string",
        },
      ],
    },
    {
      name: "sameAs",
      title: "Social Profile URLs",
      description:
        "Links to official social profiles (Facebook, Instagram, X, etc.), used for Organization structured data.",
      type: "array",
      of: [{ type: "url" }],
    },
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
};

export default siteSettings;
