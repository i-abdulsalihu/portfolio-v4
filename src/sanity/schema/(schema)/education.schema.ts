import { defineType } from "sanity";
import { IoSchool } from "react-icons/io5";

import { sharedFieldsSchema } from "../(reusable)/sharedField.schema";

export const educationSchema = defineType({
  name: "educations",
  title: "Academic Background",
  type: "document",
  icon: IoSchool,
  fields: [...sharedFieldsSchema.fields],
});
