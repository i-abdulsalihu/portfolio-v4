import { defineType } from "sanity";
import { PiBriefcaseFill } from "react-icons/pi";

import { sharedFieldsSchema } from "../(reusable)/sharedField.schema";

export const experienceSchema = defineType({
  name: "experiences",
  title: "Professional Experience",
  type: "document",
  icon: PiBriefcaseFill,
  fields: [...sharedFieldsSchema.fields],
});
