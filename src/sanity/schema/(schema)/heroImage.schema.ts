import { defineType, defineField } from "sanity";
import { FaRegImages } from "react-icons/fa6";

export const heroImagesSchema = defineType({
  name: "heroImages",
  title: "Hero Images",
  type: "document",
  icon: FaRegImages,
  fields: [
    defineField({
      name: "home",
      title: "Home Page Hero Images",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "about",
      title: "About Page Hero Images",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "projects",
      title: "Projects Page Hero Images",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "contact",
      title: "Contact Page Hero Images",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
