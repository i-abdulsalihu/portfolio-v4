import { defineType, defineField } from "sanity";

export const sharedFieldsSchema = defineType({
  name: "sharedFields",
  title: "Shared Fields",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "fromDate",
      title: "From Date",
      type: "date",
    }),
    defineField({
      name: "toDate",
      title: "To Date",
      type: "date",
    }),
    defineField({
      name: "keyPoints",
      title: "Key Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "documents",
      title: "Documents",
      type: "array",
      of: [{ type: "file" }],
    }),
  ],
});
