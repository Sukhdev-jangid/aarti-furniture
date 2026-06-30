"use client";

import { useState } from "react";

const INQUIRIES = [
  "Residential Interior Design",
  "Commercial Interior Design",
  "Space Planning & Layout",
  "Turnkey Solutions",
  "Custom Furniture & Styling",
  "Something else",
];

export default function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-bg p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent">
          ✓
        </div>
        <h3 className="font-display text-2xl text-ink">Thank you!</h3>
        <p className="mt-2 text-muted">
          We&apos;ve received your enquiry and will call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-bg p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-ink" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="rounded-lg border border-line bg-bg-alt px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-ink" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 ..."
            className="rounded-lg border border-line bg-bg-alt px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className="text-sm font-medium text-ink" htmlFor="inquiry">
          What are you interested in?
        </label>
        <select
          id="inquiry"
          name="inquiry"
          className="rounded-lg border border-line bg-bg-alt px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
        >
          {INQUIRIES.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <label className="text-sm font-medium text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your space and vision..."
          className="resize-none rounded-lg border border-line bg-bg-alt px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-accent px-6 py-3.5 font-semibold text-white transition-colors hover:bg-accent-deep"
      >
        Get a call back
      </button>
    </form>
  );
}
