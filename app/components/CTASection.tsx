import Link from "next/link";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-accent to-accent-deep px-8 py-20 text-center text-ink">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl text-ink">
            Your dream space awaits
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/80">
            Let&apos;s design something you&apos;ll love coming home to. Start
            with a free, no-pressure consultation.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-ink px-8 py-4 font-semibold text-white transition-transform hover:scale-105 hover:bg-ink/90"
          >
            Get your free quote
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
