import { Metadata } from "next";
import { Fragment } from "react";

import { PROJECT_QUERY } from "@/lib/groq";
import { sanityFetch } from "@/lib/live";
import ProjectsHeroSection from "./_components/hero";
import { Wrapper } from "@/components/shared/wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/app/_components/project-card";
import ProjectList from "@/app/_components/project-list";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const result = await sanityFetch({
    query: PROJECT_QUERY(),
  });

  const projects: ProjectPropType[] = result.data;

  return (
    <Fragment>
      <Wrapper grid className="border-b">
        <ProjectsHeroSection />
      </Wrapper>

      <Wrapper className="border-b py-10 lg:py-20">
        <Tabs defaultValue="list" className="hidden md:block">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          <div className="pt-10">
            <TabsContent value="grid">
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project._id} {...project} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="list">
              <div className="flex flex-col">
                {projects.map((project) => (
                  <ProjectList key={project._id} {...project} />
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
        <div className="grid w-full grid-cols-1 gap-6 md:hidden md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      </Wrapper>
    </Fragment>
  );
}
