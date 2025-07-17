import { siteConfig } from "@/config/site.config";
import Hero from "../../_components/hero";

const AboutBanner = async () => {
  return (
    <Hero
      src="/images/about-hero.jpg"
      message="Technical Journey"
      subtitle={siteConfig.about.title}
      title="Designing Seamless & Scalable Interfaces for Web2 & Web3."
      description={siteConfig.about.description}
    />
  );
};

export default AboutBanner;
