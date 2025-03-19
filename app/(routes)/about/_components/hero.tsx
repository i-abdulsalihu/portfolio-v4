import { Fragment } from "react";

import HeroImg from "@/components/shared/hero-img";
import HeroHeading from "@/app/_components/banner-heading";

const AboutHeroSection = async () => {
  return (
    <Fragment>
      <HeroHeading
        subtitle="About Me"
        title="Designing Seamless & Scalable Interfaces for Web2 & Web3"
        description="I'm a Frontend Developer passionate about crafting seamless,
            high-performing web experiences. I focus on building scalable, user-friendly
            applications that bridge creativity and technology."
      />

      <HeroImg imgs={["/svg/placeholder.svg"]} />
    </Fragment>
  );
};

export default AboutHeroSection;
