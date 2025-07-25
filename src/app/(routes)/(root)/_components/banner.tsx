import Link from "next/link";
import { Fragment } from "react";
import { LuArrowRight } from "react-icons/lu";

import Hero from "../../_components/hero";
import { Button } from "@/components/ui/button";

const HomeBanner = () => {
  return (
    <Hero
      src="/images/hero-img.png"
      message="Introduction"
      subtitle="Hey there! Good to see you."
      title="I'm Abdullahi Salihu, a Web3 Frontend Eng. from Nigeria."
      actions={
        <Fragment>
          <Link
            href="/contact"
            title="Waste no Time"
            className="w-full sm:w-max"
          >
            <Button
              variant="outline"
              size="lg"
              className="group w-full sm:w-max"
            >
              <span className="text-xs font-medium uppercase">
                Waste no time
              </span>
            </Button>
          </Link>
          <Link
            href="https://linktr.ee/i_abdulsalihu"
            target="_blank"
            title="Discover More"
            className="w-full sm:w-max"
          >
            <Button variant="link" size="lg" className="group w-full sm:w-max">
              <span className="text-xs font-medium uppercase">
                Discover More
              </span>
              <LuArrowRight className="!size-4 -rotate-45 transition duration-200 group-hover:rotate-0" />
            </Button>
          </Link>
        </Fragment>
      }
    />
  );
};

export default HomeBanner;
