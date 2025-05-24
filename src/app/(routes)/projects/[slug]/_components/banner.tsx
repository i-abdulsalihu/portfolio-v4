import Link from "next/link";
import { FC, Fragment } from "react";
import { IoLogoGithub } from "react-icons/io";
import { LuArrowRight } from "react-icons/lu";

import Hero from "@/app/(routes)/_components/hero";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";

interface ProjectDetailsBannerProps {
  project: ProjectProps;
}

const ProjectDetailsBanner: FC<ProjectDetailsBannerProps> = ({
  project: { title, src, url },
}) => {
  const srcUrl = src ? urlFor(src)?.url() : null;

  return (
    <Hero
      back
      src={srcUrl as string}
      title={title}
      actions={
        <Fragment>
          {url?.website && (
            <Link
              href={url?.website}
              target="_blank"
              title="Live Preview"
              className="w-full sm:w-max"
            >
              <Button
                variant="outline"
                size="lg"
                className="group w-full gap-2 sm:w-max"
              >
                <span className="text-xs font-medium uppercase">
                  Live Preview
                </span>
                <LuArrowRight className="!size-4 -rotate-45 transition duration-200 group-hover:rotate-0" />
              </Button>
            </Link>
          )}
          {url?.github && (
            <Link
              href={url?.github}
              target="_blank"
              title="Repository"
              className="w-full sm:w-max"
            >
              <Button
                variant={!url?.website ? "outline" : "link"}
                size="lg"
                className="group w-full sm:w-max"
              >
                <IoLogoGithub className="!size-4" />
                <span className="text-xs font-medium uppercase">
                  Repository
                </span>
              </Button>
            </Link>
          )}
        </Fragment>
      }
    />
  );
};

export default ProjectDetailsBanner;
