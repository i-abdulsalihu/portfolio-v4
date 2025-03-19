import Link from "next/link";
import Image from "next/image";

import { formatDate, urlFor } from "@/lib/utils";

const ProjectCard = ({ slug, publishedAt, title, banner }: ProjectPropType) => {
  const postImageUrl = banner ? urlFor(banner)?.url() : null;

  return (
    <div className="group relative flex w-full flex-col gap-4">
      <Link
        href={`/projects/${slug}`}
        className="group relative aspect-[1.4] w-full overflow-hidden rounded-xl border transition-all duration-300 md:group-hover:p-4"
      >
        <Image
          src={postImageUrl ?? "/svg/placeholder.svg"}
          alt="Placeholder"
          width={1200}
          height={1200}
          priority
          quality={100}
          className="size-full rounded-md object-cover"
        />
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal tracking-wide">Hi</p>
          <p className="text-sm font-medium tracking-wide">
            {formatDate(publishedAt)}
          </p>
        </div>

        <p className="text-base font-medium leading-none tracking-wide">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
