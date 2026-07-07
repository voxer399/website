import type { ReactNode } from "react"
import { ShieldCheck, Clock, Globe2, Lock } from "lucide-react"
import { Reveal } from "@/components/site/reveal"

const ITEMS: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <ShieldCheck className="h-[22px] w-[22px]" />, title: "Licensed Psychologist", desc: "Clinical & health psychology" },
  { icon: <Clock className="h-[22px] w-[22px]" />, title: "25+ Years Experience", desc: "Corporate & clinical background" },
  { icon: <Globe2 className="h-[22px] w-[22px]" />, title: "English & Hungarian", desc: "Sessions in your language" },
  { icon: <Lock className="h-[22px] w-[22px]" />, title: "100% Confidential", desc: "Full professional confidentiality" },
]

export function TrustStrip() {
  return (
    <section className="border-b border-hairline bg-surface py-9">
      <div className="mx-auto grid max-w-[1120px] grid-cols-2 gap-5 px-6 md:grid-cols-4">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i as 0 | 1 | 2 | 3} className="flex items-center gap-3.5">
            <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-cream text-burgundy">
              {item.icon}
            </span>
            <div>
              <strong className="block text-navy">{item.title}</strong>
              <span className="block text-sm text-ink-muted">{item.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
