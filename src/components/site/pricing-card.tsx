import type { ReactNode } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CALENDLY_URL } from "@/components/site/nav-links"

interface PricingCardProps {
  icon: ReactNode
  name: string
  description: string
  amount: string
  unit: string
  features: string[]
  featured?: boolean
  badge?: string
}

export function PricingCard({ icon, name, description, amount, unit, features, featured, badge }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-organic border bg-white p-8 transition-[transform,box-shadow] duration-[250ms] hover:-translate-y-1",
        featured
          ? "border-2 border-burgundy shadow-[0_14px_34px_rgba(123,0,44,0.12)]"
          : "border-hairline hover:shadow-[var(--shadow-lift)]",
      )}
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-burgundy px-4 py-1.5 text-[0.8rem] font-bold tracking-wide text-white">
          {badge}
        </span>
      )}
      <span className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-cream text-burgundy">
        {icon}
      </span>
      <h3 className="mb-1">{name}</h3>
      <p className="mb-[18px] text-[0.95rem] text-ink-muted">{description}</p>
      <div className="mb-5 flex items-baseline gap-1.5">
        <span className="font-heading text-[2.2rem] font-bold text-navy">{amount}</span>
        <span className="text-[0.95rem] text-ink-muted">{unit}</span>
      </div>
      <ul className="mb-6 grow space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[0.95rem]">
            <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-burgundy" />
            {f}
          </li>
        ))}
      </ul>
      <Button asChild variant={featured ? "primary" : "outline"} className="w-full">
        <a href={CALENDLY_URL} target="_blank" rel="noopener">Book This</a>
      </Button>
    </div>
  )
}
