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
      of: [{ type: "block" }],
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
  ],
});
