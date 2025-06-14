import { Metadata } from "next";

import AboutBanner from "./_components/banner";
import VideoIntro from "./_components/video-intro";
import SharedField from "../_components/shared-field";
import Inventories from "./_components/inventories";
import { sanityFetch } from "@/sanity/lib/live";
import { groupStacksByCategory } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Information",
};

export default async function AboutPage() {
  const result = await sanityFetch({
    query: `*[_type == "techStack"]{
        label,
        description,
        icon,
        iconDark,
        url,
        category
      } | order(category asc)`,
  });

  const stackInventory = groupStacksByCategory(result.data);

  if (!stackInventory || stackInventory.length === 0) return null;

  const sortedResponse = stackInventory.sort((a, b) => {
    if (a.category.toLowerCase() === "tools") return 1;
    if (b.category.toLowerCase() === "tools") return -1;
    return a.category.localeCompare(b.category);
  });

  return (
    <div className="h-full">
      <AboutBanner />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <VideoIntro />
      </div>
      <SharedField title="Professional Experience" type="experiences" />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <Inventories
          sortedResponse={sortedResponse}
          title="Stack Inventories"
        />
      </div>
      <SharedField title="Academic background" type="educations" />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <SharedField title="Ongoing Initiatives" type="initiatives" />
      </div>
      <SharedField title="Achievements" type="achievements" />
    </div>
  );
}
