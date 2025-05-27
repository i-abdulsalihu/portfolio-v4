import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import GlobalProvider from "./provider";
import { fontSans, fontSerif } from "@/fonts";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: {
    template: `%s • ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogDescription,
      },
    ],
  },
  twitter: {
    card: (siteConfig.tCard ?? "summary_large_image") as
      | "summary_large_image"
      | "summary"
      | "player"
      | "app",
    title: siteConfig.tTitle,
    description: siteConfig.tDescription,
    images: [siteConfig.twitterImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
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
