import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

type SectionHeaderProps = {
  title: string
  subtitle?: string
  className?: string
  actionHref?: string
  actionLabel?: string
  actionAriaLabel?: string
}

export default function SectionHeader({
  title,
  subtitle = "",
  className,
  actionHref,
  actionLabel,
  actionAriaLabel,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between gap-4", className)}>
      <div>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {subtitle ? <p className="mt-1 text-zinc-300">{subtitle}</p> : null}
      </div>
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          aria-label={actionAriaLabel || actionLabel}
          className="inline-flex items-center gap-1 text-sm text-[#ffb2ab] hover:text-white transition-colors"
        >
          {actionLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  )
}
