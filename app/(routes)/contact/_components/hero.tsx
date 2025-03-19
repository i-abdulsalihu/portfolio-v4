import { Fragment } from "react";

import HeroHeading from "@/app/_components/banner-heading";
import HeroImg from "@/components/shared/hero-img";

const ContactHeroSection = () => {
  return (
    <Fragment>
      <HeroHeading
        subtitle="Got a project in mind?"
        title="Let's Make It Happen"
        description="Excited about a concept? Let's give it life! Feel free to reach out, and we can discuss how we can make it a reality."
      />

      <HeroImg imgs={["/svg/placeholder.svg"]} />
    </Fragment>
  );
};

export default ContactHeroSection;
