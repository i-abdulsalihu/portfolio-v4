import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import GlobalProvider from "./provider";
import { fontSans, fontSerif } from "@/fonts";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: {
    template: `%s • ${siteConfig.default.title}`,
    default: siteConfig.default.title,
  },
  description: siteConfig.default.description,
  openGraph: {
    title: siteConfig.default.title,
    description: siteConfig.default.description,
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.default.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.default.title,
    description: siteConfig.default.description,
    creator: siteConfig.handle,
    site: siteConfig.handle,
  },
  icons: {
    icon: {
      url: siteConfig.favicon,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning suppressHydrationWarning>
      <body
        className={cn(
          "bg-background flex min-h-screen flex-col antialiased",
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <SanityLive />
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
