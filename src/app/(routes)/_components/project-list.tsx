import type { FC } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface ProjectListProps {
  project: ProjectProps;
  index: number;
  setModal: (modal: { active: boolean; index: number }) => void;
}

const ProjectList: FC<ProjectListProps> = ({ index, setModal, project }) => {
  const { title, slug, descriptions, publishedAt } = project;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group hover:dark:bg-secondary/50 hover:bg-secondary relative flex h-full items-start gap-6 py-10 transition-all md:cursor-none"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <p className="line-clamp-1 flex-[2.5] text-[17px] font-medium transition-transform duration-300 group-hover:translate-x-8">
        {title}
      </p>

      <div className="flex flex-[5.5] flex-col transition-transform duration-300 group-hover:translate-x-6">
        <pre className="line-clamp-1 max-w-[420px] font-sans text-[15px] leading-6 font-normal whitespace-pre-wrap">
          {descriptions[0]}
        </pre>
      </div>

      <p className="flex-[2] text-right text-xs font-medium tracking-wider uppercase transition-transform duration-300 group-hover:-translate-x-8">
        {formatDate(publishedAt)}
      </p>
    </Link>
  );
};

export default ProjectList;
