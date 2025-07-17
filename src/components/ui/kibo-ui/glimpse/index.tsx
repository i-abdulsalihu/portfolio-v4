/* eslint-disable @next/next/no-img-element */
"use client";

import type { ComponentProps } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import React from "react";

export type GlimpseProps = ComponentProps<typeof HoverCard>;

export const Glimpse = (props: GlimpseProps) => {
  return <HoverCard {...props} />;
};

export type GlimpseContentProps = ComponentProps<typeof HoverCardContent>;

export const GlimpseContent = (props: GlimpseContentProps) => (
  <HoverCardContent className="!rounded-4xl" {...props} />
);

export type GlimpseTriggerProps = ComponentProps<typeof HoverCardTrigger>;

export const GlimpseTrigger = (props: GlimpseTriggerProps) => (
  <HoverCardTrigger {...props} />
);

export type GlimpseTitleProps = ComponentProps<"p">;

export const GlimpseTitle = ({ className, ...props }: GlimpseTitleProps) => {
  return (
    <p className={cn("truncate text-sm font-semibold", className)} {...props} />
  );
};

export type GlimpseDescriptionProps = ComponentProps<"p">;

export const GlimpseDescription = ({
  className,
  ...props
}: GlimpseDescriptionProps) => {
  return (
    <p
      className={cn("text-muted-foreground line-clamp-2 text-sm", className)}
      {...props}
    />
  );
};

export type GlimpseImageProps = ComponentProps<"img">;

export const GlimpseImage = ({
  className,
  alt,
  src,
  fallbackSrc = "/svg/placeholder.svg",
  ...props
}: GlimpseImageProps & { fallbackSrc?: string }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <img
      alt={alt ?? ""}
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
      className={cn(
        "mb-4 aspect-[120/63] w-full rounded-2xl border object-cover",
        className,
      )}
      {...props}
    />
  );
};
