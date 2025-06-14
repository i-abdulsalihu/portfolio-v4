"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import Image, { ImageProps } from "next/image";
import { useEffect, useState, type FC } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import MotionTrigger from "@/components/shared/trigger";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { useIsMobile } from "@/hooks/mobile";
import { usePathname } from "next/navigation";

interface StackItemProps {
  stack: InventoryProps;
  index: number;
}

interface ThemeImageProps extends Omit<ImageProps, "src"> {
  lightSrc?: string;
  darkSrc?: string;
}

const ThemeImage: React.FC<ThemeImageProps> = ({
  lightSrc,
  darkSrc,
  alt = "",
  ...props
}) => {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  const [imageUrl, setImageUrl] = useState("/svg/placeholder.svg");

  useEffect(() => {
    const src = resolvedTheme === "dark" && darkSrc ? darkSrc : lightSrc;
    const url = src ? urlFor(src).url() : "/svg/placeholder.svg";
    setImageUrl(url);
  }, [resolvedTheme, pathname, lightSrc, darkSrc]);

  return <Image src={imageUrl} alt={alt} {...props} />;
};

const StackItem: FC<StackItemProps> = ({ stack, index }) => {
  const isMobile = useIsMobile();

  const content = (
    <MotionTrigger custom={index}>
      <div className="group bg-secondary relative flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-1.5 px-1 py-2 md:gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="bg-foreground/30 absolute h-px w-2 [&:nth-child(1)]:top-0 [&:nth-child(1)]:left-0 [&:nth-child(2)]:bottom-0 [&:nth-child(2)]:left-0 [&:nth-child(3)]:right-0 [&:nth-child(3)]:bottom-0 [&:nth-child(4)]:top-0 [&:nth-child(4)]:right-0"
          />
        ))}
        <div className="pointer-events-none relative size-8 origin-top object-contain transition-transform duration-300 lg:scale-110 lg:group-hover:scale-75 xl:scale-100">
          <ThemeImage
            lightSrc={stack.icon}
            darkSrc={stack.iconDark || stack.icon}
            alt={stack.label}
            width={32}
            height={32}
            priority
            quality={100}
          />
        </div>
        <p className="mt-1 text-[10px] leading-none font-medium whitespace-nowrap transition-transform duration-300 md:mt-0 md:text-xs lg:absolute lg:bottom-3 lg:scale-0 lg:group-hover:scale-100 xl:bottom-[7px] xl:text-[9px]">
          {stack.label}
        </p>
      </div>
    </MotionTrigger>
  );

  if (isMobile) {
    return (
      <Link href={stack.url ?? "#"} key={index} target={stack.url && "_blank"}>
        {content}
      </Link>
    );
  }

  return (
    <HoverCard key={index}>
      <HoverCardTrigger asChild>{content}</HoverCardTrigger>
      <HoverCardContent className="w-96">
        <div className="flex justify-between space-x-4">
          <div className="pointer-events-none relative size-10 origin-top object-contain transition-transform duration-300 lg:scale-110 lg:group-hover:scale-75 xl:scale-100">
            <ThemeImage
              lightSrc={stack.icon}
              darkSrc={stack.iconDark || stack.icon}
              alt={stack.label}
              width={32}
              height={32}
              priority
              quality={100}
            />
          </div>
          <div className="flex flex-1 flex-col space-y-1">
            <p className="text-base font-semibold">{stack.label}</p>
            {stack.description && (
              <p className="text-sm">{stack.description}</p>
            )}
            {stack.url && (
              <Link href={stack.url} target="_blank" title={stack.label}>
                <Button
                  variant="link"
                  className="mt-4 ml-auto !h-0 !p-0 !text-xs"
                >
                  Check it out
                </Button>
              </Link>
            )}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default StackItem;
