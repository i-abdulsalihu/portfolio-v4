"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import Region from "./region";
import { Wrapper } from "./wrapper";
import NavMenu from "./nav-menu";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import { siteConfig } from "@/config/site.config";
import { Separator } from "../ui/separator";

const Header = () => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()!;

    if (latest > previous && latest >= 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="bg-background/30 sticky inset-x-0 top-0 z-50 h-20 backdrop-blur-3xl sm:h-24 lg:h-32"
    >
      <Wrapper className="grid size-full h-full grid-cols-2 gap-6 sm:pt-6 md:pt-8 lg:pt-12">
        <div className="flex items-center">
          <Link
            href="/"
            className="size-max sm:-ml-2"
            title={`Logo - ${siteConfig.title}`}
          >
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <Region />
          </div>

          <div className="ml-auto flex items-center sm:-mr-3">
            <ThemeToggle />
            <Separator orientation="vertical" className="mr-2 ml-4 !h-4" />
            <NavMenu />
          </div>
        </div>
      </Wrapper>
    </motion.header>
  );
};

export default Header;
