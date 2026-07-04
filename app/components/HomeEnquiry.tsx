"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";

const INQUIRIES = [
  "Wooden Furniture",
  "Aluminium Furniture",
  "Farma Door",
  "G.I Grid Ceiling",
  "Puff Ceiling",
];

export default function HomeEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: INQUIRIES[0],
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-6 py-24 lg:px-10 bg-bg">
      <div
        className="mx-auto max-w-7xl relative overflow-hidden bg-[#122218] shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
        style={{
          borderRadius: "2.5rem",
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 35px), 160px calc(100% - 35px), 120px 100%, 0 100%)",
        }}
      >
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/enquiry_bg.png"
            alt="Luxury green living room interior"
            className="w-full h-full object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Floating White Card Form Container */}
        <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-12 flex justify-center items-center">
          <Reveal type="scale" className="w-full max-w-4xl">
            <div className="relative w-full bg-white/95 backdrop-blur-md rounded-[2.5rem] pt-8 px-8 pb-20 sm:pt-12 sm:px-12 sm:pb-28 lg:pt-14 lg:px-14 lg:pb-36 shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-black/5">
              
              {/* Blueprint watermark illustrations restricted to card rounded corners */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
                <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-[0.06] select-none">
                  <img
                    src="/service_space_cutout.png"
                    alt="Blueprint design sketch"
                    className="w-full h-full object-contain object-left scale-110"
                  />
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.06] select-none scale-x-[-1]">
                  <img
                    src="/service_space_cutout.png"
                    alt="Blueprint design sketch"
                    className="w-full h-full object-contain object-right scale-110"
                  />
                </div>
              </div>

              <div className="relative z-10 w-full">
                {/* Header Badge */}
                <div className="flex justify-center mb-6">
                  <span className="inline-flex items-center gap-1.5 border border-accent/40 text-[9px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full text-accent bg-[#cea86f]/5">
                    &lt; Enquiry &gt;
                  </span>
                </div>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-3xl text-accent animate-bounce">
                      ✓
                    </div>
                    <h3 className="font-display text-3xl text-ink font-semibold">Thank You!</h3>
                    <p className="mt-3 text-sm text-neutral-500 max-w-md mx-auto">
                      We've received your request. Our interior design specialists will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="w-full">
                    {/* Heading */}
                    <h2 className="font-display text-3xl sm:text-4xl text-ink font-semibold text-center tracking-tight leading-tight max-w-2xl mx-auto mb-10">
                      Get specialist advice for your furniture & ceiling projects
                    </h2>

                    {/* Inputs Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 mb-8">
                      {/* Name Input */}
                      <div className="flex flex-col">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2.5 ml-2 block">
                          Your Name*
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full rounded-full bg-neutral-100/70 border border-black/5 px-6 py-4 text-sm text-ink outline-none transition-all focus:bg-white focus:border-accent/40 focus:ring-2 focus:ring-accent/10 placeholder-neutral-400 font-medium"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="flex flex-col">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2.5 ml-2 block">
                          Email*
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@example.com"
                          className="w-full rounded-full bg-neutral-100/70 border border-black/5 px-6 py-4 text-sm text-ink outline-none transition-all focus:bg-white focus:border-accent/40 focus:ring-2 focus:ring-accent/10 placeholder-neutral-400 font-medium"
                        />
                      </div>

                      {/* Phone Input */}
                      <div className="flex flex-col">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2.5 ml-2 block">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full rounded-full bg-neutral-100/70 border border-black/5 px-6 py-4 text-sm text-ink outline-none transition-all focus:bg-white focus:border-accent/40 focus:ring-2 focus:ring-accent/10 placeholder-neutral-400 font-medium"
                        />
                      </div>

                      {/* Custom Dropdown Select */}
                      <div className="flex flex-col relative" ref={dropdownRef}>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2.5 ml-2 block">
                          You inquiry about...
                        </label>
                        
                        {/* Dropdown Toggle Button */}
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className={`w-full rounded-full bg-neutral-100/70 border border-black/5 px-6 py-4 text-sm text-ink outline-none flex items-center justify-between cursor-pointer select-none transition-all ${
                            isDropdownOpen ? "bg-white border-accent/40 ring-2 ring-accent/10" : ""
                          }`}
                        >
                          <span className="font-medium">{formData.inquiry}</span>
                          <svg
                            className={`h-4 w-4 text-neutral-400 transition-transform duration-300 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>

                        {/* Floating Options Menu */}
                        {isDropdownOpen && (
                          <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 bg-white border border-black/5 rounded-[1.5rem] shadow-xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                            {INQUIRIES.map((item) => (
                              <div
                                key={item}
                                onClick={() => {
                                  setFormData({ ...formData, inquiry: item });
                                  setIsDropdownOpen(false);
                                }}
                                className={`px-6 py-2.5 text-sm text-left text-ink transition-colors cursor-pointer font-medium hover:bg-neutral-50 ${
                                  formData.inquiry === item ? "text-[#cea86f] bg-amber-50/10" : ""
                                }`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Form Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/5">
                      <div className="text-xs text-neutral-400 text-center sm:text-left leading-relaxed font-medium">
                        We're excited to connect with you!<br />
                        Required fields are marked *
                      </div>
                      
                      <button
                        type="submit"
                        className="group relative flex items-center justify-between gap-6 rounded-full bg-[#cea86f] hover:bg-[#b8935c] text-white font-semibold text-xs tracking-wider uppercase pl-8 pr-2 py-2 transition-all duration-300 hover:shadow-lg"
                      >
                        <span>Get A Call Back</span>
                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-ink text-xs font-bold transition-transform duration-300 group-hover:translate-x-0.5 shadow-sm">
                          ↗
                        </div>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
