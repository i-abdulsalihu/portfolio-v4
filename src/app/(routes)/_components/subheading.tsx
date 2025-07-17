import Link from "next/link";
import type { FC } from "react";
import { LuArrowRight } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import MotionTrigger from "@/components/shared/trigger";

const Subheading: FC<SubheadingProps> = ({ title, subtitle, path }) => {
  return (
    <MotionTrigger className="mb-3 flex h-auto w-full flex-row items-center justify-between gap-1 sm:px-4 md:mb-0 md:flex-col md:items-start md:justify-start md:px-0">
      <p className="w-max text-base font-medium md:text-lg">{title}</p>

      {subtitle && (
        <Link href={path ?? "/"} title={subtitle}>
          <Button
            variant={"link"}
            className="group !flex !h-fit !w-max !items-center !gap-2 !p-0 !tracking-wide"
          >
            <span className="text-xs font-medium uppercase">{subtitle}</span>
            <LuArrowRight className="!size-4 -rotate-45 transition duration-200 group-hover:rotate-0" />
          </Button>
        </Link>
      )}
    </MotionTrigger>
  );
};

export default Subheading;
