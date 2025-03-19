"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LiaGripLinesSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";

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
import { cn } from "@/lib/utils";
import Region from "./region";
import { navLinks } from "@/lib/constants";
import { Button } from "../ui/button";

const NavMenu = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <SheetTrigger>
        <div
          role="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group relative ml-auto flex size-11 cursor-pointer items-center justify-center sm:size-12"
        >
          {isMenuOpen ? (
            <IoClose
              className={cn(
                "size-6 text-foreground transition-all duration-500 sm:group-hover:scale-[.7] sm:group-hover:text-background",
                {
                  "scale-[.8] text-background": isMenuOpen,
                },
              )}
            />
          ) : (
            <LiaGripLinesSolid
              className={cn(
                "size-6 text-foreground transition-all duration-500 sm:group-hover:scale-[.7] sm:group-hover:text-background",
                {
                  "scale-[.7] text-background": isMenuOpen,
                },
              )}
            />
          )}
          <span
            className={cn(
              "absolute left-1/2 top-1/2 -z-[1] size-full -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-foreground transition-all duration-500 sm:group-hover:scale-100",
              {
                "scale-100": isMenuOpen,
              },
            )}
          />
        </div>
      </SheetTrigger>
      <SheetContent side="right">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
        </VisuallyHidden>

        <div className="flex h-full flex-col justify-between">
          <SheetClose className="w-max" asChild>
            <Image
              src="/images/logo-black-tb.png"
              alt="Abdullahi Salihu"
              width={48}
              height={48}
              priority
              className="-ml-2 size-12"
              quality={100}
            />
          </SheetClose>

          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = link.path === pathname;

              return (
                <Link
                  key={link.path}
                  data-cursor="pointer"
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between gap-6 py-3 text-2xl font-normal"
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
                      "size-2.5 scale-0 rounded-full border border-primary transition-all duration-500 group-hover:scale-100",
                      {
                        "scale-100 bg-primary": isActive,
                      },
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex h-12 flex-col justify-end gap-1">
            <div className="flex lg:hidden">
              <Region />
            </div>
            <p className="text-sm font-medium tracking-wide">
              © 2025 <b>Abdullahi Salihu</b>. All rights reserved.
            </p>
            {process.env.NODE_ENV === "development" && (
              <Link href="/studio" target="_blank" className="mt-2">
                <Button size="lg" className="w-full">
                  Open Sanity Studio
                </Button>
              </Link>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
