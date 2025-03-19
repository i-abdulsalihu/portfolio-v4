import { Metadata } from "next";
import { Fragment } from "react";

import { Wrapper } from "@/components/shared/wrapper";
import ContactHeroSection from "./_components/hero";
import FormSection from "./_components/form-section";

export const metadata: Metadata = {
  title: "Let's Talk",
};

export default function ContactPage() {
  return (
    <Fragment>
      <Wrapper grid className="border-b">
        <ContactHeroSection />
      </Wrapper>

      <Wrapper grid className="border-b py-10 lg:!py-20">
        <FormSection />
      </Wrapper>
    </Fragment>
  );
}
