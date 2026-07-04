import type { Metadata } from "next";
import Reveal from "../components/Reveal";
import PageBanner from "../components/PageBanner";
import { SERVICES } from "../lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions — Aarti Furniture",
  description: "Terms and conditions for consulting, custom designing, and execution services at Aarti Furniture.",
};

const TERMS_SECTIONS = [
  {
    title: "1. Agreement of Services",
    content: "By engaging Aarti Furniture for designing, manufacturing, or execution work, you agree to comply with and be bound by the following terms. We specialize in custom wooden furniture, aluminium fittings, and corporate/residential interior space planning.",
  },
  {
    title: "2. Design Proposals & Approvals",
    content: "All design concepts, 3D layouts, material selections, and floor plans must be formally signed off by the client prior to starting fabrication. Any changes requested after approval may incur additional charges and cause project delivery timeline adjustments.",
  },
  {
    title: "3. Pricing & Payments",
    content: "All quotations are valid for 30 days. Standard projects require a 50% advance deposit to initiate sourcing and custom manufacturing, 40% during the mid-execution stage, and the remaining 10% upon final styling and project handover.",
  },
  {
    title: "4. Execution & Handover",
    content: "We coordinate with vetted execution specialists and craftsmen to complete the projects. Handover timelines are estimated in good faith but are subject to variables like raw material availability and site accessibility.",
  },
  {
    title: "5. Intellectual Property Rights",
    content: "All design drawings, sketches, and digital visual renderings developed by Aarti Furniture remain our intellectual property and may not be reused or distributed without written permission.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-bg text-ink">
      <PageBanner
        title="Terms & Conditions"
        subtitle="Please read our terms and conditions carefully before commencing design and execution projects."
        ticker="Terms & Conditions"
        marqueeItems={SERVICES.map((s) => s.title)}
      />

      {/* Terms Content */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <div className="space-y-12">
          {TERMS_SECTIONS.map((section, idx) => (
            <Reveal key={section.title} delay={idx * 100}>
              <div className="border-b border-line/45 pb-8">
                <h2 className="font-display text-2xl text-ink font-semibold mb-4">
                  {section.title}
                </h2>
                <p className="text-muted leading-relaxed text-sm sm:text-base font-normal">
                  {section.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
