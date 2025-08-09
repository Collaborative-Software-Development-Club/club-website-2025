import type { LucideIcon } from "lucide-react"

export type TimelineStep = {
  title: string
  desc: string
  icon?: LucideIcon
}

export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="mt-8 relative">
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#DE3626]/60 via-white/10 to-transparent" />
      <ol className="space-y-8">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <li key={step.title} className="relative pl-12 md:pl-16">
              <span className="absolute left-0 md:left-2 top-1.5 h-8 w-8 rounded-full bg-[#DE3626]/20 border border-white/15 flex items-center justify-center">
                <span className="absolute h-10 w-10 rounded-full bg-[#DE3626]/20 blur-md" aria-hidden />
                {Icon ? <Icon className="h-4 w-4 text-[#DE3626] relative" /> : null}
              </span>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold text-white">{`${i + 1}. ${step.title}`}</h3>
                <p className="mt-1 text-sm text-zinc-300">{step.desc}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
