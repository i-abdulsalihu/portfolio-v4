"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { LiaGripLinesSolid } from "react-icons/lia";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Region from "./region";
import { siteConfig } from "@/config/site.config";
import Logo from "./logo";
import MotionTrigger from "./trigger";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/projects", label: "My Projects" },
  { path: "/contact", label: "Let's Talk" },
];

const NavMenu = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <SheetTrigger title={isMenuOpen ? "Menu Opened" : "Menu Closed"}>
        <MotionTrigger
          y={0}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group relative ml-auto flex size-11 items-center justify-center sm:size-10 md:!cursor-none"
        >
          {isMenuOpen ? (
            <IoClose
              className={cn(
                "text-foreground sm:group-hover:text-background size-6 transition-all duration-500 sm:group-hover:scale-[.7]",
                {
                  "text-background scale-[.8]": isMenuOpen,
                },
              )}
            />
          ) : (
            <LiaGripLinesSolid
              className={cn(
                "text-foreground sm:group-hover:text-background size-6 transition-all duration-500 sm:group-hover:scale-[.7]",
                {
                  "text-background scale-[.7]": isMenuOpen,
                },
              )}
            />
          )}
          <span className="sr-only">
            {isMenuOpen ? "Menu Opened" : "Menu Closed"}
          </span>
          <span
            className={cn(
              "bg-foreground absolute top-1/2 left-1/2 -z-[1] size-full -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full transition-all duration-500 sm:group-hover:scale-100",
              {
                "scale-100": isMenuOpen,
              },
            )}
          />
        </MotionTrigger>
      </SheetTrigger>
      <SheetContent side="right">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
        </VisuallyHidden>

        <div className="flex h-full flex-col justify-between">
          <SheetClose
            className="w-max"
            asChild
            title={`Logo - ${siteConfig.author}`}
          >
            <Logo />
          </SheetClose>

          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path));

              return (
                <SheetClose asChild key={link.path}>
                  <Link
                    href={link.path}
                    className="group flex items-center justify-between gap-6 py-2.5 text-xl font-normal sm:py-3 sm:text-2xl md:cursor-none"
                  >
                    <span
                      role="button"
                      data-cursor="pointer"
                      className="capitalize"
                    >
                      {link.label}
                    </span>
                    <span
                      className={cn(
                        "border-primary size-2.5 scale-0 rounded-full border transition-all duration-300 group-hover:scale-100",
                        {
                          "bg-primary scale-100": isActive,
                        },
                      )}
                    />
                  </Link>
                </SheetClose>
              );
            })}
          </div>

          <div className="flex h-12 flex-col justify-end gap-2 sm:gap-1">
            <div className="flex lg:hidden">
              <Region />
            </div>
            {process.env.NODE_ENV === "development" && (
              <SheetClose asChild>
                <Link
                  href="/studio"
                  target="_blank"
                  className={buttonVariants({
                    className: "mt-2 w-full md:cursor-none",
                    size: "lg",
                  })}
                >
                  Open Sanity CMS
                </Link>
              </SheetClose>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
