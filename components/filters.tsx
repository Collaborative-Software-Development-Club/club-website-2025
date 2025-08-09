"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Project } from "@/lib/types"

export type FilterOptions = {
  categories: string[]
  statuses: string[]
  semesters: string[]
}

export default function Filters({
  allProjects,
  options,
  onFiltered,
}: {
  allProjects: Project[]
  options: FilterOptions
  onFiltered: (projects: Project[]) => void
}) {
  const [q, setQ] = useState("")
  const [category, setCategory] = useState<string>("all")
  const [status, setStatus] = useState<string>("all")
  const [semester, setSemester] = useState<string>("all")

  const filtered = useMemo(() => {
    const text = q.toLowerCase().trim()
    return allProjects.filter((p) => {
      const matchesText =
        !text ||
        p.title.toLowerCase().includes(text) ||
        p.description.toLowerCase().includes(text) ||
        p.category.toLowerCase().includes(text) ||
        p.techStack.join(" ").toLowerCase().includes(text)

      const matchesCategory = category === "all" || p.category === category
      const matchesStatus = status === "all" || p.status === status
      const matchesSemester = semester === "all" || p.semester === semester

      return matchesText && matchesCategory && matchesStatus && matchesSemester
    })
  }, [allProjects, q, category, status, semester])

  // push filtered up
  onFiltered(filtered)

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="md:col-span-2">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          placeholder="Search by title, tech, or description"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
      <div>
        <Label className="sr-only">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {options.categories.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="sr-only">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {options.statuses.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="sr-only">Semester</Label>
          <Select value={semester} onValueChange={setSemester}>
            <SelectTrigger>
              <SelectValue placeholder="Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Semesters</SelectItem>
              {options.semesters.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
