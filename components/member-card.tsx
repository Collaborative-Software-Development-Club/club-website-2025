"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Member } from "@/lib/types"
import { Headshot } from "./headshot"
import MemberDialog from "./member-dialog"

const MAX_BLURB_LENGTH = 120

export default function MemberCard({ member }: { member: Member }) {
  const [dialogOpen, setDialogOpen] = useState(false)

  const shouldTruncate = member.blurb && member.blurb.length > MAX_BLURB_LENGTH
  const truncatedBlurb = shouldTruncate ? member.blurb!.substring(0, MAX_BLURB_LENGTH) + "..." : member.blurb

  return (
    <>
      <Card
        className="h-full border-white/10 bg-white/5 hover:shadow-[0_0_20px_rgba(222,54,38,0.2)] transition-shadow cursor-pointer"
        onClick={() => setDialogOpen(true)}
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <Headshot filename={member.photoUrl} member={member.name} />
          <div className="flex-1">
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
          {truncatedBlurb && (
            <div className="mb-3">
              <p className="text-sm text-zinc-300">{truncatedBlurb}</p>
              {shouldTruncate && (
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 h-auto text-[#DE3626] hover:text-[#DE3626]/80 text-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    setDialogOpen(true)
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

      <MemberDialog member={member} open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  )
}
