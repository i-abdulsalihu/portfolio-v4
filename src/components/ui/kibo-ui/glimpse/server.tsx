const TITLE_REGEX = /<title[^>]*>([^<]+)<\/title>/;
const OG_TITLE_REGEX = /<meta[^>]*property="og:title"[^>]*content="([^"]+)"/;
const DESCRIPTION_REGEX = /<meta[^>]*name="description"[^>]*content="([^"]+)"/;
const OG_DESCRIPTION_REGEX =
  /<meta[^>]*property="og:description"[^>]*content="([^"]+)"/;
const OG_IMAGE_REGEX = /<meta[^>]*property="og:image"[^>]*content="([^"]+)"/;

export const glimpse = async (url: string) => {
  try {
    const response = await fetch(url, {
      cache: "no-store", // prevent stale data
    });
    const data = await response.text();

    const titleMatch = data.match(TITLE_REGEX) || data.match(OG_TITLE_REGEX);
    const descriptionMatch =
      data.match(DESCRIPTION_REGEX) || data.match(OG_DESCRIPTION_REGEX);
    const imageMatch = data.match(OG_IMAGE_REGEX);

    return {
      title: titleMatch?.[1] ?? null,
      description: descriptionMatch?.[1] ?? null,
      image: imageMatch?.[1] ?? null,
    };
  } catch {
    return {
      title: null,
      description: null,
      image: null,
    };
  }
};
