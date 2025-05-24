export const projectQuery = (slug?: string, limit?: number) => {
  // Base filter for projects
  let filter = `_type == "projects"`;

  // Append slug filter if provided
  if (slug) {
    filter += ` && slug.current == $slug`;
  }

  // Construct the GROQ query
  let query = `* [${filter}] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      src,
      snapshots[]{
        _key,
        asset->{
          _id,
          url
        }
      },
      descriptions,
      publishedAt,
      featured,
      categories[]->{
        _id,
        category,
        "slug": slug.current,
      },
      url
    }`;

  // Apply limit if provided
  if (limit) {
    query += `[0...${limit}]`;
  }

  if (slug) {
    filter += `[0]`;
  }

  return query;
};

export const sharedAboutQuery = (
  type: "experiences" | "educations" | "initiatives",
  limit?: number,
) => {
  const filter = `_type == "${type}"`;

  let query = `* [${filter}] | order(publishedAt desc) {
    _id,
    title,
    fromDate,
    toDate,
    description,
    keyPoints,
  }`;

  if (limit) {
    query += `[0...${limit}]`;
  }

  return query;
};
