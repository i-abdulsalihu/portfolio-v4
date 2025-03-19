import Link from "next/link";
import { FC, ReactElement } from "react";
import { LuCornerLeftUp } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface HeroHeadingProps {
  className?: string;
  subtitle?: string;
  description?: string;
  title: ReactElement | string;
  path?: string;
}

const HeroHeading: FC<HeroHeadingProps> = (props) => {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-6 md:gap-8", props.className)}
    >
      <div className="flex flex-col gap-3">
        {props.subtitle &&
          (props.path ? (
            <Link
              href={props.path}
              role="button"
              className={buttonVariants({
                variant: "link",
                size: "lg",
                className:
                  "w-max !px-0 !text-xs !font-medium !uppercase !tracking-wide",
              })}
            >
              <LuCornerLeftUp className="size-4" />

              <span className="text-xs font-medium uppercase tracking-wide">
                BACK TO PROJECTS
              </span>
            </Link>
          ) : (
            <p className="text-sm font-medium uppercase tracking-wide">
              {props.subtitle}
            </p>
          ))}

        <h1 className="text-4xl font-normal leading-[45px] md:text-[5vw] md:leading-[58px] lg:text-5xl lg:leading-[64px]">
          {props.title}
        </h1>
      </div>

      {props.description && (
        <div className="flex w-full items-center gap-4">
          <p className="text-base font-normal leading-7 tracking-wide">
            {props.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroHeading;
