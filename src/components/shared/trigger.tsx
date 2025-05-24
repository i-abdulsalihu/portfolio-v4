"use client";

import { FC, useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import { staggerAnimation } from "@/lib/constants";
import { useInView } from "react-intersection-observer";

interface TriggerProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  custom?: number;
  y?: number;
}

const MotionTrigger: FC<TriggerProps> = ({
  children,
  custom,
  className,
  y,
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateY: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={staggerAnimation(y)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={custom}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionTrigger;
