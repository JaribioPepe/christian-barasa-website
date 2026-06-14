"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxe ${
        solid
          ? "bg-ivory/90 backdrop-blur-md border-b border-charcoal/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-editorial items-center justify-between px-6 py-5 md:px-10">
        <a
          href="/"
          className={`group flex flex-col leading-none transition-colors ${
            solid ? "text-charcoal" : "text-ivory"
          }`}
          aria-label={`${site.name} — home`}
        >
          <span className="font-display text-xl tracking-wide md:text-2xl">
            {site.name}
          </span>
          <span
            className={`mt-1 font-sans text-[0.6rem] uppercase tracking-[0.32em] ${
              solid ? "text-champagne-deep" : "text-champagne-light"
            }`}
          >
            {site.titles.join(" · ")}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link transition-colors ${
                solid
                  ? "text-charcoal/80 hover:text-charcoal"
                  : "text-ivory/85 hover:text-ivory"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#connect"
            className={`btn-ghost ${
              solid ? "text-champagne-deep" : "text-ivory"
            } hover:bg-champagne hover:text-charcoal hover:border-champagne`}
          >
            Let&rsquo;s Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden ${
            solid ? "text-charcoal" : "text-ivory"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-7 bg-current transition-all duration-500 ease-luxe ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-7 bg-current transition-all duration-500 ease-luxe ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-charcoal lg:hidden"
          >
            <div className="grain relative flex h-full flex-col justify-center px-8">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.06,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-2 text-ivory"
                    >
                      <span className="section-index">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-12 border-t border-ivory/15 pt-8">
                <a
                  href={`mailto:${site.email}`}
                  className="block font-serif text-lg text-champagne-light"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="mt-1 block font-serif text-lg text-stone-light"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
