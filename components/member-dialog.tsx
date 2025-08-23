"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Member } from "@/lib/types"
import Headshot from "./headshot"

interface MemberDialogProps {
  member: Member | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function MemberDialog({ member, open, onOpenChange }: MemberDialogProps) {
  if (!member) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-white/10 bg-zinc-900/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{member.name}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <Headshot
              src={member.photoUrl}
              alt={member.name}
              className="w-full aspect-square object-cover rounded-lg border border-white/10"
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">Roles</h3>
              <div className="flex flex-wrap gap-2">
                {member.roles.map((role) => (
                  <Badge key={role} variant="secondary" className="text-xs">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            {member.blurb && (
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">About</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">{member.blurb}</p>
              </div>
            )}

            {member.affiliations && member.affiliations.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Affiliations</h3>
                <div className="flex flex-wrap gap-2">
                  {member.affiliations.map((affiliation) => (
                    <Badge key={affiliation} variant="outline" className="text-xs">
                      {affiliation}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {member.links && (
              <div>
                <h3 className="text-sm font-medium text-zinc-400 mb-2">Links</h3>
                <div className="flex gap-3">
                  {member.links.github && (
                    <Link
                      href={member.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">GitHub</span>
                    </Link>
                  )}
                  {member.links.linkedin && (
                    <Link
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="text-sm">LinkedIn</span>
                    </Link>
                  )}
                  {member.links.website && (
                    <Link
                      href={member.links.website}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Website</span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
