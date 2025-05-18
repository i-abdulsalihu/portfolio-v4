"use client";

import Link from "next/link";
import { type FC, ReactElement, useEffect, useRef } from "react";
import { splitText } from "motion-plus";
import { LuCornerLeftUp } from "react-icons/lu";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useMotionValue, animate, hover } from "framer-motion";

interface HeroHeadingProps {
  className?: string;
  subtitle?: string;
  description?: string;
  title: ReactElement | string;
  path?: string;
}

const HeroHeading: FC<HeroHeadingProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector(".h1")!);

    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000; // seconds
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      // Calculate the speed of the pointer movement
      // and use that to calculate the distance the character should move
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get(),
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 },
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [velocityX, velocityY]);

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

        <h1 className="h1 text-4xl font-normal leading-[45px] will-change-[transform,opacity] md:text-[5vw] md:leading-[58px] lg:text-5xl lg:leading-[64px]">
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
