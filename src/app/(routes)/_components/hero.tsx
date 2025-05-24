"use client";

import { Fragment, type ReactElement, type FC } from "react";

import HeroImg from "./hero-img";
import Heading from "./heading";
import BannerArrow from "./banner-arrow";
import { Wrapper } from "@/components/shared/wrapper";
import MotionTrigger from "@/components/shared/trigger";

interface HeroProps extends HeadingProps {
  actions?: ReactElement;
  src?: string;
}

const Hero: FC<HeroProps> = ({ actions, src, ...props }) => {
  return (
    <Fragment>
      <Wrapper grid className="pt-6 pb-12 sm:pb-16 lg:pt-20 lg:pb-32">
        <MotionTrigger
          y={-100}
          custom={1}
          className="flex flex-col gap-6 md:gap-12"
        >
          <Heading {...props} />

          {actions && (
            <div className="flex w-full items-center gap-4">{actions}</div>
          )}
        </MotionTrigger>

        <MotionTrigger y={-100} custom={2} className="flex flex-col gap-10">
          <HeroImg src={src} />
        </MotionTrigger>
      </Wrapper>
      <BannerArrow />
    </Fragment>
  );
};

export default Hero;
