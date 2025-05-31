import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("techStack").title("Stack Inventories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !["techStack"].includes(item.getId()!),
      ),
    ]);
