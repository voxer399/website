import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Card({ children, className, id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-organic border border-hairline bg-surface p-7 transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      {children}
    </div>
  )
}
