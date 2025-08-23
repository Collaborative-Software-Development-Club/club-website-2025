"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/types"

export default function ProjectCard({
  project,
}: {
  project: Project
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full flex flex-col border-white/10 bg-white/5 hover:bg-white/7 hover:shadow-[0_0_24px_rgba(222,54,38,0.25)] transition-colors transition-shadow">
        <CardHeader>
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          {project.thumbnail && (
            <img
              src={project.thumbnail || "/placeholder.svg"}
              alt={`${project.title} thumbnail`}
              className="w-full h-40 object-cover rounded-md border border-white/10 mb-3"
            />
          )}
          <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="secondary">{project.category}</Badge>
            <Badge className="bg-[#DE3626] hover:bg-[#c82f21] text-white">{project.status}</Badge>
            <Badge variant="outline">{project.semester}</Badge>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Link
            href={`/projects/${project.id}`}
            className="text-sm font-medium text-[#ffb2ab] hover:text-white transition-colors"
          >
            View details
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
