"use client"

import { cn } from "@/lib/utils"

interface HeadshotProps {
  filename?: string
  member: string
  className?: string
}

export function Headshot({ filename, member, className }: HeadshotProps) {
  const imageSrc = filename ? `/headshots/${filename}` : "/headshots/member-headshot-placeholder.png"

  return (
    <img
      src={imageSrc || "/placeholder.svg"}
      alt={`${member} photo`}
      className={cn("h-16 w-16 rounded-full object-cover border border-white/10", className)}
    />
  )
}
