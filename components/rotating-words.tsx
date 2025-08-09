"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type RotatingWordsProps = {
  words: string[]
  intervalMs?: number
  className?: string
  "aria-label"?: string
}

/**
 * RotatingWords
 * - Cycles through provided words on an interval.
 * - Lightweight fade/slide-in animation per word.
 * - Respects prefers-reduced-motion (disables animation).
 */
export default function RotatingWords({ words, intervalMs = 1500, className, ...rest }: RotatingWordsProps) {
  const [index, setIndex] = useState(0)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [words.length, intervalMs])

  const word = words[index]

  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-[#DE3626] to-[#ff6b5a] bg-clip-text text-transparent",
        className,
      )}
      aria-live="polite"
      {...rest}
    >
      <span key={word} className={reducedMotionRef.current ? "" : "rw-fade-in"}>
        {word}
      </span>

      <style jsx>{`
        .rw-fade-in {
          display: inline-block;
          animation: rw-fade-in 420ms ease-out both;
        }
        @keyframes rw-fade-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  )
}
