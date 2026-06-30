import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
import CTASection from "../components/CTASection";
import { PROJECTS } from "../lib/data";

export const metadata: Metadata = {
  title: "Our Projects — Aarti Furniture",
  description:
    "A selection of residential, commercial, and hospitality interiors designed and delivered by Aarti Furniture.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-bg text-ink">
      <PageBanner
        title="Our projects"
        subtitle="A look at some of the spaces we've designed and brought to life — innovative designs, lasting impressions."
        ticker="Selected projects"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <div className="group relative overflow-hidden rounded-2xl">
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
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
