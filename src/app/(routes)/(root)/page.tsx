import Featured from "./_components/featured";
import SharedField from "../_components/shared-field";
import HomeBanner from "./_components/banner";
import { sanityFetch } from "@/sanity/lib/live";
import { projectQuery } from "@/lib/queries";

export default async function Home() {
  const result = await sanityFetch({
    query: projectQuery(),
  });

  const projects: ProjectProps[] = result.data;

  return (
    <div className="h-full">
      <HomeBanner />
      <div className="from-secondary/50 via-secondary/20 to-background bg-gradient-to-b">
        <Featured projects={projects} />
      </div>
      <SharedField
        title="Ongoing Initiatives"
        path="/about"
        subtitle="Details about myself"
        type="initiatives"
        limit={1}
      />
    </div>
  );
}
