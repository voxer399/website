import { Layout } from "@/components/site/layout"
import { Button } from "@/components/ui/button"
import { asset } from "@/lib/asset"
import { BlobImage } from "@/components/site/blob-image"
import { WaveDivider } from "@/components/site/wave-divider"
import { TrustStrip } from "@/components/site/trust-strip"
import { TopicList } from "@/components/site/topic-list"
import { Card } from "@/components/site/card"
import { Reveal } from "@/components/site/reveal"
import { CALENDLY_URL } from "@/components/site/nav-links"

const TOPICS = [
  "My Self-Building Program & Renewed SBP",
  "Relationship crises",
  "Persistent anxiety",
  "Stress-related physical symptoms",
  "Sexuality-related concerns",
  "Workplace burnout",
  "Career counselling",
  "Deepening self-knowledge",
  "Recovery after trauma, mentally and physically",
  "Navigating temporary emotional and physical imbalances",
]

export default function Home() {
  return (
    <Layout current="home">
      <section className="bg-cream py-15 pb-[70px] overflow-hidden [background:radial-gradient(circle_at_85%_20%,color-mix(in_srgb,var(--color-burgundy)_7%,transparent),transparent_55%),radial-gradient(circle_at_10%_90%,color-mix(in_srgb,var(--color-navy)_6%,transparent),transparent_45%),var(--color-cream)]">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 px-6 text-center lg:grid-cols-[1.2fr_0.8fr] lg:text-left">
          <div className="animate-fade-in-up">
            <p className="mb-3.5 text-[0.95rem] font-bold uppercase tracking-wider text-burgundy">
              Andrea Forán · Licensed Psychologist
            </p>
            <h1>How can I help you, as a psychologist?</h1>
            <p className="text-[1.2rem] text-ink-muted">
              Flexible appointment times · Online consultations in English or Hungarian
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button asChild variant="primary">
                <a href={CALENDLY_URL} target="_blank" rel="noopener">Book an Appointment</a>
              </Button>
              <Button asChild variant="outline">
                <a href={asset("program.html")}>What is the Self-Building Program?</a>
              </Button>
            </div>
          </div>
          <div className="order-first mx-auto max-w-[240px] lg:order-none lg:max-w-[340px] float-decor">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border-2 border-rose opacity-55" />
              <img
                src={asset("assets/images/hero-portrait.png")}
                alt="Portrait of Andrea Forán, psychologist"
                className="relative rounded-full border-[6px] border-surface shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="var(--color-surface)" />

      <TrustStrip />

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mx-auto mb-10 max-w-[760px] text-center">
            <h2>Areas I can help you with</h2>
          </Reveal>
          <TopicList items={TOPICS} />
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2>Clear understanding. Stable presence. Real change.</h2>
            <p>
              As a psychologist, I support the people who come to me in seeing their own feelings, resources, and
              possibilities more clearly. I believe every change begins with an honest conversation — and I walk
              this path with you, bringing professional knowledge, attentiveness, and a steady presence.
            </p>
            <p>
              I create a safe space where real understanding and growth can happen. My goal is for you to live your
              life with a stronger sense of identity, more awareness, and greater balance — and, in time, to be able
              to rely confidently on your own inner strength.
            </p>
            <Button asChild variant="primary">
              <a href={asset("how-i-work.html")}>How I Work</a>
            </Button>
          </Reveal>
          <Reveal delay={1}>
            <BlobImage
              src="assets/images/section-stones.jpg"
              alt="Balanced stack of stones by the sea, symbolizing inner balance"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mx-auto mb-10 max-w-[760px] text-center">
            <h2>Self-Building Programs for Lasting Change</h2>
            <p className="text-[1.1rem] text-ink-muted">
              Sometimes what you need isn't a new situation — it's a new way of functioning. These structured
              programs help you recognize recurring patterns, understand their roots, and consciously build your
              life on new foundations.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Card>
                <h3>Self-Building Program (SBP)</h3>
                <p>For those who keep running into the same obstacles and want to better understand how they function.</p>
                <p className="text-[0.95rem] text-ink-muted"><strong>Self-knowledge · Boundaries · Conscious change</strong></p>
                <Button asChild variant="outline">
                  <a href={asset("program.html#sbp")}>More about SBP</a>
                </Button>
              </Card>
            </Reveal>
            <Reveal delay={1}>
              <Card>
                <h3>Renewed SBP</h3>
                <p>Helps you find new balance and rebuild yourself after major life turning points, losses, or big changes.</p>
                <p className="text-[0.95rem] text-ink-muted"><strong>Starting over · Stability · New foundations</strong></p>
                <Button asChild variant="outline">
                  <a href={asset("program.html#renewed-sbp")}>More about Renewed SBP</a>
                </Button>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="lg:order-2">
            <BlobImage
              src="assets/images/section-meadow.jpg"
              alt="A quiet mountain valley with a winding stream at sunrise, symbolizing self-knowledge and finding your own path"
              variant="alt"
            />
          </Reveal>
          <Reveal delay={1} className="lg:order-1">
            <h2>Relationships. Self-Knowledge. Identity.</h2>
            <p>
              Human relationships have mattered deeply to me since adulthood. I believe people and their environment
              form one whole: some relationships we shape ourselves, and some shape us. We can only turn toward
              others with real empathy and understanding once we have adequate self-knowledge.
            </p>
            <p>
              There is no such thing as being too late to find your identity — and the right kind of self-knowledge
              helps you find your place in the world and live authentically, without inner conflict.
            </p>
            <Button asChild variant="primary">
              <a href={asset("about.html")}>Learn More About Me</a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep py-16 text-on-navy [&_h2]:text-white">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2>Ready to talk?</h2>
            <p className="max-w-[480px]">
              Online consultations in English or Hungarian, with flexible appointment times and advance booking.
            </p>
            <Button asChild variant="primary">
              <a href={asset("contact.html")}>Get in Touch</a>
            </Button>
          </Reveal>
          <Reveal delay={1} className="mx-auto w-full max-w-[280px]">
            <BlobImage
              src="assets/images/blossom.jpg"
              alt="Cherry blossom branch, symbolizing renewal and growth"
              variant="alt"
              float
            />
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
