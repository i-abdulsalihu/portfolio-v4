import { defineType } from "sanity";
import { RiUser6Fill } from "react-icons/ri";

import { heroSchema } from "../(reusable)/hero.schema";

export const aboutHeroSchema = defineType({
  name: "aboutHero",
  title: "About Hero Images",
  type: "document",
  icon: RiUser6Fill,
  fields: [...heroSchema.fields],
});
