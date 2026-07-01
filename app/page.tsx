import Link from "next/link";
import Reveal from "./components/Reveal";
import Marquee from "./components/Marquee";
import Counter from "./components/Counter";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import ProjectShowcase from "./components/ProjectShowcase";
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
      {/* HERO SECTION WITH IMAGE BACKDROP */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-36 pb-36 lg:pb-44 isolate">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Overlay scrim */}
        <div className="absolute inset-0 -z-10 bg-black/55 backdrop-blur-[1px]" />

        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 flex-grow flex flex-col justify-center">
          {/* Main Title Block */}
          <div className="text-center max-w-4xl mx-auto mt-16 mb-8">
            <Reveal type="scale">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                Interior Design & Execution
              </span>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="mt-8 font-display text-5xl leading-[1.05] text-white sm:text-7xl lg:text-8xl font-medium">
                Welcome to <span className="text-accent">Aarti Furniture</span>
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-6 max-w-xl mx-auto text-lg leading-relaxed text-white/80">
                Your first step toward a personalized space. We turn everyday
                rooms into something inspiring, functional, and truly yours.
              </p>
            </Reveal>
          </div>

          {/* Split Detail Row */}
          <div className="grid gap-8 md:grid-cols-2 items-end border-t border-white/10 pt-8 mt-auto text-white">
            <Reveal delay={300}>
              <p className="max-w-md text-base sm:text-lg text-white/70 leading-relaxed">
                Designing spaces is not just about getting inspired by the trends,
                but also aligning them with the emotions and perceptions of our clients.
              </p>
            </Reveal>
            <Reveal delay={350} className="flex md:justify-end">
              <Link
                href="/services"
                className="group inline-flex items-center gap-4 bg-white text-ink font-semibold rounded-full px-6 py-3 hover:bg-accent hover:text-white transition-all duration-300"
              >
                <span>View Services</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white font-semibold text-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  ↗
                </span>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Floating cards overlapping transition */}
        <div className="absolute bottom-0 inset-x-0 translate-y-1/2 z-20 px-6">
          <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} type="scale">
                <div className="h-full rounded-[2rem] border border-white/10 bg-black/85 backdrop-blur-md p-8 text-white shadow-[0_15px_40px_rgb(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-300">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 font-display text-base text-accent border border-accent/30 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl text-white font-medium">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60 text-sm">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-28" /> {/* Offset spacer for floating cards */}

      <Marquee items={["Who we are", "What we offer", "Selected projects"]} />

      {/* ABOUT PREVIEW */}
      <section className="bg-bg-alt py-24 border-y border-line/40">
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
              className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deep group"
            >
              More about us 
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-line bg-bg p-8 text-center shadow-[0_4px_20px_rgb(0,0,0,0.015)]"
                >
                  <p className="font-display text-5xl text-accent font-semibold">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW WITH NOTCHED CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>What we offer</SectionLabel>
            <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl leading-tight">
              Take a brief look at some of the services we offer
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 120} type="scale">
              <Link
                href="/services"
                className="notched-card group relative block h-full overflow-hidden rounded-2xl border border-line bg-bg-alt p-8 pb-10 shadow-[0_4px_30px_rgb(0,0,0,0.01)] transition-all duration-300 hover:shadow-2xl hover:border-accent hover:-translate-y-1"
              >
                {/* Arrow Button inside the Notch */}
                <span className="absolute top-0 right-0 h-14 w-14 bg-accent text-white flex items-center justify-center rounded-bl-3xl transition-colors duration-300 font-bold group-hover:bg-accent-deep text-lg">
                  ↗
                </span>

                <div className="hover-zoom rounded-2xl overflow-hidden mb-6">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[3/2] w-full object-cover zoom-target"
                    />
                  ) : (
                    <div className={`aspect-[3/2] bg-gradient-to-br ${service.tone} zoom-target`} />
                  )}
                </div>

                <div className="mt-2">
                  <h3 className="font-display text-2xl text-ink font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted text-sm">
                    {service.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors group-hover:text-accent-deep">
                    Learn more <span>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full border border-line px-8 py-3.5 font-semibold text-ink transition-colors hover:border-accent hover:text-accent bg-white shadow-sm"
          >
            View all services
          </Link>
        </div>
      </section>

      {/* SELECTED PROJECTS INTERACTIVE SHOWCASE */}
      <section className="bg-[#0f0e0c] py-28 text-white border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
                Selected projects
              </span>
              <h2 className="mt-5 font-display text-4xl text-white sm:text-5xl">
                Innovative designs, lasting impressions
              </h2>
            </div>
          </Reveal>

          {/* Side-by-side Project Showcase */}
          <ProjectShowcase projects={PROJECTS} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <Reveal>
          <Testimonials items={TESTIMONIALS} />
        </Reveal>
      </section>

      <CTASection />
    </div>
  );
}
