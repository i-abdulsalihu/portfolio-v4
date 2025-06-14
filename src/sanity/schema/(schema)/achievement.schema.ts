import { defineType } from "sanity";
import { FaAward } from "react-icons/fa6";

import { sharedFieldsSchema } from "../(reusable)/sharedField.schema";

export const achievementSchema = defineType({
  name: "achievements",
  title: "Achievements",
  type: "document",
  icon: FaAward,
  fields: [...sharedFieldsSchema.fields],
});
