import { siteConfig } from "@/config/site.config";
import Hero from "../../_components/hero";

const ProjectsBanner = () => {
  return (
    <Hero
      src="/images/project-hero.jpg"
      message="Case Studies"
      subtitle={siteConfig.projects.title}
      title="Where code and design collide — A showcase of things I've worked on."
      description={siteConfig.projects.description}
    />
  );
};

export default ProjectsBanner;
