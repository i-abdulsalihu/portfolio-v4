import { PROJECT_QUERY } from "@/lib/groq";
import { sanityFetch } from "@/lib/live";
import ProjectCard from "@/app/_components/project-card";
import { Fragment } from "react";
import SectionHeading from "@/app/_components/section-heading";

const Featured = async () => {
  const result = await sanityFetch({
    query: PROJECT_QUERY(),
  });

  const projects: ProjectPropType[] = result.data;

  if (!projects.length) return null;

  return (
    <Fragment>
      <SectionHeading title="Featured Projects" subtitle="All Projects" path="/projects" />

      {projects
        .filter((pg) => pg.featured === true)
        .slice(0, 3)
        .map((project, _index: number) => (
          <ProjectCard key={_index} {...project} />
        ))}
    </Fragment>
  );
};

export default Featured;
