import { Layout } from "@/components/site/layout"
import { Button } from "@/components/ui/button"
import { BlobImage } from "@/components/site/blob-image"
import { WaveDivider } from "@/components/site/wave-divider"
import { Card } from "@/components/site/card"
import { PullQuote } from "@/components/site/pull-quote"
import { Reveal } from "@/components/site/reveal"
import { TopicList } from "@/components/site/topic-list"
import { CALENDLY_URL } from "@/components/site/nav-links"

const QUALIFICATIONS = [
  { title: "Licensed Psychologist", desc: "Specialization in clinical and health psychology." },
  { title: "Trained Grief Counsellor", desc: "Practical stress management, and the Williams LifeSkills behavioral medicine program." },
  { title: "25+ Years in Human Resources", desc: "Extensive corporate experience prior to psychology, focused on human behavior and organizational dynamics." },
  { title: "Ongoing Professional Development", desc: "Continually expanding my methods to serve clients with the most relevant, evidence-informed approaches." },
]

const HOW_I_WORK_OVERALL = [
  "I focus on the present, supporting change with a future-oriented outlook",
  "I take an individual approach — every process is tailored to you",
  "I work in partnership — change is a joint effort, not a ready-made solution handed over",
  "I enjoy working with women, and with men who are open to growth or want to move forward from a difficult life situation",
]

export default function About() {
  return (
    <Layout current="about">
      <section className="bg-cream pb-15 pt-15">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3.5 text-[0.95rem] font-bold uppercase tracking-wider text-burgundy">About Me</p>
            <h1>Andrea Forán, Licensed Psychologist</h1>
            <p className="text-[1.2rem] text-ink-muted">
              I have more than 25 years of corporate experience, mainly in HR, where I came to understand human
              behavior, organizational dynamics, and the pressures of everyday working life in depth. I later
              completed my psychology studies, earning my degree as a licensed psychologist specializing in clinical
              and health psychology.
            </p>
          </div>
          <BlobImage src="assets/images/about-portrait.jpg" alt="Andrea Forán, psychologist" float />
        </div>
      </section>

      <WaveDivider fill="var(--color-cream)" />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-8 text-center">
            <h2>Professional Philosophy</h2>
          </Reveal>
          <PullQuote className="mx-auto mb-6 max-w-[760px]">
            "Psychological work, to me, is a partnership. I believe change begins the moment someone is brave enough
            to ask for help — and willing to act for themselves."
          </PullQuote>
          <p className="mx-auto max-w-[760px]">
            Along the way, I accompany, support, and hold up a mirror — but the solution is always reached together
            with the client.
          </p>
          <p className="mx-auto max-w-[760px]">
            I believe that physical, emotional, and environmental factors are inseparable — I work with a holistic
            approach, always aiming to restore balance. As a trained grief companion, I support those dealing with
            loss, trauma, or a difficult period in life with particular sensitivity and professional humility.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>Qualifications</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {QUALIFICATIONS.map((q, i) => (
              <Reveal key={q.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <Card>
                  <h3>{q.title}</h3>
                  <p>{q.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>My Methods &amp; Professional Background</h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <Card>
                <h3>Cognitive Psychological Approach</h3>
                <p>
                  Cognitive psychology studies human thought, information processing, and cognition. Research
                  confirms that our thoughts significantly influence our emotions, decisions, and behavior.
                </p>
                <p><strong>In practice, this means:</strong></p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Identifying recurring thought patterns and automatic thoughts</li>
                  <li>Examining which of these are distorted, exaggerated, or no longer serve you</li>
                  <li>Building more flexible, realistic, and supportive ways of thinking together</li>
                  <li>Working with practical exercises, behavioral experiments, and awareness-building</li>
                </ul>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <h3>Individual Psychology (Adlerian) Perspective</h3>
                <p>
                  Individual psychology is built on Adler's work and is one of the most human-centered approaches in
                  the field. It examines how a person's lifestyle developed, which patterns drive them, and how they
                  try to find their place in the world. This perspective fits well with my holistic approach: I see
                  the whole person, not just the problem.
                </p>
                <p><strong>In practice, this means:</strong></p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Looking at the early experiences that shaped how you function</li>
                  <li>Exploring your lifestyle, beliefs, and goals</li>
                  <li>Understanding how you try to connect with others, and what supports or hinders that</li>
                  <li>A process that is encouraging, resource-oriented, and built on the possibility of change</li>
                </ul>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <h3>Holistic Perspective — Physical, Emotional &amp; Environmental Balance</h3>
                <p>
                  I believe that physical, emotional, and environmental factors are inseparable. During
                  consultations, we always take into account:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Lifestyle</li>
                  <li>Environmental pressures</li>
                  <li>Relationship patterns</li>
                  <li>Inner resources</li>
                </ul>
                <p>The goal is to restore balance — not merely to reduce symptoms.</p>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <h3>Grief Companionship &amp; Trauma-Sensitive Support</h3>
                <p>
                  As a trained grief companion, I place particular emphasis on accompanying people through loss,
                  trauma, and life turning points. This significantly broadens and deepens a purely psychological
                  approach — the emphasis isn't only on technique or on exploring cognitive-emotional patterns, but
                  on the human quality of the companionship: giving proper time, deep compassion, and genuinely
                  resonating with the other person.
                </p>
                <p>
                  In practice, this means the client receives not only understanding and professional support, but
                  also a safe, accepting space to move at their own pace — where the healing power of the
                  relationship matters just as much as the methodology.
                </p>
                <p><strong>In practice, this means:</strong></p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Holding a safe, non-judgmental space for pain and processing</li>
                  <li>Helping you understand the natural process of grief</li>
                  <li>Supporting you in finding new balance and reorganizing your life</li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>How I Work, Overall</h2>
          </Reveal>
          <TopicList items={HOW_I_WORK_OVERALL} />
          <div className="mt-10 text-center">
            <Button asChild variant="primary">
              <a href={CALENDLY_URL} target="_blank" rel="noopener">Book an Appointment</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
