import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/use-reveal"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
}

const delayClass = {
  0: "",
  1: "delay-100",
  2: "delay-200",
  3: "delay-300",
} as const

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, isVisible, ready } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        ready && "transition-[opacity,transform] duration-700 ease-out",
        ready && delayClass[delay],
        ready && (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"),
        className,
      )}
    >
      {children}
    </div>
  )
}
