"use client";

import { useEffect, useRef } from "react";
import { Wrapper } from "./wrapper";

const Line: React.FC = () => {
  const path = useRef<SVGPathElement | null>(null);

  let progress: number = 0;
  let reqId: number | null = null;
  let x: number = 0.5;
  let time: number = Math.PI / 2;

  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;

  useEffect(() => {
    setPath(progress);

    const handleResize = () => setPath(progress);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setPath = (value: number) => {
    const width = window.innerWidth * 0.7;

    if (path.current) {
      path.current.setAttributeNS(
        null,
        "d",
        `M 0 50 Q ${width * x} ${50 + value} ${width} 50`,
      );
    }
  };

  const animateIn = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      time = Math.PI / 2;
    }

    setPath(progress);
    reqId = requestAnimationFrame(animateIn);
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { movementY, clientX, target } = e;

    if (target instanceof HTMLElement) {
      const box = target.getBoundingClientRect();
      x = (clientX - box.left) / box.width;
    }

    progress += movementY;
  };

  const resetAnimation = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
    }
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);

    setPath(newProgress);
    progress = lerp(progress, 0, 0.04);
    time += 0.2;

    if (Math.abs(progress) > 0.5) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      time = Math.PI / 2;
      progress = 0;
    }
  };

  return (
    <Wrapper className="w-full !px-0">
      <div className="relative h-px w-full">
        <span
          className="relative -top-5 z-[1] flex h-10 w-full hover:-top-[75px] hover:h-[150px]"
          onMouseEnter={animateIn}
          onMouseLeave={resetAnimation}
          onMouseMove={manageMouseMove}
        />

        <svg className="absolute -top-[50px] h-[100px] w-full">
          <path
            ref={path}
            className="fill-none stroke-border stroke-[1px]"
          ></path>
        </svg>
      </div>
    </Wrapper>
  );
};

export default Line;
