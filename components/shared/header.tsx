"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import Region from "./region";
import NavMenu from "./nav-menu";
import { Wrapper } from "./wrapper";

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
      className="sticky top-0 z-50 bg-background/0 py-2 backdrop-blur-md sm:py-6"
    >
      <Wrapper className="grid size-full h-full grid-cols-2 gap-6">
        <div className="flex items-center">
          <Link href="/" className="-ml-3 size-max">
            <Image
              src="/images/logo-black-tb.png"
              alt="Abdullahi Salihu"
              priority
              width={40}
              height={40}
              quality={100}
              className="size-10"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex">
            <Region />
          </div>

          <div className="-mr-3 ml-auto">
            <NavMenu />
          </div>
        </div>
      </Wrapper>
    </motion.header>
  );
};

export default Header;
