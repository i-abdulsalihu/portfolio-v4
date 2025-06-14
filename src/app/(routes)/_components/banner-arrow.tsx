"use client";

import { motion } from "motion/react";
import Img from "@/components/shared/img";
import Magnet from "@/components/shared/magnet";

const BannerArrow = () => {
  return (
    <div className="relative w-full">
      <span className="bg-border absolute top-1/2 left-0 h-px w-full -translate-y-1/2" />

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="bg-background absolute top-1/2 left-1/2 size-[74px] -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 shadow sm:size-[84px] md:p-2"
      >
        <Magnet
          wrapperClassName="size-full"
          innerClassName="size-full"
          padding={20}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            data-cursor="pointer"
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="dark:bg-secondary bg-primary relative flex size-full items-center justify-center rounded-full"
          >
            <Magnet padding={30}>
              <Img
                src="/images/logo-white-tb.png"
                alt="Logo"
                width={32}
                height={32}
                priority
                quality={100}
                className="pointer-events-none object-contain object-center select-none"
              />
            </Magnet>
          </motion.div>
        </Magnet>
      </motion.div>
    </div>
  );
};

export default BannerArrow;
