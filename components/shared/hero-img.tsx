"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

import Img from "./img";
import { cn } from "@/lib/utils";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const HeroImg = ({ imgs }: { imgs: string[] }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (imgs.length === 1) return; // Prevent auto-slide when there's only one image

    const intervalRef = setInterval(() => {
      if (dragX.get() === 0) {
        setImgIndex((prev) => (prev + 1) % imgs.length);
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, imgs.length]);

  const onDragEnd = () => {
    if (imgs.length === 1) return; // Prevent dragging when there's only one image

    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="group relative aspect-[1.4] w-full overflow-hidden rounded-xl border transition-all duration-300">
      <motion.div
        drag={imgs.length > 1 ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex size-full cursor-grab items-center active:cursor-grabbing"
      >
        {imgs.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            animate={{ scale: imgIndex === idx ? 1 : 0.95 }}
            transition={SPRING_OPTIONS}
            className="relative size-full shrink-0 rounded-xl"
          >
            <Img
              fill
              sizes="auto"
              src={imgSrc}
              alt={`Image-${idx + 1}`}
              className="pointer-events-none rounded-xl object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {imgs.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 transition-all duration-300">
          {imgs.map((_, idx) => (
            <div
              key={idx}
              role="button"
              onClick={() => setImgIndex(idx)}
              className={cn(
                "size-2 rounded-full border border-background bg-background",
                {
                  "border-primary bg-primary": idx === imgIndex,
                },
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroImg;
