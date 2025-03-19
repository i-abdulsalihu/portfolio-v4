import Link from "next/link";
import { FC, ReactElement } from "react";
import SpringCursor from "./spring";

interface SectionHeadingProps {
  className?: string;
  subtitle?: string;
  description?: string;
  title: ReactElement | string;
  path?: string;
}

const SectionHeading: FC<SectionHeadingProps> = (props) => {
  return (
    <div className="mb-2 flex h-auto w-full flex-row items-center justify-between gap-1.5 md:mb-0 md:flex-col md:items-start md:justify-start">
      <p className="w-max font-sans text-base font-medium md:text-lg">
        {props.title}
      </p>
      {props.subtitle && (
        <Link
          href={props.path ?? "/"}
          className="group flex w-max items-center gap-2 tracking-wide"
        >
          <span className="text-sm font-medium tracking-wide">
            {props.subtitle}
          </span>
          <SpringCursor />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
