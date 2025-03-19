import { defineType } from "sanity";
import { RiHome9Fill } from "react-icons/ri";

import { heroSchema } from "../(reusable)/hero.schema";

export const homeHeroSchema = defineType({
  name: "homeHero",
  title: "Home Hero Images",
  type: "document",
  icon: RiHome9Fill,
  fields: [...heroSchema.fields],
});
