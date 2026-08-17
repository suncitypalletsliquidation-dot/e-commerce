// A restricted rich-text type for short intro/description fields: bold and
// italic only, no headings, lists, or links. Keeps editors from typing raw
// HTML tags to fake formatting (which broke rendering), while staying
// appropriately short/plain for fields also used as SEO meta descriptions.
const shortBlockContent = {
  title: "Short Text",
  name: "shortBlockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      name: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [],
      },
    },
  ],
};

export default shortBlockContent;
