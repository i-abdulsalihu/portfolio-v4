import Link from "next/link";
import * as React from "react";
import Image from "next/image";

import Logo from "./logo";
import { Wrapper } from "./wrapper";
import { socials } from "@/lib/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MotionTrigger from "./trigger";
import Magnet from "./magnet";

export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <Wrapper className="grid grid-cols-1 gap-4 py-8 sm:!py-10 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start">
          <Link href="/" className="size-max md:-ml-2 md:!cursor-none">
            <Logo className="!size-14 sm:!size-10" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1 md:justify-end">
          {socials.map((social, index) => (
            <MotionTrigger y={10} custom={index} key={social.label}>
              <Magnet padding={10} magnetStrength={5}>
                <Tooltip>
                  <TooltipTrigger type="button">
                    <Link
                      target="_blank"
                      href={social.url}
                      className="group flex items-center md:!cursor-none"
                      data-cursor="pointer"
                    >
                      <Image
                        src={social.icon}
                        alt={social.title}
                        width={44}
                        height={44}
                        loading="eager"
                        quality={100}
                        className="pointer-events-none size-12 select-none sm:size-11"
                      />
                    </Link>
                    <p className="sr-only">{social.label}</p>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p className="sr-only">{social.title}</p>
                    <p className="text-xs font-medium">{social.title}</p>
                  </TooltipContent>
                </Tooltip>
              </Magnet>
            </MotionTrigger>
          ))}
        </div>
      </Wrapper>
    </footer>
  );
};
