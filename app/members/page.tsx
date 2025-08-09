import members from "@/data/members.json"
import type { Member } from "@/lib/types"
import MemberCard from "@/components/member-card"

export default function Page() {
  const all = members as Member[]
  const exec = all.filter((m) => m.roles.some((r) => r.startsWith("Executive Board")))
  const leads = all.filter((m) => m.roles.some((r) => r.startsWith("Project Lead")))
  const regular = all.filter((m) => !exec.includes(m) && !leads.includes(m))
  const alumni = all.filter((m) => m.alumni)

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-white">Members</h1>
        <p className="mt-2 text-zinc-300">Leadership, project leads, members and alumni.</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold text-white">Executive Board</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exec.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Project Leads</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leads.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">Members</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regular.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      {alumni.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-white">Alumni</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {alumni.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
