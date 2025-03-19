import { defineType } from "sanity";
import { PiProjectorScreenChartFill } from "react-icons/pi";

import { heroSchema } from "../(reusable)/hero.schema";

export const projectHeroSchema = defineType({
  name: "projectHero",
  title: "Project Hero Images",
  type: "document",
  icon: PiProjectorScreenChartFill,
  fields: [...heroSchema.fields],
});
