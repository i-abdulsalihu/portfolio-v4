import Link from "next/link";

import { formatDate } from "@/lib/utils";

const ProjectList = ({
  slug,
  publishedAt,
  title,
  descriptions,
}: ProjectPropType) => {
  return (
    <Link
      role="button"
      href={`/projects/${slug}`}
      className="group relative flex items-start gap-6 border-b py-8 transition-all last-of-type:border-b-0 hover:bg-secondary/50"
    >
      <p className="mt-px flex-[2] text-sm font-medium uppercase tracking-wider transition-transform duration-300 group-hover:translate-x-8">
        {formatDate(publishedAt)}
      </p>

      <div className="flex flex-[5] flex-col transition-transform duration-300 group-hover:-translate-x-6">
        <p className="line-clamp-1 text-base font-medium tracking-wide">
          {title}
        </p>
        <pre className="line-clamp-1 whitespace-pre-wrap font-sans text-sm font-normal leading-6 tracking-wide">
          {descriptions}
        </pre>
      </div>

      <div className="flex-[3]">
        <div className="absolute right-0 top-1/2 size-[220px] -translate-y-1/2 bg-secondary"></div>
      </div>

      {/* <p className="flex-[3] text-sm font-normal tracking-wide transition-transform duration-300 group-hover:-translate-x-8">
        Hello world
      </p> */}
    </Link>
  );
};

export default ProjectList;
