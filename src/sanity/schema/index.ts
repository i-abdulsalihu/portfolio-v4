import { type SchemaTypeDefinition } from "sanity";

import { projectSchema } from "./(schema)/project.schema";
import { categorySchema } from "./(schema)/category.schema";
import { educationSchema } from "./(schema)/education.schema";
import { experienceSchema } from "./(schema)/experience.schema";
import { initiativeSchema } from "./(schema)/initiatives.schema";
import { techStackSchema } from "./(schema)/techStack.schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchema,
    categorySchema,
    educationSchema,
    experienceSchema,
    initiativeSchema,
    techStackSchema,
  ],
};
