"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BrandButtonProps = React.ComponentProps<typeof Button> & {
  intent?: "primary" | "secondary" | "github"
}

/**
 * BrandButton
 * Centralized place for advanced animated buttons so effects aren't duplicated.
 * - primary: animated red/orange gradient with shimmer and hue motion on hover
 * - secondary: glass outline with subtle glow
 * - github: dark gradient with accent glow
 */
const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(function BrandButton(
  { intent = "primary", className, ...props },
  ref,
) {
  const base =
    "relative group overflow-hidden rounded-md transition-transform duration-150 ease-out will-change-transform active:translate-y-px brand-animated"

  const primary =
    "text-white " +
    "bg-[linear-gradient(135deg,#DE3626_0%,#ff6b5a_50%,#ff927f_100%)] bg-[length:200%_200%] " +
    "shadow-[0_0_24px_rgba(222,54,38,0.35)] hover:shadow-[0_0_44px_rgba(222,54,38,0.6)] " +
    "hover:-translate-y-0.5 " +
    // inner shine
    "after:pointer-events-none after:absolute after:inset-0 after:opacity-0 " +
    "after:bg-[radial-gradient(120%_90%_at_0%_0%,rgba(255,255,255,0.28),transparent_40%)] " +
    "after:transition-opacity after:duration-300 group-hover:after:opacity-100 " +
    // gradient ring
    "before:pointer-events-none before:absolute before:-inset-px before:rounded-[9px] before:opacity-0 " +
    "before:bg-[conic-gradient(from_180deg_at_50%_50%,#DE3626_0deg,#ff6b5a_120deg,#ff927f_220deg,transparent_300deg)] " +
    "before:blur-md before:transition-opacity before:duration-300 group-hover:before:opacity-60"

  const secondary =
    "text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 " +
    "after:pointer-events-none after:absolute after:inset-0 after:opacity-0 " +
    "after:bg-[radial-gradient(100%_80%_at_0%_0%,rgba(255,255,255,0.15),transparent_40%)] " +
    "after:transition-opacity after:duration-300 group-hover:after:opacity-100 " +
    "before:pointer-events-none before:absolute before:-inset-px before:rounded-[9px] before:opacity-0 " +
    "before:bg-[conic-gradient(from_180deg_at_50%_50%,rgba(222,54,38,0.15)_0deg,rgba(255,107,90,0.15)_120deg,transparent_220deg)] " +
    "before:blur-md before:transition-opacity before:duration-300 group-hover:before:opacity-60"

  const github =
    "text-white " +
    "bg-[linear-gradient(135deg,#141924_0%,#0b0b0f_100%)] border border-white/10 " +
    "shadow-[0_0_22px_rgba(222,54,38,0.18)] hover:shadow-[0_0_42px_rgba(222,54,38,0.42)] hover:-translate-y-0.5 " +
    "after:pointer-events-none after:absolute after:inset-0 after:opacity-0 " +
    "after:bg-[radial-gradient(100%_80%_at_0%_0%,rgba(255,255,255,0.12),transparent_40%)] " +
    "after:transition-opacity after:duration-300 group-hover:after:opacity-100 " +
    "before:pointer-events-none before:absolute before:-inset-px before:rounded-[9px] before:opacity-0 " +
    "before:bg-[conic-gradient(from_180deg_at_50%_50%,rgba(222,54,38,0.25)_0deg,rgba(255,107,90,0.22)_120deg,transparent_220deg)] " +
    "before:blur-md before:transition-opacity before:duration-300 group-hover:before:opacity-60"

  const look = intent === "primary" ? primary : intent === "secondary" ? secondary : github

  return (
    <>
      <Button ref={ref} className={cn(base, look, className)} {...props} />
      <style jsx>{`
        .brand-animated:hover {
          animation: gradientShift 2.2s ease-in-out infinite;
        }
        .brand-animated:active {
          animation-duration: 1.2s;
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
})

export default BrandButton
