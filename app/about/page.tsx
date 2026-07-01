import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import PageBanner from "../components/PageBanner";
import CTASection from "../components/CTASection";
import { ROADMAP, TEAM } from "../lib/data";

export const metadata: Metadata = {
  title: "About Us — Aarti Furniture",
  description:
    "Aarti Furniture is a design-and-execution studio crafting personal, functional spaces. Meet the team and learn our process.",
};

const ABOUT_STATS = [
  { end: 24, suffix: "+", label: "Projects in development" },
  { end: 180, suffix: "+", label: "Projects delivered" },
  { end: 9, suffix: "+", label: "Years in practice" },
];

export default function AboutPage() {
  return (
    <div className="bg-bg text-ink">
      <PageBanner
        title="About us"
        subtitle="A design-and-execution studio shaping spaces that feel inspiring, functional, and personal."
        ticker="About us"
      />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Shaping the world
            </span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Established with one belief — every space deserves to feel
              personal.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-5 leading-relaxed text-muted">
              <p>
                Aarti Furniture is a full-service design studio working across
                residential, commercial, hospitality, and institutional spaces.
                We pair thoughtful design with hands-on execution, so the
                vision you sign off on is the space you walk into.
              </p>
              <p>
                Over the years we&apos;ve delivered more than a hundred projects,
                each one shaped by close collaboration, careful planning, and an
                obsession with detail. We don&apos;t do templates — we design for
                how you actually live and work.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deep"
              >
                Work with us <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* STATS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {ABOUT_STATS.map((stat) => (
            <Reveal key={stat.label}>
              <div className="rounded-2xl border border-line bg-bg-alt p-8 text-center">
                <p className="font-display text-5xl text-accent">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-widest text-muted">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Our process
              </span>
              <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
                Our 7-step roadmap
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                A clear path from first hello to final styling — so you always
                know where your project stands.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROADMAP.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 100}>
                <div className="h-full rounded-2xl border border-line bg-bg p-7">
                  <span className="font-display text-4xl text-accent/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-bg-alt shadow-xl">
              <img
                src="/founder.png"
                alt="Aarti Sharma - Founder & Principal Designer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Founder & CEO
            </span>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Aarti Sharma
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-muted">
              <p>
                With a background in space planning and years of practice across
                residential and commercial work, Aarti founded the studio to
                bring design and execution under one roof — and to keep the
                client at the centre of every decision.
              </p>
              <p>
                A believer in honest collaboration and craft that lasts, Aarti
                leads each project personally, from the first conversation to
                the final walk-through.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Meet the team
              </span>
              <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
                The people behind your space
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 120}>
                <div className="overflow-hidden rounded-2xl border border-line bg-bg">
                  <div className="aspect-square relative overflow-hidden bg-bg-alt">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${member.tone}`} />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-widest text-accent">
                      {member.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
