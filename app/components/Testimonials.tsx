"use client";

import { useState } from "react";

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
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-8 font-display text-6xl leading-none text-accent/40">
        &ldquo;
      </div>
      <blockquote
        key={index}
        className="reveal in font-display text-2xl leading-relaxed text-ink sm:text-3xl"
      >
        {current.quote}
      </blockquote>
      <div className="mt-8">
        <p className="text-lg font-semibold text-ink">{current.name}</p>
        <p className="text-sm uppercase tracking-widest text-accent">
          {current.role}
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
        >
          ←
        </button>
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2 bg-line"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
        >
          →
        </button>
      </div>
    </div>
  );
}
