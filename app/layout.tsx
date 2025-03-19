import type { Metadata } from "next";

import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";
import { fontSans, fontSerif } from "@/fonts";
import { SanityLive } from "@/lib/live";

export const metadata: Metadata = {
  title: {
    template: `%s • ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
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
          "flex min-h-screen flex-col bg-background antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <SanityLive />
        {children}
      </body>
    </html>
  );
}
