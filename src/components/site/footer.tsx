import type { ReactNode } from "react"
import { Mail, Phone, CalendarDays } from "lucide-react"
import { asset } from "@/lib/asset"
import { CALENDLY_URL } from "@/components/site/nav-links"

export function Footer() {
  return (
    <footer className="bg-navy-deep pb-7 pt-12 text-on-navy">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-8 border-b border-white/15 pb-7">
          <div>
            <img src={asset("assets/images/logo-white.png")} alt="Andrea Forán, Psychologist – logo" className="mb-3 h-11 w-auto" />
            <p className="max-w-[320px] text-[0.95rem] text-on-navy-muted">
              Online consultations in English or Hungarian, by appointment.
            </p>
          </div>

          <FooterContact icon={<Mail className="h-[22px] w-[22px]" />} label="Email">
            <a href="mailto:andrea.foran@gmail.com" className="text-on-navy-accent underline">andrea.foran@gmail.com</a>
          </FooterContact>

          <FooterContact icon={<Phone className="h-[22px] w-[22px]" />} label="Phone">
            <a href="tel:+36303491670" className="text-on-navy-accent underline">+36 30 349 1670</a>
          </FooterContact>

          <FooterContact icon={<CalendarDays className="h-[22px] w-[22px]" />} label="Book Online">
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="text-on-navy-accent underline">Calendly</a>
          </FooterContact>
        </div>
        <p className="text-center text-[0.95rem] text-on-navy-muted">foranandrea.hu © 2026 · All rights reserved</p>
      </div>
    </footer>
  )
}

function FooterContact({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-burgundy text-white">
        {icon}
      </span>
      <div>
        <p className="m-0">{label}</p>
        {children}
      </div>
    </div>
  )
}
