import { defineType } from "sanity";
import { MdNotificationsActive } from "react-icons/md";

import { sharedFieldsSchema } from "../(reusable)/sharedField.schema";

export const initiativeSchema = defineType({
  name: "initiatives",
  title: "Initiatives",
  type: "document",
  icon: MdNotificationsActive,
  fields: [...sharedFieldsSchema.fields],
});
