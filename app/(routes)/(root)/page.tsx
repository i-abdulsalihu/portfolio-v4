import { Fragment } from "react";
import { Wrapper } from "@/components/shared/wrapper";
import HomeHeroSection from "./_components/hero";
import Featured from "./_components/featured";
import SharedField from "../about/_components/shared-field";

export default function HomePage() {
  return (
    <Fragment>
      <Wrapper grid className="border-b">
        <HomeHeroSection />
      </Wrapper>

      <Wrapper grid id="projects" className="border-b lg:!py-20">
        <Featured />
      </Wrapper>

      <SharedField
        title="Ongoing Initiatives"
        type="initiatives"
        limit={2}
        subtitle="About Me"
        path="/about"
      />
    </Fragment>
  );
}
