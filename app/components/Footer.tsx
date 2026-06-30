import Link from "next/link";
import { NAV_LINKS, CONTACT } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-semibold">
                Aarti
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Furniture
              </span>
            </div>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              Thoughtful interior design and turnkey execution for homes and
              businesses that deserve to feel personal.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Support
            </h4>
            <ul className="mt-4 space-y-3 text-muted">
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Get a quote</Link></li>
              <li><Link href="/" className="hover:text-accent">Terms</Link></li>
              <li><Link href="/" className="hover:text-accent">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-ink">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-accent">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.location}</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {["Fb", "Ig", "Yt", "X"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-sm text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row">
          <p>© 2026 Aarti Furniture. All rights reserved.</p>
          <p>Designed & built with care.</p>
        </div>
      </div>
    </footer>
  );
}
