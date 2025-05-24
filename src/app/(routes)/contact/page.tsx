import { Metadata } from "next";

import ContactBanner from "./_components/banner";
import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Let's Talk",
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
