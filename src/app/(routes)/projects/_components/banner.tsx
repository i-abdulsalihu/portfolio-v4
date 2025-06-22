import { siteConfig } from "@/config/site.config";
import Hero from "../../_components/hero";

const ProjectsBanner = () => {
  return (
    <Hero
      src="/images/project-hero.jpg"
      subtitle={siteConfig.projects.title}
      title="Where code and design collide — A showcase of my work."
      description={siteConfig.projects.description}
    />
  );
};

export default ProjectsBanner;
