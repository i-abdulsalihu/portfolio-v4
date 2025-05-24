import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type WrapperProps = React.ComponentProps<"section"> & {
  grid?: boolean;
};

const Wrapper = forwardRef<HTMLElement, WrapperProps>(
  ({ children, className, grid, ...props }, ref) => {
    return (
      <section
        ref={ref}
        {...props}
        className={cn(
          "mx-auto w-full max-w-[600px] px-5 md:max-w-[1200px] md:px-8",
          className,
          {
            "grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:gap-y-12":
              grid,
          },
        )}
      >
        {children}
      </section>
    );
  },
);

Wrapper.displayName = "Wrapper";

export { Wrapper };
