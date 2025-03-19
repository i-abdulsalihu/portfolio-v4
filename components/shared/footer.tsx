import Link from "next/link";
import Image from "next/image";

import { Wrapper } from "./wrapper";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <Wrapper grid className="!py-10">
        <div className="flex items-center">
          <Link href="/" className="-ml-3 size-max">
            <Image
              src="/images/logo-black-tb.png"
              alt="Abdullahi Salihu"
              priority
              width={40}
              height={40}
              quality={100}
              className="size-10"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-6">
          <Link
            href="/"
            className={buttonVariants({
              variant: "link",
              className: "!size-max !gap-1 !p-0",
            })}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              Facebook
            </span>
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              variant: "link",
              className: "!size-max !gap-1 !p-0",
            })}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              Twitter
            </span>
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              variant: "link",
              className: "!size-max !gap-1 !p-0",
            })}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              Linkedin
            </span>
          </Link>
          <Link
            href="/"
            className={buttonVariants({
              variant: "link",
              className: "!size-max !gap-1 !p-0",
            })}
          >
            <span className="text-xs font-medium uppercase tracking-wide">
              Telegram
            </span>
          </Link>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
