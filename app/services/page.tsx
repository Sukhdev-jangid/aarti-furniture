import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
import CTASection from "../components/CTASection";
import { SERVICES } from "../lib/data";

export const metadata: Metadata = {
  title: "Our Services — Aarti Furniture",
  description:
    "Explore our high-quality solutions: Wooden Furniture, Aluminium Furniture, Farma Doors, G.I Grid Ceilings, and Puff Ceilings.",
};

export default function ServicesPage() {
  return (
    <div className="bg-bg text-ink">
      <PageBanner
        title="Our services"
        subtitle="From a single room to a full turnkey fit-out, here's how we can help bring your space to life."
        ticker="What we offer"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="space-y-20">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug}>
              <div
                id={service.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="aspect-[4/3] rounded-[2.5rem] bg-white border border-black/5 shadow-md flex items-center justify-center p-8 sm:p-12 overflow-hidden">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${service.tone}`} />
                  )}
                </div>
                <div>
                  <span className="font-display text-4xl text-accent/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted">
                    {service.body}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deep"
                  >
                    Enquire about this service <span aria-hidden>→</span>
                  </Link>
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
