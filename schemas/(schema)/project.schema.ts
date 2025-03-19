import { defineArrayMember, defineField, defineType } from "sanity";
import { PiProjectorScreenChartFill } from "react-icons/pi";

export const projectSchema = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  icon: PiProjectorScreenChartFill,
  fields: [
    defineField({
      name: "title",
      title: "Project Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "links",
      title: "Project Links",
      type: "object",
      fields: [
        {
          name: "live",
          title: "Live URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              allowRelative: false,
              scheme: ["http", "https"],
            }),
        },
        {
          name: "repo",
          title: "GitHub Repository",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              allowRelative: false,
              scheme: ["http", "https"],
            }),
        },
      ],
    }),
    defineField({
      name: "banner",
      title: "Banner Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
      options: { hotspot: true },
    }),
    defineField({
      name: "descriptions",
      title: "Descriptions",
      type: "text",
    }),
    defineField({
      name: "snapshots",
      title: "Snapshots",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
            },
          ],
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: {
            type: "categories",
          },
        }),
      ],
    }),
  ],
  initialValue: {
    featured: false,
  },
});
