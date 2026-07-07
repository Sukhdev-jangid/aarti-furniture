import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
import EnquiryForm from "../components/EnquiryForm";
import { CONTACT } from "../lib/data";

export const metadata: Metadata = {
  title: "Contact — Aarti Furniture",
  description:
    "Get in touch with Aarti Furniture. Request a free, no-obligation consultation for your space.",
};

export default function ContactPage() {
  return (
    <div className="bg-bg text-ink">
      <PageBanner
        title="Contact"
        subtitle="Tell us about your space and what you have in mind. We'll get back to you to discuss the next steps."
        ticker="Get in touch"
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Quick enquiry
            </span>
            <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
              Get a call back
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Share a few details and our team will reach out — no obligation,
              just a friendly conversation about your project.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted">
                    Phone
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-lg text-ink hover:text-accent font-semibold"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lg text-ink hover:text-accent font-semibold"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted">
                    Location
                  </p>
                  <p className="text-lg text-ink font-semibold">{CONTACT.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
