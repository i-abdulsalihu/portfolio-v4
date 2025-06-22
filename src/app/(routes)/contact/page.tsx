import { Metadata } from "next";

import ContactBanner from "./_components/banner";
import ContactForm from "./_components/contact-form";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: siteConfig.contact.title,
  description: siteConfig.contact.description,
  openGraph: {
    title: siteConfig.contact.title,
    description: siteConfig.contact.description,
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.contact.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.contact.title,
    description: siteConfig.contact.description,
    creator: siteConfig.handle,
    site: siteConfig.handle,
  },
};

export default function ContactPage() {
  return (
    <div className="h-full">
      <ContactBanner />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <ContactForm />
      </div>
    </div>
  );
}
