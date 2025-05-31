import { assertValue } from "@/lib/utils";

const siteUrl = assertValue(
  process.env.NEXT_PUBLIC_BASE_URL,
  "Missing environment variable: NEXT_PUBLIC_BASE_URL",
);

export const siteConfig = {
  title: "Abdullahi Salihu",
  description:
    "I’m Holiday. I build Web2 & Web3 Frontends that are usable, fast, and seamless.",

  //? OPEN GRAPH METADATA
  ogTitle: "Abdullahi Salihu",
  ogDescription:
    "I’m Holiday. I build Web2 & Web3 Frontends that are usable, fast, and seamless.",

  //? TWITTER METADATA
  tCard: "summary_large_image",
  tTitle: "Abdullahi Salihu",
  tDescription:
    "I’m Holiday. I build Web2 & Web3 Frontends that are usable, fast, and seamless.",
  twitterHandle: "@i_abdulsalihu",

  url: siteUrl,
  favicon: "/images/logo-white-tb.png",
};
