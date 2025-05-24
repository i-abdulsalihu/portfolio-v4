"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useZustandStore } from "@/lib/store";

interface LogoProviderProps {
  children: React.ReactNode;
}

const LogoProvider: React.FC<LogoProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const { theme, resolvedTheme } = useTheme();
  const setLogo = useZustandStore((state) => state.setLogo);

  React.useEffect(() => {
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

  React.useEffect(() => {
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

  React.useEffect(() => {
    const updateLogo = (currentTheme: string | undefined) => {
      const isDark =
        currentTheme === "dark" ||
        (currentTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      setLogo(
        isDark ? "/images/logo-white-tb.png" : "/images/logo-black-tb.png",
      );
    };

    updateLogo(theme); // Update immediately

    // Listen to system color scheme changes only if theme is 'system'
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    const handleSystemChange = () => {
      if (theme === "system") {
        updateLogo("system");
      }
    };

    if (theme === "system") {
      darkModeMediaQuery.addEventListener("change", handleSystemChange);
    }

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleSystemChange);
    };
  }, [theme, resolvedTheme, pathname, setLogo]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default LogoProvider;
