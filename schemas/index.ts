import { type SchemaTypeDefinition } from "sanity";

import { categorySchema } from "./(schema)/category.schema";
import { techStackSchema } from "./(schema)/techStack.schema";
import { projectSchema } from "./(schema)/project.schema";
import { educationSchema } from "./(schema)/education.schema";
import { experienceSchema } from "./(schema)/experience.schema";
import { initiativeSchema } from "./(schema)/initiatives.schema";
import { homeHeroSchema } from "./(hero)/homeHero.schema";
import { aboutHeroSchema } from "./(hero)/aboutHero.schema";
import { projectHeroSchema } from "./(hero)/projectHero.schema";
import { contactHeroSchema } from "./(hero)/contactHero.schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categorySchema,
    techStackSchema,
    projectSchema,
    educationSchema,
    experienceSchema,
    initiativeSchema,
    // ? HERO SCHEMAS
    homeHeroSchema,
    aboutHeroSchema,
    projectHeroSchema,
    contactHeroSchema,
  ],
};
