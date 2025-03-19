"use client";

import NextTopLoader from "nextjs-toploader";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { Fragment, ReactNode, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ConstructionModal } from "@/components/shared/construction-modal";

export default function Template({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const faviconId = "dynamic-favicon";
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    const updateFavicon = () => {
      const isDarkMode = darkModeMediaQuery.matches;
      const faviconPath = isDarkMode
        ? "/images/logo-white-tb.png"
        : "/images/logo-black-tb.png";

      // Check if the favicon already exists
      let favicon = document.getElementById(
        faviconId,
      ) as HTMLLinkElement | null;

      if (!favicon) {
        // Create a new favicon link element if it doesn't exist
        favicon = document.createElement("link");
        favicon.id = faviconId;
        favicon.rel = "icon";
        document.head.appendChild(favicon);
      }

      // Update the favicon's href attribute
      favicon.href = faviconPath;

      // Save the current favicon path to localStorage
      localStorage.setItem("faviconPath", faviconPath);
    };

    // Update favicon on initial load
    updateFavicon();

    // Listen for changes in the color scheme
    darkModeMediaQuery.addEventListener("change", updateFavicon);

    // Cleanup event listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener("change", updateFavicon);
    };
  }, [pathname]);

  useEffect(() => {
    // Retrieve the saved favicon path from localStorage
    const savedFaviconPath = localStorage.getItem("faviconPath");

    if (savedFaviconPath) {
      // Check if the favicon already exists
      let favicon = document.getElementById(
        "dynamic-favicon",
      ) as HTMLLinkElement | null;

      if (!favicon) {
        // Create a new favicon link element if it doesn't exist
        favicon = document.createElement("link");
        favicon.id = "dynamic-favicon";
        favicon.rel = "icon";
        document.head.appendChild(favicon);
      }

      // Update the favicon's href attribute
      favicon.href = savedFaviconPath;
    }
  }, []);

  return (
    <Fragment>
      <SpeedInsights />
      <Analytics />
      <ConstructionModal />
      <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
      <Fragment>{children}</Fragment>
    </Fragment>
  );
}
