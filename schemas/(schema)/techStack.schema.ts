import { defineField, defineType } from "sanity";
import { HiSquare3Stack3D } from "react-icons/hi2";

export const techStackSchema = defineType({
  name: "techStack",
  title: "Tech Stack",
  type: "document",
  icon: HiSquare3Stack3D,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "techItems",
      title: "Tech Items",
      type: "array",
      of: [
        defineField({
          type: "object",
          name: "techItem",
          title: "Tech Item",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "icon",
              title: "Image Icon",
              type: "image",
            }),
            defineField({
              name: "url",
              title: "Url",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],
});
