import Link from "next/link";

import Logo from "./logo";
import { Wrapper } from "./wrapper";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site.config";
import MotionTrigger from "./trigger";

const footerLinks = [
  {
    label: "X (Twitter)",
    title: "Follow me on X",
    url: "https://x.com/i_abdulsalihu",
  },
  {
    label: "LinkedIn",
    title: "Connect with me on LinkedIn",
    url: "https://www.linkedin.com/in/abdullahisalihu/",
  },
  {
    label: "Facebook",
    title: "Join the conversation on Facebook",
    url: "https://web.facebook.com/i.abdulsalihu",
  },
  {
    label: "Telegram",
    title: "Message me on Telegram",
    url: "https://t.me/i_abdulsalihu",
  },
  {
    label: "Instagram",
    title: "Catch up with me on Instagram",
    url: "https://www.instagram.com/i_abdulsalihu",
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

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6 md:justify-end">
          {footerLinks.map((link, index) => (
            <MotionTrigger y={10} custom={index} key={link.label}>
              <Link href={link.url} title={link.title} target="_blank">
                <Button variant={"link"} className="size-max gap-1 p-0">
                  <span className="text-xs font-medium tracking-wide uppercase">
                    {link.label}
                  </span>
                </Button>
              </Link>
            </MotionTrigger>
          ))}
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
