import { Metadata } from "next";

import AboutBanner from "./_components/banner";
import VideoIntro from "./_components/video-intro";
import SharedField from "../_components/shared-field";
import Inventories from "./_components/inventories";

export const metadata: Metadata = {
  title: "Information",
};

export default async function AboutPage() {
  return (
    <div className="h-full">
      <AboutBanner />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <VideoIntro />
      </div>
      <SharedField
        title="Professional Experience"
        type="experiences"
        limit={3}
      />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <Inventories title="Stack Inventories" />
      </div>
      <SharedField title="Academic background" type="educations" limit={3} />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <SharedField
          title="Persistent Activities"
          type="initiatives"
          limit={3}
        />
      </div>
    </div>
  );
}
