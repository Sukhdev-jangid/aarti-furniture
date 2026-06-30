import Link from "next/link";
import Reveal from "./components/Reveal";
import Marquee from "./components/Marquee";
import Counter from "./components/Counter";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import { SERVICES, PROJECTS, TESTIMONIALS, STATS } from "./lib/data";

const PILLARS = [
  {
    title: "Detail-Driven Craftsmanship",
    body: "Every joint, finish, and fixture is considered. We obsess over the small things so the whole space feels effortless.",
  },
  {
    title: "Tailored Design Solutions",
    body: "No templates. We design around how you actually live and work, shaping each room to your rhythm and taste.",
  },
  {
    title: "Trusted Collaboration",
    body: "From first sketch to final handover, we keep you in the loop with clear timelines and honest communication.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="bg-bg text-ink">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg-alt via-bg to-bg-alt" />
        <div className="absolute right-[-10%] top-[10%] -z-10 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] -z-10 h-[380px] w-[380px] rounded-full bg-accent-deep/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal>
              <SectionLabel>Interior Design & Execution</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
                Welcome to <span className="text-accent">Aarti Furniture</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                Your first step toward a personalized space. We turn everyday
                rooms into something inspiring, functional, and truly yours.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="rounded-full bg-accent px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent-deep"
                >
                  View services
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-line px-7 py-3.5 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  See our work
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#b69b73] to-[#5f4b32] shadow-2xl">
                <div className="flex h-full flex-col justify-end p-8">
                  <div className="rounded-2xl bg-bg/95 p-6 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-accent">★</span>
                      <span className="text-2xl font-semibold">4.9</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      Rated by 2k+ satisfied customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={["Who we are", "What we offer", "Selected projects"]} />

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-line bg-bg-alt p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 font-display text-xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl">
              We aim to turn every space into something inspiring, functional,
              and truly personal.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              We blend thoughtful planning with craftsmanship, designing spaces
              that work as beautifully as they look. Every decision is rooted in
              how you live.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deep"
            >
              More about us <span aria-hidden>→</span>
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-bg p-8 text-center"
                >
                  <p className="font-display text-5xl text-accent">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>What we offer</SectionLabel>
            <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
              Take a brief look at some of the services we offer
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 120}>
              <Link
                href="/services"
                className="group block h-full overflow-hidden rounded-2xl border border-line bg-bg-alt transition-shadow hover:shadow-xl"
              >
                <div className={`aspect-[3/2] bg-gradient-to-br ${service.tone}`} />
                <div className="p-7">
                  <h3 className="font-display text-2xl text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-deep">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full border border-line px-7 py-3.5 font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            View all services
          </Link>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="bg-bg-alt py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <SectionLabel>Selected projects</SectionLabel>
                <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
                  Innovative designs, lasting impressions
                </h2>
              </div>
              <Link
                href="/projects"
                className="font-semibold text-accent hover:text-accent-deep"
              >
                View all projects →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 120}>
                <Link href="/projects" className="group relative block overflow-hidden rounded-2xl">
                  <div
                    className={`aspect-[16/10] bg-gradient-to-br ${project.tone} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <span className="font-display text-5xl text-white/80">
                      {project.no}
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-white/70">
                        {project.tag}
                      </p>
                      <h3 className="font-display text-3xl text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <Testimonials items={TESTIMONIALS} />
        </Reveal>
      </section>

      <CTASection />
    </div>
  );
}
