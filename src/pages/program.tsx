import { Layout } from "@/components/site/layout"
import { Button } from "@/components/ui/button"
import { BlobImage } from "@/components/site/blob-image"
import { WaveDivider } from "@/components/site/wave-divider"
import { Card } from "@/components/site/card"
import { Reveal } from "@/components/site/reveal"
import { CALENDLY_URL } from "@/components/site/nav-links"

export default function Program() {
  return (
    <Layout current="program">
      <section className="bg-cream pb-[50px] pt-15 text-center">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="mb-3.5 text-[0.95rem] font-bold uppercase tracking-wider text-burgundy">My Method</p>
          <h1>The Self-Building Program</h1>
          <p className="mx-auto max-w-[760px] text-[1.2rem] text-ink-muted">
            If you feel like you always end up back in the same place… you don't need a new situation — you need a
            new way of functioning.
          </p>
          <p className="mx-auto mt-4 max-w-[700px]">
            Many people try to change by waiting for change to come from others: a different partner, a different
            job, a different environment. And it works for a while — then everything returns to the same place. The{" "}
            <strong>Self-Building Program (SBP)</strong> and <strong>Renewed SBP</strong> help you change not your
            circumstances, but the way you function within them.
          </p>
        </div>
      </section>

      <WaveDivider fill="var(--color-surface)" />

      <section id="sbp" className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>Who Is It For?</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Card>
                <h3>Self-Building Program (SBP)</h3>
                <p>This program is for you if:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>You often find yourself in the same patterns</li>
                  <li>You feel something is holding you back, but can't quite see what</li>
                  <li>You find it hard to say no, and put others before yourself</li>
                  <li>Fear, shame, or the need to please often drive your decisions</li>
                  <li>You want to change, but don't have the support you need to do it</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={1}>
              <Card id="renewed-sbp">
                <h3>Renewed SBP</h3>
                <p>This process is for you if:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>You're going through a life turning point or crisis (before/after a divorce, a relationship crisis)</li>
                  <li>You've experienced loss, trauma, or major change</li>
                  <li>You feel that who you were has been shaken</li>
                  <li>You don't want to go back to how things were — you want to build on new foundations</li>
                </ul>
              </Card>
            </Reveal>
          </div>

          <Reveal className="mt-10 rounded-organic border-l-[5px] border-burgundy bg-cream p-6">
            <h3 className="mt-0">Who Is It NOT For?</h3>
            <p className="mb-0">
              This program is not for you if you're looking for a quick fix without real work, if you expect the
              people around you to change instead, or if you're not ready to honestly face how you function. This
              process is for people who are ready to take responsibility for themselves — for their behavior, for
              their life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>How Do We Work?</h2>
            <p>This is a structured <strong>3–6 month process</strong> — not open-ended, indefinite therapy.</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal>
              <Card>
                <h3>During the program, you will:</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Work through individual, guided sessions</li>
                  <li>Learn concrete tools</li>
                  <li>Receive written and practical exercises</li>
                  <li>Work with your own real-life situations</li>
                </ul>
                <p className="text-[0.95rem] text-ink-muted">The real change happens between sessions.</p>
              </Card>
            </Reveal>
            <Reveal delay={1}>
              <Card>
                <h3>By the end, you'll be able to:</h3>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Recognize and interrupt your recurring patterns</li>
                  <li>Set boundaries without guilt</li>
                  <li>Make clearer decisions in difficult situations</li>
                  <li>Communicate more honestly in your relationships</li>
                  <li>Better understand and manage your own reactions</li>
                </ul>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2>What Happens If You Don't Change?</h2>
            <p>
              In all likelihood, the same situations keep repeating. Just with different people, in a different
              environment. The pattern doesn't change just because the circumstances do.
            </p>
            <h3 className="mt-10">You Are Not Alone in This</h3>
            <p>
              In this process, I don't just "listen" to you — I actively accompany you, give you feedback, and
              support you so that real change can actually happen.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <BlobImage src="assets/images/section-forest.jpg" alt="Light breaking through a forest, symbolizing new growth" />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep py-16 text-center text-on-navy [&_h2]:text-white">
        <div className="mx-auto max-w-[1120px] px-6">
          <h2>Our Goal</h2>
          <p className="mx-auto max-w-[680px]">
            Not perfection, and not a problem-free life. But a way of functioning that lets you be more stable, more
            conscious, and freer — for the long term.
          </p>
          <p className="mx-auto mt-6 max-w-[680px]">
            If what you just read speaks to you, that's probably not a coincidence. Book a first conversation, and
            let's see together whether this process is right for you.
          </p>
          <Button asChild variant="primary" className="mt-10">
            <a href={CALENDLY_URL} target="_blank" rel="noopener">Book a First Conversation</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <Reveal className="mb-10 text-center">
            <h2>More About the Programs</h2>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <Card>
                <h3>Self-Building Program (SBP)</h3>
                <p>
                  The Self-Building Program helps in situations where you've long felt stuck. When you find yourself
                  in repeating situations, or have been dealing with a problem for a while without understanding its
                  real cause.
                </p>
                <p>
                  It also helps when shame, fear, or fear of rejection lies behind your decisions and actions. It's
                  equally useful in situations where you can't say no — even though you want to — and you feel that
                  others are steering your life instead of you.
                </p>
                <p>
                  In SBP, I don't just hand you tools — we practice using them together, so they become part of your
                  everyday life. Our shared goal is real, everyday change, which I accompany and support you through
                  across the sessions.
                </p>
              </Card>
            </Reveal>

            <Reveal>
              <Card>
                <h3>Renewed SBP</h3>
                <p>
                  Renewed SBP may be right for you when you're going through a significant change, experiencing
                  something traumatic, or want to process a loss.
                </p>
                <p>
                  At times like these, everything you've built until now — your life, your beliefs, your self-image
                  — can be called into question, or even shaken. To find yourself again, feel well, and continue
                  your everyday life on a new level, a supportive process like Renewed SBP can be exactly what
                  helps.
                </p>
                <p>
                  During the programs, we work with defined topics that you also invest time and energy into
                  between sessions. Real work and change often happen between appointments, which we then process
                  together in session. The process requires your active participation, expressed through practical
                  and written exercises.
                </p>
                <p>
                  <strong>Our goal</strong> isn't to achieve perfection or a problem-free everyday life — it's to
                  give you tools you can use confidently and with a sense of ease, even after the Self-Building
                  Program ends.
                </p>
              </Card>
            </Reveal>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="primary">
              <a href={CALENDLY_URL} target="_blank" rel="noopener">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
