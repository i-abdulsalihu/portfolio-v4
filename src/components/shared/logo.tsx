"use client";

import { type FC } from "react";

import Img from "./img";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { useZustandStore } from "@/lib/store";
import MotionTrigger from "./trigger";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  const logo = useZustandStore((state) => state.logo);

  return (
    <MotionTrigger y={0}>
      <Img
        src={logo}
        alt="Abdullahi Salihu"
        priority
        width={40}
        height={40}
        quality={100}
        className={cn("size-10", className)}
        title={`Logo - ${siteConfig.title}`}
      />
    </MotionTrigger>
  );
};

export default Logo;
