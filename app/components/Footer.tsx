import Link from "next/link";
import { CONTACT } from "../lib/data";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#14120f] pt-24 pb-16 text-white border-t border-white/5">
      {/* Background Image with Warm Overlay - Optimized for high visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Modern luxury interior background"
          className="w-full h-full object-cover opacity-60 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#14120f]/60 to-[#14120f]" />
      </div>

      {/* Top Section: CTA header */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center mb-20 lg:px-10">
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Your dream space awaits
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
          Whether you're exploring our projects or envisioning something custom, we're here to bring your dream to life.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="group flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/20 bg-black/60 text-center text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-500 hover:scale-105 hover:bg-accent hover:border-accent hover:shadow-[0_0_30px_rgba(206,168,111,0.3)]"
          >
            <span className="leading-tight">Get Your</span>
            <span className="leading-tight">Free</span>
            <span className="leading-tight">Quote</span>
          </Link>
        </div>
      </div>

      {/* Giant Background Text: FURNITURE (fades from white to transparent) */}
      <div className="absolute bottom-60 left-1/2 -translate-x-1/2 z-0 w-full text-center pointer-events-none select-none hidden md:block">
        <span className="font-sans font-black uppercase text-[15vw] leading-none tracking-[0.03em] bg-gradient-to-t from-white/30 via-white/10 to-transparent bg-clip-text text-transparent">
          Furniture
        </span>
      </div>

      {/* Floating White Card Container (Wider layout) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[2.5rem] bg-white text-ink p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-black/5">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* Left Column: Stylized Logo and Tagline (Centered) */}
            <div className="flex flex-col items-center text-center gap-6 lg:col-span-4 lg:border-r lg:border-black/10 lg:pr-12">
              <Link href="/" className="flex flex-col items-center text-center group">
                {/* Custom Stylized House SVG Logo */}
                <svg
                  className="w-16 h-16 text-accent mb-2 transition-transform duration-500 group-hover:scale-105"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 45 L50 15 L85 45"
                    stroke="#cea86f"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 45 V80 C25 82.2 26.8 84 29 84 H71 C73.2 84 75 82.2 75 80 V45"
                    stroke="#cea86f"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50 84 V52 M38 65 H62 M50 38 C46 38 43 41 43 45 C43 49 50 54 50 54 C50 54 57 49 57 45 C57 41 54 38 50 38 Z"
                    stroke="#cea86f"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#cea86f"
                    fillOpacity="0.15"
                  />
                </svg>
                <div className="flex flex-col items-center">
                  <span className="font-display text-2xl font-extrabold tracking-tight text-ink uppercase">
                    Aarti
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-accent mt-0.5">
                    Furniture
                  </span>
                </div>
              </Link>
              <p className="text-xs leading-relaxed text-neutral-400 font-normal max-w-[280px]">
                We are creators of transformative spaces that inspire, innovate, and endure.
              </p>
            </div>

            {/* Middle Column: Links columns (Left Aligned, Semi-bold) */}
            <div className="grid grid-cols-2 gap-6 lg:col-span-4 lg:border-r lg:border-black/10 lg:px-12 text-sm font-semibold text-neutral-800">
              <div className="flex flex-col gap-4">
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Our services
                </Link>
                <Link href="/projects" className="hover:text-accent transition-colors">
                  Our Projects
                </Link>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blogs
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="#" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="#" className="hover:text-accent transition-colors">
                  Support Center
                </Link>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Right Column: Large underlined contacts & social links */}
            <div className="flex flex-col justify-between gap-8 lg:col-span-4 lg:pl-12">
              <div className="flex flex-col gap-5">
                <div>
                  <a
                    href={CONTACT.phoneHref}
                    className="font-sans text-2xl lg:text-3xl font-extrabold tracking-tight text-ink hover:text-accent transition-colors border-b-2 border-accent/40 pb-1.5 inline-block"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-sans text-lg lg:text-xl font-bold text-ink hover:text-accent transition-colors border-b-2 border-accent/40 pb-1.5 inline-block break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              
              {/* Horizontal Social Links */}
              <div className="flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                <a href="#" className="hover:text-accent transition-colors">Facebook</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors">Youtube</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              </div>
            </div>

          </div>

          {/* Bottom copyright & credits bar */}
          <div className="mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-medium text-center sm:text-left">
            <p>© 2026 Aarti Furniture. All Rights Reserved.</p>
            <p>Designed & Developed By Digital Creation Technology Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
