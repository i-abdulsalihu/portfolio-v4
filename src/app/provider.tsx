"use client";

import Lenis from "@studio-freight/lenis";
import type { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import NextJsToploader from "nextjs-toploader";
import { Fragment, useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Toaster } from "@/components/ui/sonner";
import Cursor from "@/components/shared/cursor";
import LogoProvider from "@/components/provider/logo.provider";
import ThemeProvider from "@/components/provider/theme.provider";

interface GlobalProviderProps {
  children?: ReactNode;
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lenis.current) lenis.current!.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SpeedInsights />
      <Analytics />
      <LogoProvider>
        <NextJsToploader
          color="var(--primary)"
          showSpinner={false}
          showForHashAnchor={false}
        />
        <Toaster richColors />
        <Cursor />
        <Fragment>{children}</Fragment>
      </LogoProvider>
    </ThemeProvider>
  );
};

export default GlobalProvider;
