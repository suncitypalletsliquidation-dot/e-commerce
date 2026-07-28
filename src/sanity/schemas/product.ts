const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "discountedPrice",
      title: "Price After Discount",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "offers",
      title: "Offers",
      type: "array",
      of: [
        {
          type: "string",
          title: "Offer",
        },
      ],
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
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
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "string",
          title: "Tag",
          validation: (Rule: any) =>
            Rule.custom((fields: any) => {
              if (
                fields !== fields.toLowerCase() ||
                fields.split(" ").includes("")
              ) {
                return "Tags must be lowercase and not be included space";
              }
              return true;
            }),
        },
      ],
    },
    {
      name: "sizeVariants",
      title: "Size Variants (with Price)",
      type: "array",
      description:
        "Add each size and set its specific price. If a size has no price set, the product's default price will be used.",
      of: [
        {
          type: "object",
          name: "sizeVariant",
          title: "Size Variant",
          fields: [
            {
              name: "size",
              title: "Size",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              description: "Price for this size (overrides the default price)",
              validation: (Rule: any) =>
                Rule.required().min(0).error("Price must be a positive number"),
            },
            {
              name: "discountedPrice",
              title: "Discounted Price",
              type: "number",
              description:
                "Optional discounted price for this size. Leave blank to use the default discounted price.",
              validation: (Rule: any) => Rule.min(0),
            },
          ],
          preview: {
            select: {
              title: "size",
              price: "price",
              discountedPrice: "discountedPrice",
            },
            prepare(selection: any) {
              const { title, price, discountedPrice } = selection;
              const subtitle =
                discountedPrice != null
                  ? `$${discountedPrice} (was $${price})`
                  : `$${price}`;
              return {
                title: title ? title.toUpperCase() : "Size",
                subtitle,
              };
            },
          },
        },
      ],
    },
    {
      name: "customAttributes",
      title: "Custom Attributes",
      type: "array",
      of: [
        {
          type: "object",
          name: "customAttribute",
          title: "Custom Attribute",
          fields: [
            {
              name: "attributeName",
              title: "Attribute Name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "attributeValues",
              title: "Attribute Values",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "attributeValue",
                  title: "Attribute Value",
                  fields: [
                    {
                      name: "id",
                      title: "ID",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                      validation: (Rule: any) => Rule.required(),
                    },
                  ],
                  preview: {
                    select: {
                      title: "title",
                      subtitle: "id",
                    },
                  },
                },
              ],
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "attributeName",
              subtitle: "attributeValues.0.title",
            },
          },
        },
      ],
    },

    {
      name: "additionalInformation",
      title: "Additional Information",
      type: "array",
      of: [
        {
          type: "object",
          name: "additionalInfo",
          title: "Additional Info",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "description",
            },
          },
        },
      ],
    },

    {
      name: "previewImages",
      title: "Preview Images",
      type: "array",
      validation: (Rule: any) => Rule.required(),

      of: [
        {
          type: "object",
          name: "previewImage",
          title: "Preview Image",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "color",
              title: "Color",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "color",
              media: "image",
            },
            prepare(selection: any) {
              const { title, media } = selection;
              return {
                title: title || "Preview Image",
                media,
              };
            },
          },
        },
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "status",
      title: "Stock Status",
      type: "boolean",
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "name",
      description: "shortDescription",
      category: "category.title",
      media: "previewImages.0.image",
    },
    prepare(selection: any) {
      const { description, category, media } = selection;
      return {
        title: selection.title,
        subtitle: category,
        media,
      };
    },
  },
};
export default product;
