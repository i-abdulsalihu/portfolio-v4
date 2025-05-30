"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { vimeoField } from "sanity-plugin-vimeo-field";

import { schema } from "@/sanity/schema";
import { structure } from "@/sanity/structure";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
    vimeoField({
      accessToken: process.env.SANITY_STUDIO_VIMEO_ACCESS_TOKEN,
    }),
  ],
});
