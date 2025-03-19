import Link from "next/link";
import { Fragment } from "react";
import { IoLogoGithub } from "react-icons/io5";

import { urlFor } from "@/lib/utils";
import HeroImg from "@/components/shared/hero-img";
import SpringCursor from "@/app/_components/spring";
import { buttonVariants } from "@/components/ui/button";
import HeroHeading from "@/app/_components/banner-heading";

const ProjectDetailHeroSection = ({
  title,
  links,
  banner,
}: ProjectPropType) => {
  const bannerUrl = banner ? urlFor(banner)?.url() : null;

  return (
    <Fragment>
      <div className="flex flex-col gap-6 md:gap-12">
        <HeroHeading
          subtitle="Back to Projects"
          path="/projects"
          title={title}
        />
        <div className="flex w-full items-center gap-4">
          {links?.live && (
            <Link
              href={links?.live as string}
              role="button"
              target="_blank"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "group w-full sm:w-max",
              })}
            >
              <span className="text-xs font-medium uppercase tracking-wide">
                LIVE DEMO
              </span>
              <SpringCursor />
            </Link>
          )}
          {links?.repo && (
            <Link
              target="_blank"
              href={links?.repo as string}
              role="button"
              className={buttonVariants({
                variant: !links?.live && links?.repo ? "secondary" : "link",
                size: "lg",
                className: "group w-full sm:w-max",
              })}
            >
              <IoLogoGithub className="!size-5" />
              <span className="text-xs font-medium uppercase tracking-wide">
                REPOSITORY
              </span>
            </Link>
          )}
        </div>
      </div>

      <HeroImg imgs={[bannerUrl || "/svg/placeholder.svg"]} />
    </Fragment>
  );
};

export default ProjectDetailHeroSection;
