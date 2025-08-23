import projects from "@/data/projects.json"
import type { Project } from "@/lib/types"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notFound } from "next/navigation"
import BrandButton from "@/components/brand-button"
import ProjectTimeline from "@/components/project-timeline"
import { Github, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const all = projects as Project[]
  const project = all.find((p) => p.id === params.id)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  const project = (projects as Project[]).find((p) => p.id === params.id)
  if (!project) return notFound()

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p className="text-zinc-300 max-w-3xl">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          <Badge className="bg-[#DE3626] hover:bg-[#c82f21] text-white">{project.status}</Badge>
          <Badge variant="outline">{project.semester}</Badge>
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {project.thumbnail && (
            <img
              src={project.thumbnail || "/placeholder.svg"}
              alt={`${project.title} hero`}
              className="w-full h-64 md:h-80 object-cover rounded-lg border border-white/10"
            />
          )}

          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-zinc-200">
              <p>{project.description}</p>
              <div>
                <span className="font-medium text-white">Tech stack:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {project.media && project.media.length > 0 && (
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {project.media.map((m, i) =>
                  m.type === "image" ? (
                    <img
                      key={i}
                      src={m.url || "/placeholder.svg"}
                      alt={m.alt || "Project media"}
                      className="w-full h-48 object-cover rounded-md border border-white/10"
                    />
                  ) : (
                    <video key={i} src={m.url} controls className="w-full rounded-md border border-white/10" />
                  ),
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <aside className="space-y-6">
          {(project.links?.github || project.links?.demo) && (
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle>Resources</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {project.links?.github ? (
                  <BrandButton asChild size="lg" intent="github" className="justify-start gap-2">
                    <Link href={project.links.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                      <span>View on GitHub</span>
                    </Link>
                  </BrandButton>
                ) : null}
                {project.links?.demo ? (
                  <BrandButton asChild size="lg" intent="secondary" className="justify-start gap-2">
                    <Link href={project.links.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo / Docs</span>
                    </Link>
                  </BrandButton>
                ) : null}
              </CardContent>
            </Card>
          )}

          <ProjectTimeline timeline={project.timeline} status={project.status} />
        </aside>
      </section>
    </div>
  )
}
