import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface WrapperProps extends React.ComponentProps<"section"> {
  grid?: boolean;
}

const Wrapper = forwardRef<HTMLElement, WrapperProps>(
  ({ children, className, grid, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[600px] px-5 md:max-w-[1200px] md:px-8",
          className,
          {
            "grid grid-cols-1 gap-6 py-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:pb-32 lg:pt-20":
              grid,
          }
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Wrapper.displayName = "Wrapper";

export { Wrapper };
