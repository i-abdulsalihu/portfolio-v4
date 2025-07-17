import Link from "next/link";
import type { FC } from "react";
import { LuCornerLeftUp } from "react-icons/lu";
import { buttonVariants } from "@/components/ui/button";
import Magnet from "@/components/shared/magnet";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/ui/kibo-ui/announcement";

const Heading: FC<HeadingProps> = ({
  title,
  subtitle,
  description,
  message,
  back,
}) => {
  return (
    <div className="mt-auto flex flex-col gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-col gap-2 sm:gap-3">
        {subtitle ? (
          <Magnet padding={5} magnetStrength={15} className="w-max">
            <Announcement className="md:!cursor-none">
              {message && <AnnouncementTag>{message}</AnnouncementTag>}
              <AnnouncementTitle>{subtitle}</AnnouncementTitle>
            </Announcement>
          </Magnet>
        ) : (
          back && (
            <Link
              href="/projects"
              className={buttonVariants({
                className: "!w-max !px-0 md:!cursor-none",
                variant: "link",
              })}
            >
              <LuCornerLeftUp className="size-4" />
              <span className="text-xs font-medium tracking-wide uppercase">
                Back to Projects
              </span>
            </Link>
          )
        )}
        <h1 className="text-3xl leading-[1.35] font-normal will-change-[transform,opacity] sm:text-4xl sm:leading-[45px] md:text-[5vw] md:leading-[58px] lg:text-5xl lg:leading-[64px]">
          {title}
        </h1>
      </div>

      {description && (
        <div className="flex w-full items-center gap-4">
          <p className="text-sm leading-6 font-normal tracking-wide sm:text-base sm:leading-7">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Heading;
