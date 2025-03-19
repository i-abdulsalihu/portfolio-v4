import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("homeHero").title("Home Hero Images"),
      S.documentTypeListItem("aboutHero").title("About Hero Images"),
      S.documentTypeListItem("projectHero").title("Project Hero Images"),
      S.documentTypeListItem("contactHero").title("Contact Hero Images"),
      S.divider(),
      S.documentTypeListItem("categories").title("Categories"),
      S.documentTypeListItem("techStack").title("Tech Stack"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["categories"].includes(item.getId()!) &&
          !["techStack"].includes(item.getId()!) &&
          !["homeHero"].includes(item.getId()!) &&
          !["aboutHero"].includes(item.getId()!) &&
          !["projectHero"].includes(item.getId()!) &&
          !["contactHero"].includes(item.getId()!),
      ),
    ]);
