import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
import Marquee from "./components/Marquee";
import Counter from "./components/Counter";
import Testimonials from "./components/Testimonials";
import HomeEnquiry from "./components/HomeEnquiry";
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
    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-text">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="bg-bg text-ink">
      {/* HERO SECTION WITH IMAGE BACKDROP */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-x-hidden pt-36 pb-28 lg:pb-36 isolate">
        {/* Background Image Layer */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Overlay scrim */}
        <div className="absolute inset-0 -z-10 bg-black/55 backdrop-blur-[1px]" />

        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 flex-grow flex flex-col justify-center md:pb-72 lg:pb-80">
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
        <div className="relative z-20 px-6 mt-12 mb-28 md:absolute md:bottom-28 md:inset-x-0 md:mt-0 md:mb-0">
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

        {/* Marquee at the very bottom edge of hero */}
        <div className="absolute bottom-0 inset-x-0 z-10">
          <Marquee items={SERVICES.map((s) => s.title)} />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-white py-24 border-y border-line/40 relative">
        {/* Inline SVG ClipPath for Folder-Tab Shape */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <clipPath id="folder-tab-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.18 C 0,0.12 0.03,0.12 0.06,0.12 L 0.28,0.12 C 0.32,0.12 0.34,0.06 0.37,0 L 0.92,0 C 0.96,0 1,0.04 1,0.1 L 1,0.92 C 1,0.97 0.96,1 0.92,1 L 0.08,1 C 0.04,1 0,0.97 0,0.92 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Top Header Block */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Pill Badge */}
          <div className="lg:col-span-3 flex lg:justify-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 bg-white text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <span>WHO WE ARE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Heading and Subsections */}
          <div className="lg:col-span-9">
            <Reveal delay={100}>
              <h2 className="font-display text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight max-w-4xl">
                We aim to turn every space into something inspiring, functional, and truly personal.
              </h2>
            </Reveal>

            {/* Sub-columns under the main heading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
              <Reveal delay={200}>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">Our Approach</h3>
                  <p className="leading-relaxed text-muted text-sm sm:text-base">
                    It is rooted in a deep understanding of our clients&apos; lifestyles, aspirations, and practical needs — resulting in interiors that are both purposeful and personal. Every project we take on is uniquely crafted, with no repetitions or templates.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">Our Beliefs</h3>
                  <p className="leading-relaxed text-muted text-sm sm:text-base">
                    We believe in originality, authenticity, and design that aesthetically reflects your vision.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom Visual Block (Left Image + Right Stat Cards & Sub-image) */}
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 lg:mt-24 items-stretch">
          {/* Left Column: Tab-shaped Image */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <Reveal type="scale" delay={300} className="h-full flex">
              <div 
                className="relative w-full h-full min-h-[380px] md:min-h-[520px] bg-neutral-100 overflow-hidden"
                style={{ clipPath: "url(#folder-tab-clip)" }}
              >
                <Image
                  src="/about_interior_main.png"
                  alt="Modern Dining Room with Yellow Chairs"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: DESIGN EXPERTISE */}
            <Reveal type="scale" delay={350} className="h-full">
              <div className="rounded-[2.5rem] bg-[#f5f5f3] p-8 sm:p-10 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="w-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                    DESIGN EXPERTISE
                  </span>
                  <div className="border-b border-black/10 w-full mt-2.5 mb-8" />
                </div>
                <div className="mt-auto">
                  <div className="font-sans text-5xl sm:text-6xl font-semibold text-ink tracking-tight flex items-baseline">
                    <Counter end={9} suffix="+" />
                  </div>
                  <p className="mt-3 text-xs text-neutral-500 font-medium lowercase tracking-wide">
                    design specialists
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 2: LOCAL EXPERTISE */}
            <Reveal type="scale" delay={400} className="h-full">
              <div className="rounded-[2.5rem] bg-[#f5f5f3] p-8 sm:p-10 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="w-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                    LOCAL EXPERTISE
                  </span>
                  <div className="border-b border-black/10 w-full mt-2.5 mb-8" />
                </div>
                <div className="mt-auto">
                  <div className="font-sans text-5xl sm:text-6xl font-semibold text-ink tracking-tight flex items-baseline">
                    <Counter end={10} suffix="+" />
                  </div>
                  <p className="mt-3 text-xs text-neutral-500 font-medium lowercase tracking-wide">
                    years of experience
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 3: OUR IMPACT */}
            <Reveal type="scale" delay={450} className="h-full">
              <div className="rounded-[2.5rem] bg-[#f5f5f3] p-8 sm:p-10 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="w-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                    OUR IMPACT
                  </span>
                  <div className="border-b border-black/10 w-full mt-2.5 mb-8" />
                </div>
                <div className="mt-auto">
                  <div className="font-sans text-5xl sm:text-6xl font-semibold text-ink tracking-tight flex items-baseline">
                    <Counter end={94} suffix="+" />
                  </div>
                  <p className="mt-3 text-xs text-neutral-500 font-medium lowercase tracking-wide">
                    projects done
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Sub Image */}
            <Reveal type="scale" delay={500} className="h-full flex">
              <div className="relative rounded-[2.5rem] overflow-hidden w-full h-full min-h-[220px] bg-neutral-100">
                <Image
                  src="/about_interior_sub.png"
                  alt="Modern Restaurant Bar Counter"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-[#f5f2eb] py-28 border-y border-line/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>What we offer</SectionLabel>
              <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl leading-tight">
                Take a brief look at some of the services we offer
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
            {SERVICES.slice(0, 5).map((service, i) => {
              const isThreeCol = i < 3;
              const spanClass = isThreeCol ? "md:col-span-2" : "md:col-span-3";
              return (
                <Reveal key={service.slug} delay={i * 100} type="scale" className={spanClass}>
                  <Link
                    href="/services"
                    className="group relative flex flex-col justify-between overflow-visible rounded-[2.5rem] bg-white p-8 sm:p-10 min-h-[380px] md:min-h-[440px] shadow-[0_4px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-xl border border-black/5"
                  >
                    {/* Circular top-right notch cutout */}
                    <div className="absolute top-0 right-0 w-0 h-0 z-10">
                      {/* Cream background circle (notch) */}
                      <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#f5f2eb] rounded-full transition-colors duration-500" />
                      {/* White arrow button */}
                      <div className="absolute -top-6 -right-6 w-12 h-12 bg-white border border-black/10 text-ink rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-110">
                        ↗
                      </div>
                    </div>

                    {/* Title */}
                    <div className="pt-2 pr-12">
                      <h3 className="font-sans text-xl sm:text-2xl font-semibold leading-tight text-ink tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Image */}
                    {service.image && (
                      <div className="w-full mt-auto flex justify-center items-end max-h-[220px] md:max-h-[260px] overflow-hidden rounded-b-[2.5rem]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={480}
                          height={240}
                          className="max-w-[90%] md:max-w-full max-h-[200px] md:max-h-[240px] object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-line px-8 py-3.5 font-semibold text-ink transition-all hover:border-accent hover:text-accent bg-white shadow-sm hover:shadow"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS INTERACTIVE SHOWCASE */}
      <section className="relative isolate overflow-hidden bg-[#0f0e0c] py-28 text-white border-y border-white/5">
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

      <HomeEnquiry />
    </div>
  );
}
