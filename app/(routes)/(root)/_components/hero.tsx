import Link from "next/link";
import { Fragment } from "react";

import SpringCursor from "@/app/_components/spring";
import { buttonVariants } from "@/components/ui/button";
import HeroImg from "@/components/shared/hero-img";
import HeroHeading from "@/app/_components/banner-heading";
import { sanityFetch } from "@/lib/live";

const HomeHeroSection = async () => {
  const result = await sanityFetch({
    query: `*[_type == "homeHero"][0]{
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
      <div className="flex flex-col gap-6 md:gap-12">
        <HeroHeading
          subtitle="Introduction"
          title={
            <span>
              Hey there! I&apos;m <br className="hidden md:block" /> Abdullah, a
              developer <br className="hidden md:block" /> from Nigeria
            </span>
          }
        />

        <div className="flex w-full items-center gap-4">
          <Link
            href="/contact"
            role="button"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "group w-full gap-3 sm:w-max",
            })}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              CONTACT ME
            </span>
            <SpringCursor />
          </Link>
          <Link
            href="#projects"
            role="button"
            className={buttonVariants({
              variant: "link",
              className: "group w-full sm:w-max",
            })}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              DISCOVER MORE
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <HeroImg imgs={images} />
      </div>
    </Fragment>
  );
};

export default HomeHeroSection;
