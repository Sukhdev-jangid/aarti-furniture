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
                  ☎
                </span>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted">
                    Phone
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-lg text-ink hover:text-accent"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  ✉
                </span>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lg text-ink hover:text-accent"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-accent">
                  ⌖
                </span>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted">
                    Studio
                  </p>
                  <p className="text-lg text-ink">{CONTACT.location}</p>
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
