"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT } from "../lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-4 transition-all duration-300 md:p-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-3 transition-all duration-500 rounded-full border ${
          scrolled
            ? "bg-white/95 border-line shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur"
            : "bg-white/90 border-transparent shadow-[0_4px_20px_rgb(0,0,0,0.02)] backdrop-blur-sm"
        }`}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-display text-2xl font-bold tracking-tight text-ink">
            Aarti
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent mt-1">
            Furniture
          </span>
        </Link>

        {/* MIDDLE LINKS */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-ink/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT CALL & CTA */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="text-sm font-medium text-ink/80 transition-colors hover:text-accent"
          >
            <span className="text-muted text-xs mr-1 font-normal">Call Us:</span>
            <span className="font-semibold underline decoration-accent/40 decoration-2 underline-offset-4">{CONTACT.phone}</span>
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent"
          >
            Visit Us
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full hover:bg-line/20 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-ink transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* MOBILE DROPDOWN DRAWER */}
      <div
        className={`absolute inset-x-4 top-[84px] z-40 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-2xl transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block border-b border-line/60 py-3.5 font-display text-xl text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-4">
          <a
            href={CONTACT.phoneHref}
            className="text-center text-sm font-medium text-ink/80"
          >
            <span className="text-muted block text-xs mb-1">Call Us:</span>
            <span className="font-semibold text-base">{CONTACT.phone}</span>
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-ink py-3.5 text-center font-semibold text-white transition-all duration-300 hover:bg-accent"
          >
            Visit Us
          </Link>
        </div>
      </div>
    </header>
  );
}
