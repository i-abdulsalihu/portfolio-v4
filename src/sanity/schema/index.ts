import { type SchemaTypeDefinition } from "sanity";

import { projectSchema } from "./(schema)/project.schema";
import { educationSchema } from "./(schema)/education.schema";
import { experienceSchema } from "./(schema)/experience.schema";
import { initiativeSchema } from "./(schema)/initiatives.schema";
import { techStackSchema } from "./(schema)/techStack.schema";
import { heroImagesSchema } from "./(schema)/heroImage.schema";
import { achievementSchema } from "./(schema)/achievement.schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchema,
    educationSchema,
    experienceSchema,
    initiativeSchema,
    achievementSchema,
    techStackSchema,
    heroImagesSchema,
  ],
};
