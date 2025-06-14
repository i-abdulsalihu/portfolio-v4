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
      title: "Home Page Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "about",
      title: "About Page Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "projects",
      title: "Projects Page Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contact",
      title: "Contact Page Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
