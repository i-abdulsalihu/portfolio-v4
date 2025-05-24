"use client";

import gsap from "gsap";
import { motion } from "motion/react";
import { Fragment, useEffect, useRef, type FC } from "react";
import Img from "@/components/shared/img";
import { urlFor } from "@/sanity/lib/image";

interface ImgModalProps {
  modal: { active: boolean; index: number };
  projects: ProjectProps[];
}

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.3, ease: [0.32, 0, 0.67, 0] },
  },
};

const ImgModal: FC<ImgModalProps> = ({ modal, projects }) => {
  const { active, index } = modal;

  const modalContainer = useRef<HTMLDivElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const cursorLabel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Setup GSAP quickTo functions for each element
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    let animationFrameId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId !== null) return;

      animationFrameId = requestAnimationFrame(() => {
        const { pageX, pageY } = e;
        xMoveContainer(pageX);
        yMoveContainer(pageY);
        xMoveCursor(pageX);
        yMoveCursor(pageY);
        xMoveCursorLabel(pageX);
        yMoveCursorLabel(pageY);
        animationFrameId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
    };
  }, [active, index]);

  return (
    <Fragment>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="bg-popover/40 pointer-events-none absolute flex h-[350px] w-[400px] items-center justify-center overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-sm will-change-transform"
      >
        <div
          style={{ top: index * -100 + "%" }}
          className="absolute size-full transition-[top_0.8s_cubic-bezier(0.76,_0,_0.24,_1)] duration-500"
        >
          {projects.map((project, idx) => {
            const postImageUrl = project.src
              ? urlFor(project.src)?.url()
              : null;

            return (
              <div
                className="flex size-full items-center justify-center overflow-hidden rounded-xl"
                key={`modal_${idx}`}
              >
                <Img
                  src={postImageUrl ?? "/svg/placeholder.svg"}
                  width={300}
                  height={0}
                  alt={project.title}
                  priority
                  quality={100}
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className="bg-foreground/60 text-background pointer-events-none absolute z-[2] flex size-20 items-center justify-center rounded-full text-sm backdrop-blur-md will-change-transform"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />
      <motion.div
        ref={cursorLabel}
        className="text-background pointer-events-none absolute z-[2] flex size-20 items-center justify-center rounded-full bg-transparent text-sm font-medium will-change-transform"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </Fragment>
  );
};

export default ImgModal;
