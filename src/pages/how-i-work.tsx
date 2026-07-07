import { Layout } from "@/components/site/layout"
import { Button } from "@/components/ui/button"
import { BlobImage } from "@/components/site/blob-image"
import { WaveDivider } from "@/components/site/wave-divider"
import { Card } from "@/components/site/card"
import { TopicList } from "@/components/site/topic-list"
import { Reveal } from "@/components/site/reveal"

const TOPICS = [
  "Relationship crises",
  "Sexuality-related concerns",
  "Workplace burnout",
  "Career counselling",
  "Deepening self-knowledge",
  "Finding your sense of identity",
  "Building or rebuilding self-image",
  "Psychological and physical recovery after trauma",
  "Managing anxiety",
  "Stress-related physical symptoms",
  "Navigating temporary emotional and physical imbalances",
  "Early recognition and treatment of compulsive behavior",
]

const FOCUS_AREAS = [
  { title: "Self-Knowledge & Identity", desc: "It matters to me to help you get closer to who you truly are. This often doesn't start with one big realization, but with small, gentle understandings that slowly — but surely — shape your life." },
  { title: "Anxiety & Everyday Difficulties", desc: "Anxiety can take many forms. Together we look for the footholds that help you regain calm and a sense of control." },
  { title: "Building or Rebuilding Self-Image", desc: "Sometimes the image we hold of ourselves cracks or falls apart entirely. When that happens, we work together to help you find the inner stability you can rely on again." },
  { title: "Bridging Temporary Imbalances", desc: "There are periods when simply too much is happening at once. At these times, I help you find your way back to balance, and feel capable again." },
  { title: "Recovery After Traumatic Experiences", desc: "Trauma weighs on the mind, but also on the body. Throughout the process, I accompany you toward feeling safe in your own life again, and reconnecting with the strength that is already within you." },
  { title: "Recognizing & Treating Compulsive Behavior Early", desc: "Compulsive patterns often build up quietly and slowly. Together, we learn to recognize them, and find strategies that help in the long run." },
]

export default function HowIWork() {
  return (
    <Layout current="how-i-work">
      <section className="bg-cream pb-[50px] pt-15 text-center">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="mb-3.5 text-[0.95rem] font-bold uppercase tracking-wider text-burgundy">Services</p>
          <h1>How I Work</h1>
          <p className="mx-auto max-w-[700px] text-[1.2rem] text-ink-muted">
            Individual psychological consultations for adults. Most sessions take place online — flexibly,
            securely, and in an easily accessible format.
          </p>
        </div>
      </section>

      <WaveDivider fill="#ffffff" />

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mx-auto mb-10 max-w-[760px] text-center">
            <h2>Individual Psychological Consultations for Adults</h2>
            <p>Topics I can authentically accompany you through:</p>
          </Reveal>
          <TopicList items={TOPICS} />
          <p className="mt-10 text-center text-[0.95rem] text-ink-muted">
            The process is always adapted to your own pace and needs.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mx-auto mb-10 max-w-[760px] text-center">
            <h2>How Does Our Work Together Happen?</h2>
            <p>
              As a psychologist, I work in individual therapy, and I work exclusively with adults. Most of the
              people who come to me meet with me online, which for many is more comfortable, safer, and easier to
              fit into daily life. Working together, for me, always begins with creating a space of trust — a place
              where you can speak honestly about what feels difficult right now, and about what you'd like to
              change.
            </p>
            <p>
              Over the years, I have become especially at home with topics that touch a person's inner world, their
              relationship to themselves, and their connection to their own story:
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <Card>
                  <h3>{area.title}</h3>
                  <p>{area.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2>What Matters Most, To Me</h2>
            <p>
              In the therapeutic process, what matters most to me is that you feel safe, and that you're able to
              move at your own pace. I don't hand over ready-made solutions — instead, I offer the kind of attention
              and professional presence in which real change can be born.
            </p>
            <p>
              I believe every person is capable of growth — and I'm here to support you so that you don't have to
              walk this path alone.
            </p>
            <Button asChild variant="primary">
              <a href="program.html">Read About the Self-Building Programs</a>
            </Button>
          </Reveal>
          <Reveal delay={1}>
            <BlobImage src="assets/images/section-forest.jpg" alt="Sunlight through a quiet forest, symbolizing steady growth" />
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
