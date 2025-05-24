import { FC } from "react";
import { Wrapper } from "@/components/shared/wrapper";

import Subheading from "../../_components/subheading";
import ProjectCard from "../../_components/project-card";
import MotionTrigger from "@/components/shared/trigger";

interface FeaturedProps {
  projects: ProjectProps[];
}

const Featured: FC<FeaturedProps> = ({ projects }) => {
  return (
    <Wrapper grid className="border-b py-12 md:py-16 lg:py-20">
      <Subheading
        title="Featured Projects"
        path="/projects"
        subtitle="Check out the rest"
      />

      {projects
        .filter((pj) => pj.featured)
        .slice(0, 3)
        .map((project, index) => (
          <MotionTrigger custom={index} key={index}>
            <ProjectCard project={project} />
          </MotionTrigger>
        ))}
    </Wrapper>
  );
};

export default Featured;
