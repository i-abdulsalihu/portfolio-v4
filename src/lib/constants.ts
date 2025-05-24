export const staggerAnimation = (y?: number) => ({
  initial: { opacity: 0, y: y ?? 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.9,
      type: "spring",
    },
  }),
});
