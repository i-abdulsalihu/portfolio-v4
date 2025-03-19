"use server";

import { Fragment } from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { urlFor } from "@/lib/utils";
import { sanityFetch } from "@/lib/live";
import { PROJECT_QUERY } from "@/lib/groq";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/shared/wrapper";
import ProjectDetailHeroSection from "./_components/hero";
import Img from "@/components/shared/img";
import SnapshotDrawer from "@/app/_components/snapshot-drawer";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: ProjectDetailProps): Promise<Metadata> => {
  const slug = (await params).slug;

  const result = await sanityFetch({
    query: PROJECT_QUERY(slug),
    params: await params,
  });

  const project: ProjectPropType = result.data[0];

  const { banner, title, descriptions } = project;

  const bannerUrl = banner ? urlFor(banner)?.url() : null;

  return {
    title: title as string,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
      title: title,
      description: descriptions,
      images: [
        {
          url: bannerUrl as string,
        },
      ],
    },
  };
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailProps) {
  const slug = (await params).slug;

  if (!slug) redirect("/projects");

  const result = await sanityFetch({
    query: PROJECT_QUERY(slug),
    params: await params,
  });

  const project: ProjectPropType = result.data[0];

  if (!project) redirect("/projects");

  return (
    <Fragment>
      <Wrapper grid className="border-b">
        <ProjectDetailHeroSection {...project} />
      </Wrapper>

      <Wrapper className="border-b py-10 lg:py-20">
        <pre className="whitespace-pre-wrap font-sans text-base leading-7 sm:text-lg sm:leading-8">
          {project.descriptions}
        </pre>
      </Wrapper>

      {project.snapshots && (
        <Wrapper className="border-b py-10 lg:py-20">
          <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3">
            {project.snapshots.map((snapshot) => {
              const shot = snapshot ? urlFor(snapshot)?.url() : null;

              return (
                <SnapshotDrawer
                  snapshot={snapshot}
                  project={project}
                  key={snapshot._key}
                  data-cursor="pointer"
                >
                  <div
                    data-cursor="pointer"
                    className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl border md:mb-6"
                  >
                    <Img
                      src={shot ?? "/svg/placeholder.svg"}
                      alt={snapshot.alt}
                      width={1200}
                      height={1200}
                    />
                  </div>
                </SnapshotDrawer>
              );
            })}
          </div>
        </Wrapper>
      )}

      <Wrapper className="flex items-center justify-between border-b py-10 lg:py-20">
        <Button
          variant={"outline"}
          size={"lg"}
          className="flex items-center justify-start"
        >
          Previous Project
        </Button>
        <Button
          variant={"outline"}
          size={"lg"}
          className="flex items-center justify-end"
        >
          Next Project
        </Button>
      </Wrapper>
    </Fragment>
  );
}
