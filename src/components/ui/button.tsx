"use client";

import * as React from "react";
import { motion, MotionProps } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center select-none gap-2 cursor-pointer whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      keyof MotionProps
    >,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: React.ReactNode;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, isLoading, loadingText, children, ...props },
    ref,
  ) => {
    const motionProps = {
      whileTap: { scale: 0.9 },
      transition: { type: "spring", stiffness: 400, damping: 15 },
    };

    return (
      <motion.button
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && "cursor-wait",
        )}
        data-cursor="pointer"
        ref={ref}
        disabled={isLoading || props.disabled}
        {...motionProps}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader className="size-5 animate-spin" />
            {loadingText && <span>{loadingText}</span>}
          </>
        ) : (
          <>{children}</>
        )}
      </motion.button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
