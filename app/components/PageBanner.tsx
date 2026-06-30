import Link from "next/link";
import Marquee from "./Marquee";
import Reveal from "./Reveal";

export default function PageBanner({
  title,
  subtitle,
  ticker,
}: {
  title: string;
  subtitle?: string;
  ticker: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg-alt via-bg to-bg-alt" />
        <div className="absolute right-[-8%] top-[20%] -z-10 h-[360px] w-[360px] rounded-full bg-accent/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-accent">
                Home
              </Link>
              <span>/</span>
              <span className="text-ink">{title}</span>
            </nav>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-5xl text-ink sm:text-6xl">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={200}>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </section>
      <Marquee items={[ticker, ticker, ticker]} />
    </>
  );
}
