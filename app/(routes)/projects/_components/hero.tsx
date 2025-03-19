import { Fragment } from "react";

import HeroHeading from "@/app/_components/banner-heading";
import HeroImg from "@/components/shared/hero-img";
import { sanityFetch } from "@/lib/live";

const ProjectsHeroSection = async () => {
  const result = await sanityFetch({
    query: `*[_type == "projectHero"][0]{
    images[]{
      _key,
      altText,
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      },
    }
  }`,
  });

  const images = result.data?.images.map(
    (image: ImageResponseProp) => image.asset.url,
  );

  return (
    <Fragment>
      <HeroHeading
        subtitle="Take a look at my work!"
        title="Where design meets code — a showcase of my work."
        description="Explore a collection of my projects, showcasing
            my expertise in building responsive, interactive, and visually
            appealing web applications."
      />

      <HeroImg imgs={images} />
    </Fragment>
  );
};

export default ProjectsHeroSection;
