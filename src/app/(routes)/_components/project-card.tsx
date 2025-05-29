import { FC } from "react";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import Img from "@/components/shared/img";
import { urlFor } from "@/sanity/lib/image";

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, src, slug, categories } = project;
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
        />

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent via-black/20 to-black/70 p-4 text-white transition-opacity duration-500 ease-in-out group-hover:opacity-100 sm:p-6 sm:pt-10 md:opacity-0 dark:via-black/40 dark:to-black/90">
          <div className="flex items-end justify-between gap-6">
            <div className="flex flex-col">
              <p className="line-clamp-1 text-base font-bold md:text-lg">
                {title}
              </p>
              <p className="line-clamp-1 text-xs tracking-wide capitalize opacity-70 sm:text-sm">
                {categories.slice(0, 3).map((cat, index) => (
                  <span key={cat._key ?? index}>
                    {cat.category}
                    {index < categories.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>
            <Link href={`/projects/${slug}`} title={`Check out ${title}`}>
              <Button>
                <span>Check it out</span>
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
