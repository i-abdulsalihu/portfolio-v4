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
        maxLength: 96,
      },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),
    defineField({
      name: "publishedAt",
      title: "Created At",
      type: "datetime",
    }),
    defineField({
      name: "url",
      title: "Project URLs",
      type: "object",
      fields: [
        defineField({
          name: "github",
          title: "GitHub Repository",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              allowRelative: false,
              scheme: ["http", "https"],
            }),
        }),
        defineField({
          name: "website",
          title: "Website URL",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              allowRelative: false,
              scheme: ["http", "https"],
            }),
        }),
      ],
    }),
    defineField({
      name: "descriptions",
      title: "Descriptions",
      type: "array",
      of: [{ type: "text" }],
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
    defineField({
      name: "src",
      title: "Main Image URL",
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
      name: "snapshots",
      title: "Snapshots",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  initialValue: {
    featured: false,
  },
});
