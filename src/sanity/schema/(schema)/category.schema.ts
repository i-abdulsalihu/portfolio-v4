import { FaTags } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const categorySchema = defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  icon: FaTags,
  fields: [
    defineField({
      name: "category",
      title: "Category Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "category",
      },
    }),
  ],
});
