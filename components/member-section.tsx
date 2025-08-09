import type { Member } from "@/lib/types"
import MemberCard from "@/components/member-card"

interface MemberSectionProps {
  title: string
  members: Member[]
}

export default function MemberSection({ title, members }: MemberSectionProps) {
  if (members.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  )
}