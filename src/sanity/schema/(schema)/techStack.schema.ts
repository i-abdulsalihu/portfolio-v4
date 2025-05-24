import { defineField, defineType } from "sanity";
import { HiSquare3Stack3D } from "react-icons/hi2";

export const techStackSchema = defineType({
  name: "techStack",
  title: "Stack Inventories",
  type: "document",
  icon: HiSquare3Stack3D,
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
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
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Databases/Backend", value: "Databases/Backend" },
          { title: "Frameworks/Libraries", value: "Frameworks/Libraries" },
          { title: "Programming Languages", value: "Programming Languages" },
          { title: "Tools", value: "Tools" },
          { title: "APIs", value: "APIs" },
        ],
        layout: "dropdown",
      },
    }),
  ],
});
