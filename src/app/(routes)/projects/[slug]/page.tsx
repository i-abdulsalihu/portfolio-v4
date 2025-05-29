import { Metadata } from "next";
import { redirect } from "next/navigation";

import ProjectDetailsBanner from "./_components/banner";
import Descriptions from "./_components/descriptions";
import Snapshots from "./_components/snapshots";
import { sanityFetch } from "@/sanity/lib/live";
import { projectQuery } from "@/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> => {
  const slug = (await params).slug;
  if (!slug) redirect("/projects");

  const result = await sanityFetch({
    query: projectQuery(slug),
    params: await params,
  });

  const project: ProjectProps = result.data[0];
  if (!project) redirect("/projects");

  const { src, title, descriptions } = project;

  const srcUrl = src ? urlFor(src)?.url() : null;

  return {
    title: title as string,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
      title: title,
      description: descriptions[0],
      images: [
        {
          url: srcUrl as string,
        },
      ],
    },
  };
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const slug = (await params).slug;
  if (!slug) redirect("/projects");

  const result = await sanityFetch({
    query: projectQuery(slug),
    params: await params,
  });

  const project: ProjectProps = result.data[0];
  if (!project) redirect("/projects");

  return (
    <div className="h-full">
      <ProjectDetailsBanner project={project} />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <Descriptions descriptions={project.descriptions} />
      </div>
      {project.snapshots && project.snapshots.length > 0 && (
        <Snapshots snapshots={project.snapshots} />
      )}
    </div>
  );
}
