"use client";

export default function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const sequence = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-bg-alt py-3">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {sequence.map((item, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="font-display text-2xl text-ink/70 sm:text-3xl">
                  {item}
                </span>
                <span className="mx-6 text-accent">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
