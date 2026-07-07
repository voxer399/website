import { MessageCircle, CalendarClock, Star } from "lucide-react"
import { Layout } from "@/components/site/layout"
import { asset } from "@/lib/asset"
import { Button } from "@/components/ui/button"
import { WaveDivider } from "@/components/site/wave-divider"
import { Card } from "@/components/site/card"
import { PricingCard } from "@/components/site/pricing-card"
import { FaqSection } from "@/components/site/faq-section"
import { BlobImage } from "@/components/site/blob-image"
import { Reveal } from "@/components/site/reveal"
import { CALENDLY_URL } from "@/components/site/nav-links"

const FAQ_ITEMS = [
  { question: "Do you offer sessions in English?", answer: "Yes — every consultation is available in either English or Hungarian, whichever you're more comfortable in." },
  { question: "Are sessions online or in person?", answer: "Sessions take place online, which most clients find more comfortable, private, and easier to fit into daily life." },
  { question: "How long is the first session?", answer: "The first session runs 75–90 minutes, giving us enough time to get to know each other and understand what brought you here. Every session after that is 55 minutes." },
  { question: "What if I need to cancel or reschedule?", answer: "No problem, free of charge, up to 24 hours before your appointment. Cancelling within 24 hours adds 50% of the session fee to your next booking." },
  { question: "How do I know if the Self-Building Program is right for me?", answer: <>Book a first conversation and we'll figure it out together. See the <a href={asset("program.html")}>Self-Building Program page</a> for a full breakdown of who it's for.</> },
  { question: "Is what I share with you confidential?", answer: "Yes. Every conversation is fully confidential, in accordance with professional ethical standards." },
]

export default function Prices() {
  return (
    <Layout current="prices">
      <section className="bg-cream pb-[50px] pt-15 text-center">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="mb-3.5 text-[0.95rem] font-bold uppercase tracking-wider text-burgundy">Practical Information</p>
          <h1>Prices &amp; Important Information</h1>
        </div>
      </section>

      <WaveDivider fill="var(--color-surface)" />

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>Consultation Fees</h2>
            <p>All sessions are available in English or Hungarian.</p>
          </Reveal>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            <Reveal>
              <PricingCard
                icon={<MessageCircle className="h-[22px] w-[22px]" />}
                name="First Session"
                description="An extended first conversation to get to know each other and understand what brought you here."
                amount="25,000"
                unit="HUF"
                features={["75–90 minutes", "Getting to know each other", "Discuss your goals & concerns"]}
              />
            </Reveal>
            <Reveal delay={1}>
              <PricingCard
                icon={<CalendarClock className="h-[22px] w-[22px]" />}
                name="Standard Session"
                description="Ongoing weekly or biweekly sessions once we've begun working together."
                amount="18,000"
                unit="HUF"
                features={["55 minutes", "Continuity of care", "Flexible online scheduling"]}
              />
            </Reveal>
            <Reveal delay={2}>
              <PricingCard
                icon={<Star className="h-[22px] w-[22px]" />}
                name="Session Package"
                description="Pre-book 8, 10, or 12 sessions and save on each one."
                amount="17,000"
                unit="HUF / session"
                features={["55 minutes each", "Choose 8, 10, or 12 sessions", "Consistent, committed care"]}
                featured
                badge="Best Value"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2>Investing in Yourself</h2>
            <p>
              Consistent, committed care tends to bring the most lasting change. Many clients find that a regular
              rhythm — weekly or biweekly — helps the work stick.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <BlobImage
              src="assets/images/section-deer.jpg"
              alt="A roe deer standing calmly in a misty morning meadow, symbolizing quiet, gradual change"
              float
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Card>
                <h3>Cancellation Policy</h3>
                <p>Sessions can be cancelled or rescheduled free of charge up to 24 hours in advance.</p>
                <p>
                  If cancelled within 24 hours of the appointment, <strong>50% of the session fee</strong> will be
                  added to the fee for your next session (this also applies to package bookings).
                </p>
              </Card>
            </Reveal>
            <Reveal delay={1}>
              <Card>
                <h3>Confidentiality</h3>
                <p>Every conversation is confidential. I work under full confidentiality, in accordance with professional ethical standards.</p>
              </Card>
            </Reveal>
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="primary">
              <a href={CALENDLY_URL} target="_blank" rel="noopener">Book an Appointment</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>Frequently Asked Questions</h2>
          </Reveal>
          <Reveal>
            <FaqSection items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
