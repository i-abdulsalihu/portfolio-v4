import Link from "next/link";
import Image from "next/image";

import Logo from "./logo";
import { Wrapper } from "./wrapper";
import { siteConfig } from "@/config/site.config";
import MotionTrigger from "./trigger";
import { Fragment } from "react";
import { Separator } from "../ui/separator";
// import { Button } from "../ui/button";

const footerLinks = [
  {
    label: "X (Twitter)",
    title: "Follow me on X",
    url: "https://x.com/i_abdulsalihu",
    icon: "/svg/socials/twitter-x.svg",
  },
  {
    label: "LinkedIn",
    title: "Connect with me on LinkedIn",
    url: "https://www.linkedin.com/in/abdullahisalihu/",
    icon: "/svg/socials/linkedin.svg",
  },
  {
    label: "Facebook",
    title: "Join the conversation on Facebook",
    url: "https://web.facebook.com/i.abdulsalihu",
    icon: "/svg/socials/facebook.svg",
  },
  {
    label: "Telegram",
    title: "Message me on Telegram",
    url: "https://t.me/i_abdulsalihu",
    icon: "/svg/socials/telegram.svg",
  },
  {
    label: "Instagram",
    title: "Catch up with me on Instagram",
    url: "https://www.instagram.com/i_abdulsalihu",
    icon: "/svg/socials/instagram.svg",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <Wrapper className="grid grid-cols-1 gap-4 py-8 sm:!py-10 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start">
          <Link
            href="/"
            className="size-max md:-ml-2"
            title={`Logo - ${siteConfig.title}`}
          >
            <Logo className="!size-16 sm:size-10" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end">
          {footerLinks.map((link, index) => (
            <Fragment key={link.label}>
              <MotionTrigger y={10} custom={index}>
                <Link
                  target="_blank"
                  href={link.url}
                  title={link.title}
                  className="group flex cursor-pointer items-center"
                  data-cursor="pointer"
                >
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={44}
                    height={44}
                    priority
                    quality={100}
                    className="pointer-events-none size-12 select-none sm:size-11"
                  />
                </Link>
              </MotionTrigger>

              <Separator
                orientation="vertical"
                className="mx-2 !h-4 w-px last-of-type:hidden"
              />
            </Fragment>
          ))}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
