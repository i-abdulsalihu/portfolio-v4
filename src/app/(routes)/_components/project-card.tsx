import Link from "next/link";
import { type FC } from "react";
import { LuArrowRight } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import Img from "@/components/shared/img";
import { urlFor } from "@/sanity/lib/image";

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, src, slug, descriptions } = project;
  const postImageUrl = src ? urlFor(src)?.url() : null;

  return (
    <div className="group dark:bg-secondary/50 shadow-foreground/20 relative w-full overflow-hidden rounded-[30px] border p-1 shadow-2xl transition-all duration-300 sm:rounded-[44px] dark:shadow-black">
      <div className="bg-secondary relative aspect-[1.4] overflow-hidden rounded-[25px] sm:rounded-[39px] dark:border">
        <Img
          src={postImageUrl ?? "/svg/placeholder.svg"}
          alt="Placeholder Image"
          fill
          priority
          quality={100}
          className="group-hover:brightness-90"
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent via-black/20 to-black/70 p-6 pt-10 text-white transition-opacity duration-500 ease-in-out group-hover:opacity-100 sm:p-8 sm:pt-20 md:opacity-0 dark:via-black/50 dark:to-black/90">
          <div className="flex items-end justify-between gap-8">
            <div className="flex flex-col gap-1">
              <p className="line-clamp-1 text-base leading-none font-medium">
                {title}
              </p>
              <p className="line-clamp-1 text-xs tracking-wide opacity-70 sm:text-sm">
                {descriptions[0]}
              </p>
            </div>
            <Link href={`/projects/${slug}`} title={`Check out ${title}`}>
              <Button
                size={"sm"}
                variant={"secondary"}
                className="rounded-full !bg-white !pl-4 !text-black"
              >
                <span>Details</span>
                <LuArrowRight className="!size-4 -rotate-45 transition duration-200 group-hover:rotate-0" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
