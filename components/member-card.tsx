"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { useState } from "react"
import type { Member } from "@/lib/types"
import { Headshot } from "./headshot"

function truncateText(text: string, maxLength = 120): { truncated: string; needsTruncation: boolean } {
  if (text.length <= maxLength) {
    return { truncated: text, needsTruncation: false }
  }

  const truncated = text.slice(0, maxLength).trim()
  const lastSpaceIndex = truncated.lastIndexOf(" ")
  const finalText = lastSpaceIndex > 0 ? truncated.slice(0, lastSpaceIndex) : truncated

  return { truncated: finalText + "...", needsTruncation: true }
}

function MemberDialog({ member, children }: { member: Member; children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md bg-zinc-900 border-white/10">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <Headshot filename={member.photoUrl} member={member.name} size="lg" />
            <div>
              <DialogTitle className="text-xl">{member.name}</DialogTitle>
              <div className="mt-2 flex flex-wrap gap-1">
                {member.roles.map((role) => (
                  <Badge variant="secondary" key={role}>
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogHeader>

        {member.blurb && (
          <div className="mb-4">
            <p className="text-sm text-zinc-300 leading-relaxed">{member.blurb}</p>
          </div>
        )}

        {member.affiliations && member.affiliations.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-zinc-200 mb-2">Affiliations</h4>
            <div className="flex flex-wrap gap-1">
              {member.affiliations.map((affiliation) => (
                <Badge variant="outline" key={affiliation} className="text-xs">
                  {affiliation}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-3 pt-2">
          {member.links?.github && (
            <Link
              href={member.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#DE3626] hover:underline"
            >
              GitHub
            </Link>
          )}
          {member.links?.linkedin && (
            <Link
              href={member.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#DE3626] hover:underline"
            >
              LinkedIn
            </Link>
          )}
          {member.links?.website && (
            <Link
              href={member.links.website}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[#DE3626] hover:underline"
            >
              Website
            </Link>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function MemberCard({ member }: { member: Member }) {
  const [showFullText, setShowFullText] = useState(false)
  const blurbData = member.blurb ? truncateText(member.blurb) : null

  return (
    <MemberDialog member={member}>
      <Card className="h-full border-white/10 bg-white/5 hover:shadow-[0_0_20px_rgba(222,54,38,0.2)] transition-shadow cursor-pointer">
        <CardHeader className="flex flex-row items-center gap-4">
          <Headshot filename={member.photoUrl} member={member.name} />
          <div>
            <CardTitle className="text-base">{member.name}</CardTitle>
            <div className="mt-1 flex flex-wrap gap-1">
              {member.roles.map((role) => (
                <Badge variant="secondary" key={role}>
                  {role}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {blurbData && (
            <div className="mb-3">
              <p className="text-sm text-zinc-300">{showFullText ? member.blurb : blurbData.truncated}</p>
              {blurbData.needsTruncation && !showFullText && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-xs text-[#DE3626] hover:underline hover:bg-transparent mt-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowFullText(true)
                  }}
                >
                  Show more
                </Button>
              )}
            </div>
          )}
          <div className="flex gap-3">
            {member.links?.github && (
              <Link
                href={member.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#DE3626] hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </Link>
            )}
            {member.links?.linkedin && (
              <Link
                href={member.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#DE3626] hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                LinkedIn
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </MemberDialog>
  )
}
