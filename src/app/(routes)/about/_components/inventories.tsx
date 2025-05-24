import Link from "next/link";
import Image from "next/image";
import { FC, ReactElement } from "react";

import { Wrapper } from "@/components/shared/wrapper";
import Subheading from "@/app/(routes)/_components/subheading";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn, groupStacksByCategory } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import MotionTrigger from "@/components/shared/trigger";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

interface InventoriesProps {
  title: ReactElement | string;
}

const Inventories: FC<InventoriesProps> = async ({ title }) => {
  const result = await sanityFetch({
    query: `*[_type == "techStack"]{
        label,
        description,
        icon,
        url,
        category
      } | order(category asc)`,
  });

  const stackInventory = groupStacksByCategory(result.data);

  if (!stackInventory || stackInventory.length === 0) return null;

  const sortedResponse = stackInventory.sort((a, b) => {
    if (a.category.toLowerCase() === "apis") return 1;
    if (b.category.toLowerCase() === "apis") return -1;
    return a.category.localeCompare(b.category);
  });

  return (
    <Wrapper grid className="border-b py-12 md:py-16 lg:py-20">
      <Subheading title={title} />

      <div className="flex flex-col gap-8">
        <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
          {sortedResponse.map(({ category, stacks }, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 last-of-type:xl:col-span-2"
            >
              <MotionTrigger
                y={0}
                className="group border-foreground/30 bg-secondary relative flex h-12 items-center justify-center border-x"
              >
                {Array.from({ length: 4 }).map((_, _key) => (
                  <span
                    key={_key}
                    className="bg-foreground/30 absolute h-px w-2 [&:nth-child(1)]:top-0 [&:nth-child(1)]:left-0 [&:nth-child(2)]:bottom-0 [&:nth-child(2)]:left-0 [&:nth-child(3)]:right-0 [&:nth-child(3)]:bottom-0 [&:nth-child(4)]:top-0 [&:nth-child(4)]:right-0"
                  />
                ))}
                <p className="text-xs font-medium tracking-wider uppercase">
                  {category}
                </p>
              </MotionTrigger>

              <div
                className={cn(
                  "grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4",
                  {
                    "xl:grid-cols-8": category.toLowerCase() === "apis",
                  },
                )}
              >
                {stacks.map((stack, _key) => {
                  const imageIcon = stack.icon
                    ? urlFor(stack.icon)?.url()
                    : null;

                  return (
                    <HoverCard key={_key}>
                      <HoverCardTrigger asChild>
                        <MotionTrigger
                          custom={index}
                          className="group bg-secondary relative flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-1.5 px-1 py-2 md:gap-2"
                        >
                          {Array.from({ length: 4 }).map((_, _i) => (
                            <span
                              key={_i}
                              className="bg-foreground/30 absolute h-px w-2 [&:nth-child(1)]:top-0 [&:nth-child(1)]:left-0 [&:nth-child(2)]:bottom-0 [&:nth-child(2)]:left-0 [&:nth-child(3)]:right-0 [&:nth-child(3)]:bottom-0 [&:nth-child(4)]:top-0 [&:nth-child(4)]:right-0"
                            />
                          ))}
                          <div className="pointer-events-none relative size-8 origin-top object-contain transition-transform duration-300 lg:scale-110 lg:group-hover:scale-75 xl:scale-100">
                            <Image
                              src={imageIcon ?? "/svg/placeholder.svg"}
                              alt="Fallback"
                              width={32}
                              height={32}
                              priority
                              quality={100}
                            />
                          </div>
                          <p className="text-[10px] leading-none font-medium whitespace-nowrap transition-transform duration-300 md:text-xs lg:absolute lg:bottom-3 lg:scale-0 lg:group-hover:scale-100 xl:bottom-[7px] xl:text-[9px]">
                            {stack.label}
                          </p>
                        </MotionTrigger>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-96">
                        <div className="flex justify-between space-x-4">
                          <div className="pointer-events-none relative size-10 origin-top object-contain transition-transform duration-300 lg:scale-110 lg:group-hover:scale-75 xl:scale-100">
                            <Image
                              src={imageIcon ?? "/svg/placeholder.svg"}
                              alt="Fallback"
                              width={32}
                              height={32}
                              priority
                              quality={100}
                            />
                          </div>

                          <div className="flex flex-1 flex-col space-y-1">
                            <p className="text-base font-semibold">
                              {stack.label}
                            </p>
                            {stack.description && (
                              <p className="text-sm">{stack.description}</p>
                            )}
                            {stack.url && (
                              <Link
                                href={stack.url}
                                target="_blank"
                                title={stack.label}
                              >
                                <Button
                                  variant={"link"}
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
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Inventories;
