const faq = {
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "question", subtitle: "answer" },
  },
};

export default faq;
