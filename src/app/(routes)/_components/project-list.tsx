import type { FC } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface ProjectListProps {
  project: ProjectProps;
  index: number;
  setModal: (modal: { active: boolean; index: number }) => void;
}

const ProjectList: FC<ProjectListProps> = ({ index, setModal, project }) => {
  const { title, slug, descriptions, categories, publishedAt } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group hover:dark:bg-secondary/50 hover:bg-secondary relative flex h-full items-start gap-6 py-8 transition-all"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <p className="mt-px flex-[2] text-sm font-medium tracking-wider uppercase transition-transform duration-300 group-hover:translate-x-8">
        {formatDate(publishedAt)}
      </p>

      <div className="flex flex-[5.5] flex-col transition-transform duration-300 group-hover:-translate-x-6">
        <p className="line-clamp-1 text-base font-medium tracking-wide">
          {title}
        </p>
        <pre className="line-clamp-1 max-w-sm font-sans text-sm leading-6 font-normal tracking-wide whitespace-pre-wrap">
          {descriptions[0]}
        </pre>
      </div>

      <p className="flex-[2.5] text-sm font-normal tracking-wide capitalize transition-transform duration-300 group-hover:-translate-x-8">
        {categories.slice(0, 4).map((cat, index) => (
          <span key={cat._key ?? index}>
            {cat.category}
            {index < categories.length - 1 && ", "}
          </span>
        ))}
      </p>
    </Link>
  );
};

export default ProjectList;
