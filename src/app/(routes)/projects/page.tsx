import { Metadata } from "next";
import ProjectsBanner from "./_components/banner";
import Display from "./_components/display";
import { sanityFetch } from "@/sanity/lib/live";
import { projectQuery } from "@/lib/queries";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: siteConfig.projects.title,
  description: siteConfig.projects.description,
  openGraph: {
    title: siteConfig.projects.title,
    description: siteConfig.projects.description,
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.projects.title,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.projects.title,
    description: siteConfig.projects.description,
    creator: siteConfig.handle,
    site: siteConfig.handle,
  },
};

export default async function ProjectsPage() {
  const result = await sanityFetch({
    query: projectQuery(),
  });

  const projects: ProjectProps[] = result.data;

  return (
    <div className="h-full">
      <ProjectsBanner />
      {projects && projects.length > 0 && (
        <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
          <Display projects={projects} />
        </div>
      )}
    </div>
  );
}
