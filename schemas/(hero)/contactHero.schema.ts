import { defineType } from "sanity";
import { RiPhoneFill } from "react-icons/ri";

import { heroSchema } from "../(reusable)/hero.schema";

export const contactHeroSchema = defineType({
  name: "contactHero",
  title: "Contact Hero Images",
  type: "document",
  icon: RiPhoneFill,
  fields: [...heroSchema.fields],
});
