import type { ReactNode } from "react"
import { Mail, Phone, CalendarDays } from "lucide-react"
import { Layout } from "@/components/site/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/site/card"
import { CALENDLY_URL } from "@/components/site/nav-links"

export default function Contact() {
  return (
    <Layout current="contact">
      <section className="bg-cream pb-[50px] pt-15 text-center">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="mb-3.5 text-[0.95rem] font-bold uppercase tracking-wider text-burgundy">Get in Touch</p>
          <h1>Contact</h1>
          <p className="mx-auto max-w-[640px] text-[1.2rem] text-ink-muted">
            If you feel it's time for a change, or you'd like to talk honestly with someone about what feels
            difficult right now, reach out with confidence.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div>
            <ContactItem icon={<Mail className="h-[22px] w-[22px]" />} label="Email">
              <a href="mailto:andrea.foran@gmail.com" className="underline">andrea.foran@gmail.com</a>
              <br />
              <a href="mailto:info@foranandrea.hu" className="underline">info@foranandrea.hu</a>
            </ContactItem>
            <ContactItem icon={<Phone className="h-[22px] w-[22px]" />} label="Phone">
              <a href="tel:+36303491670" className="underline">+36 30 349 1670</a>
            </ContactItem>
            <ContactItem icon={<CalendarDays className="h-[22px] w-[22px]" />} label="Calendly">
              <a href={CALENDLY_URL} target="_blank" rel="noopener" className="underline">
                calendly.com/andrea-foran/30min
              </a>
            </ContactItem>
          </div>
          <Card>
            <h3>Online Consultation — Book in Advance</h3>
            <p>Flexible appointment times, available in both Hungarian and English.</p>
            <Button asChild variant="primary" className="w-full">
              <a href={CALENDLY_URL} target="_blank" rel="noopener">Book an Appointment (Calendly)</a>
            </Button>
          </Card>
        </div>
      </section>
    </Layout>
  )
}

function ContactItem({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-burgundy text-white">
        {icon}
      </span>
      <div className="text-[1.1rem]">
        <p className="m-0 font-bold text-navy">{label}</p>
        {children}
      </div>
    </div>
  )
}
