"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { Project } from "../lib/data";

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr] items-stretch min-h-[500px]">
      {/* LEFT: Project List Index */}
      <div className="flex flex-col justify-center border-l border-line/40 pl-6 lg:pl-10 space-y-6">
        {projects.map((project, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={project.title}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className="text-left group relative focus:outline-none transition-all duration-300"
            >
              <div className="flex items-baseline gap-4 py-1">
                <span
                  className={`font-display text-lg transition-colors duration-300 ${
                    isActive ? "text-accent" : "text-muted/60"
                  }`}
                >
                  {project.no}
                </span>
                <h3
                  className={`font-display text-2xl sm:text-3xl transition-all duration-300 ${
                    isActive
                      ? "text-white translate-x-2 font-medium"
                      : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {project.title}
                </h3>
              </div>
              {/* Active gold dot line indicator */}
              <span
                className={`absolute left-[-25px] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-accent transition-all duration-300 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* RIGHT: Featured Showcase Preview Card */}
      <div className="relative overflow-hidden rounded-3xl bg-bg-alt border border-white/5 shadow-2xl flex flex-col justify-end min-h-[400px]">
        {/* Dynamic Image Overlay */}
        <div className="absolute inset-0 transition-all duration-700 hover-zoom w-full h-full">
          {projects[activeIndex].image ? (
            <img
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              className="absolute inset-0 w-full h-full object-cover zoom-target"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeIndex].tone} zoom-target`} />
          )}
          <div className="absolute inset-0 bg-black/45 transition-opacity" />
        </div>

        {/* Caption Info */}
        <div className="relative z-10 p-8 sm:p-12 text-white mt-auto bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <Reveal key={activeIndex} type="scale">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {projects[activeIndex].tag}
            </span>
            <h4 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {projects[activeIndex].title}
            </h4>
            <div className="mt-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/95 group hover:text-accent transition-colors duration-300"
              >
                View Project Details
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
