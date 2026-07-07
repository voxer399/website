import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function PullQuote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-burgundy py-1.5 pl-7 font-heading text-[clamp(1.3rem,2.6vw,1.7rem)] italic leading-snug text-navy",
        className,
      )}
    >
      {children}
    </blockquote>
  )
}
