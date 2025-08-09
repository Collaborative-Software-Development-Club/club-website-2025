"use client"

import { Calendar, Flag, Hourglass } from "lucide-react"
import { cn } from "@/lib/utils"
import { formatMonthYear } from "@/lib/date"

export function parseTimeline(timeline?: string): { start?: string; end?: string } {
  if (!timeline) return {}
  const parts = timeline.split("→").map((s) => s.trim())
  if (parts.length === 1) {
    return { start: parts[0] }
  }
  return { start: parts[0], end: parts[1] }
}

export default function ProjectTimeline({
  timeline,
  status,
  className,
}: {
  timeline?: string
  status?: string
  className?: string
}) {
  const { start, end } = parseTimeline(timeline)
  const startLabel = start ? formatMonthYear(start) : undefined
  const endLabel = end ? formatMonthYear(end) : undefined
  const ongoing = !!startLabel && !endLabel

  return (
    <div className={cn("relative rounded-lg border border-white/10 bg-white/5 p-4 overflow-hidden", className)}>
      {/* flowing bar animation (contained here, not reused elsewhere) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#DE3626]/70 via-white/10 to-transparent timeline-bar" />
      </div>

      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-white">Timeline</h3>
        {status ? (
          <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs">
            {status}
          </span>
        ) : null}
      </div>

      <ol className="mt-2 space-y-6">
        {startLabel ? (
          <li className="relative pl-16">
            <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center">
              <span className="absolute h-10 w-10 rounded-full node-glow" aria-hidden />
              <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DE3626]/25 border border-white/15">
                <Calendar className="h-3.5 w-3.5 text-[#DE3626]" />
              </span>
            </span>
            <div className="rounded-md border border-white/10 bg-white/5 p-3">
              <div className="text-xs text-zinc-400">Start</div>
              <div className="text-sm text-white">{startLabel}</div>
            </div>
          </li>
        ) : null}

        <li className="relative pl-16">
          <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center">
            <span className="absolute h-10 w-10 rounded-full node-glow delay-300" aria-hidden />
            <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DE3626]/25 border border-white/15">
              {endLabel ? (
                <Flag className="h-3.5 w-3.5 text-[#DE3626]" />
              ) : (
                <Hourglass className="h-3.5 w-3.5 text-[#DE3626]" />
              )}
            </span>
          </span>
          <div className="rounded-md border border-white/10 bg-white/5 p-3">
            <div className="text-xs text-zinc-400">{endLabel ? "End" : "Status"}</div>
            <div className="text-sm text-white">{endLabel ? endLabel : ongoing ? "Ongoing" : "—"}</div>
          </div>
        </li>
      </ol>

      <style jsx>{`
        .timeline-bar {
          background: linear-gradient(to bottom, rgba(222, 54, 38, 0.7), rgba(255, 255, 255, 0.08), transparent);
          background-size: 100% 200%;
          animation: barFlow 3.5s ease-in-out infinite;
        }
        @keyframes barFlow {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 0% 80%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .node-glow {
          background: radial-gradient(50% 50% at 50% 50%, rgba(222, 54, 38, 0.35), transparent 70%);
          filter: blur(6px);
          animation: nodePulse 2.8s ease-in-out infinite;
        }
        .node-glow.delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes nodePulse {
          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
