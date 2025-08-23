"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Headshot } from "./headshot"
import Link from "next/link"
import { Github, Linkedin, ExternalLink } from "lucide-react"
import type { Member } from "@/lib/types"

interface MemberDialogProps {
  member: Member
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function MemberDialog({ member, open, onOpenChange }: MemberDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-white/10 bg-zinc-900/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-white sr-only">{member.name}</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Large photo */}
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="relative">
              <Headshot filename={member.photoUrl} member={member.name} className="w-32 h-32 sm:w-40 sm:h-40" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#DE3626]/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{member.name}</h2>
              <div className="flex flex-wrap gap-2">
                {member.roles.map((role) => (
                  <Badge key={role} variant="secondary" className="bg-[#DE3626]/10 text-[#DE3626] border-[#DE3626]/20">
                    {role}
                  </Badge>
                ))}
              </div>
            </div>

            {member.blurb && (
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-2">About</h3>
                <p className="text-zinc-300 leading-relaxed">{member.blurb}</p>
              </div>
            )}

            {member.affiliations && member.affiliations.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-2">Affiliations</h3>
                <div className="flex flex-wrap gap-2">
                  {member.affiliations.map((affiliation) => (
                    <Badge key={affiliation} variant="outline" className="border-zinc-600 text-zinc-300">
                      {affiliation}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-4 pt-2">
              {member.links?.github && (
                <Link
                  href={member.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#DE3626] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </Link>
              )}
              {member.links?.linkedin && (
                <Link
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#DE3626] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </Link>
              )}
              {member.links?.website && (
                <Link
                  href={member.links.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#DE3626] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">Website</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
