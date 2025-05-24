"use client";

import { FC } from "react";

import { Wrapper } from "@/components/shared/wrapper";
import MotionTrigger from "@/components/shared/trigger";
import Subheading from "@/app/(routes)/_components/subheading";

interface DescriptionsProps {
  descriptions: string[];
}

const Descriptions: FC<DescriptionsProps> = ({ descriptions }) => {
  return (
    <Wrapper grid className="border-b py-12 md:py-16 lg:py-20">
      <div className="hidden md:block">
        <Subheading title="About this project" />
      </div>

      {descriptions.map((desc, index) => (
        <MotionTrigger
          custom={index}
          key={index}
          className="flex flex-col gap-2"
        >
          <div className="text-sm leading-6 font-normal tracking-wide sm:text-base sm:leading-7">
            {desc}
          </div>
        </MotionTrigger>
      ))}
    </Wrapper>
  );
};

export default Descriptions;
