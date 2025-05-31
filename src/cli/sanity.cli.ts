/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { assertValue } from "@/lib/utils";
import { defineCliConfig } from "sanity/cli";

const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);
const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export default defineCliConfig({ api: { projectId, dataset } });
