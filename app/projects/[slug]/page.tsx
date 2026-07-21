import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "@/lib/projects-data";
import ProjectHero from "@/components/ProjectHero";
import ProjectBody from "@/components/ProjectBody";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  // In Next.js 15, params is a Promise that must be awaited
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full">
      <ProjectHero project={project} />
      <ProjectBody project={project} />
    </article>
  );
}
