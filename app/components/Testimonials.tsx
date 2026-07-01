"use client";

import { useState } from "react";
import RotatingText from "./RotatingText";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const current = items[index];

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-center max-w-5xl mx-auto">
      {/* LEFT: Rotating badge */}
      <div className="flex justify-center lg:justify-end">
        <RotatingText
          text="• WHAT PEOPLE SAYS • CLIENT TESTIMONIALS "
          width={180}
          height={180}
          className="bg-bg-alt rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-line/50 p-2"
        />
      </div>

      {/* RIGHT: Testimonial Slider */}
      <div className="text-center lg:text-left">
        <div className="mb-4 font-display text-7xl leading-none text-accent/30 select-none lg:-ml-4">
          &ldquo;
        </div>
        <blockquote
          key={index}
          className="reveal-scale in font-display text-2xl leading-relaxed text-ink sm:text-3xl"
        >
          {current.quote}
        </blockquote>
        <div className="mt-8">
          <p className="text-lg font-semibold text-ink">{current.name}</p>
          <p className="text-xs uppercase tracking-widest text-accent font-medium mt-1">
            {current.role}
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent bg-white/50 backdrop-blur"
          >
            ←
          </button>
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent bg-white/50 backdrop-blur"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

