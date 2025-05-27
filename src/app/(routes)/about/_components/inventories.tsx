import { FC, ReactElement } from "react";

import { Wrapper } from "@/components/shared/wrapper";
import Subheading from "@/app/(routes)/_components/subheading";

import { cn } from "@/lib/utils";
import StackItem from "./stack-item";
import MotionTrigger from "@/components/shared/trigger";

interface InventoriesProps {
  title: ReactElement | string;
  sortedResponse: Array<{
    category: string;
    stacks: InventoryProps[];
  }>;
}

const Inventories: FC<InventoriesProps> = ({ title, sortedResponse }) => {
  return (
    <Wrapper grid className="border-b py-12 md:py-16 lg:py-20">
      <Subheading title={title} />

      <div className="flex flex-col gap-8">
        <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
          {sortedResponse.map(({ category, stacks }, index) => (
            <div
              key={index}
              className={cn("flex flex-col gap-2", {
                "xl:col-span-2": category.toLowerCase() === "tools",
              })}
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
                <p className="text-[12px] font-medium tracking-wider uppercase">
                  {category}
                </p>
              </MotionTrigger>

              <div
                className={cn(
                  "grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4",
                  {
                    "xl:grid-cols-8": category.toLowerCase() === "tools",
                  },
                )}
              >
                {stacks.map((stack, _key) => (
                  <StackItem key={_key} stack={stack} index={_key} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Inventories;
