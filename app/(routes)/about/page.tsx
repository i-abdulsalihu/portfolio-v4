import { Metadata } from "next";
import { Fragment } from "react";

import AboutHeroSection from "./_components/hero";
import { Wrapper } from "@/components/shared/wrapper";
import SharedField from "./_components/shared-field";
import TechStack from "./_components/tech-stack";
import VideoIntro from "./_components/video";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Fragment>
      <Wrapper grid className="border-b">
        <AboutHeroSection />
      </Wrapper>

      <VideoIntro />

      <SharedField title="Experiences" type="experiences" />

      <TechStack title="Tech Stack" />

      <SharedField title="Educations" type="educations" />

      <SharedField title="Ongoing Initiatives" type="initiatives" />
    </Fragment>
  );
}
