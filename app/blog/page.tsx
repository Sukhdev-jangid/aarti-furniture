import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
import CTASection from "../components/CTASection";
import { POSTS } from "../lib/data";

export const metadata: Metadata = {
  title: "Blog — Aarti Furniture",
  description:
    "Ideas, trends, and behind-the-scenes notes on interior design from the Aarti Furniture team.",
};

export default function BlogPage() {
  return (
    <div className="bg-bg text-ink">
      <PageBanner
        title="Articles & insights"
        subtitle="Discover inspiration and trends — practical ideas and notes from the studio."
        ticker="Articles & insights"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-bg-alt transition-shadow hover:shadow-xl">
                <div className={`aspect-[3/2] bg-gradient-to-br ${post.tone}`} />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    Read article <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
