import projectsData from "@/data/projects.json"
import type { Project } from "@/lib/types"
import ProjectCard from "@/components/project-card"
import SectionHeader from "@/components/section-header"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore active and past projects from our teams.",
};

export default function Page() {
  const all = projectsData as Project[]

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeader title="Projects" subtitle="Explore active and past projects from our teams." />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {all.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
