import Link from "next/link";
import * as React from "react";

import Logo from "./logo";
import Region from "./region";
import NavMenu from "./nav-menu";
import { Wrapper } from "./wrapper";
import ThemeToggle from "./theme-toggle";
import { Separator } from "@/components/ui/separator";

export const Header = () => {
  return (
    <header className="bg-background/50 sticky inset-x-0 top-0 z-50 h-20 backdrop-blur-3xl sm:h-24 lg:h-32">
      <Wrapper className="grid size-full h-full grid-cols-2 gap-6 sm:pt-6 md:pt-8 lg:pt-12">
        <div className="flex items-center">
          <Link href="/" className="size-max md:-ml-2 md:!cursor-none">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <Region />
          </div>

          <div className="ml-auto flex items-center sm:-mr-2">
            <ThemeToggle />
            <Separator orientation="vertical" className="mx-3 !h-4" />
            <NavMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
