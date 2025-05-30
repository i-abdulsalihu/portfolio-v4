import Link from "next/link";
import Image from "next/image";

import Logo from "./logo";
import { Wrapper } from "./wrapper";
import { siteConfig } from "@/config/site.config";
import MotionTrigger from "./trigger";

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
      <Wrapper className="grid grid-cols-1 gap-6 !py-10 md:grid-cols-2">
        <div className="flex items-center justify-center md:justify-start">
          <Link
            href="/"
            className="size-max md:-ml-2"
            title={`Logo - ${siteConfig.title}`}
          >
            <Logo />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-y-2 md:justify-end">
          {footerLinks.map((link, index) => (
            <MotionTrigger y={10} custom={index} key={link.label}>
              <Link
                target="_blank"
                href={link.url}
                title={link.title}
                className="group flex cursor-pointer items-center"
                data-cursor="pointer"
              >
                <div className="z-10 -mr-4">
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={40}
                    height={40}
                    priority
                    quality={100}
                    className="pointer-events-none size-12 select-none sm:size-10"
                  />
                </div>
                <span className="border-foreground flex h-[26px] items-center justify-center rounded-r-full border pr-2.5 pl-[19px] text-xs font-medium tracking-wide sm:h-6 sm:pr-2 sm:pl-[18px]">
                  Follow
                </span>
              </Link>
            </MotionTrigger>
          ))}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

// <Link href={link.url} title={link.title} target="_blank">
//   <Button variant={"link"} className="size-max gap-1 p-0">
//     <span className="text-xs font-medium tracking-wide uppercase">
//       {link.label}
//     </span>
//   </Button>
// </Link>
