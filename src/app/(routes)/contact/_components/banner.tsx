import { siteConfig } from "@/config/site.config";
import Hero from "../../_components/hero";

const ContactBanner = () => {
  return (
    <Hero
      src="/images/contact-hero.jpg"
      message="Pitch an Idea"
      subtitle={siteConfig.contact.title}
      title="Let's Make Your Concept a Reality."
      description={siteConfig.contact.description}
    />
  );
};

export default ContactBanner;
