"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open, and mark the off-screen
  // menu as inert so it is not focusable/clickable when closed.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const el = menuRef.current;
    if (el) {
      if (open) el.removeAttribute("inert");
      else el.setAttribute("inert", "");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Ivory bar only when scrolled AND the menu is closed. While the menu is open
  // the header stays transparent so the dark overlay shows through and the
  // close button / logo render in ivory (visible on the charcoal menu).
  const solid = scrolled && !open;

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
            className={`mt-1 hidden font-sans text-[0.6rem] uppercase tracking-[0.32em] sm:block ${
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
          aria-controls="mobile-menu"
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

      {/* Mobile overlay menu — an always-mounted, fully opaque panel that slides
          via a CSS transform. No opacity fade, so the hero never ghosts through;
          no dependency on JS animation for the menu to be visible. */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`grain fixed inset-0 z-40 flex flex-col overflow-y-auto bg-charcoal px-8 pb-12 pt-28 transition-transform duration-500 ease-luxe lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="m-auto w-full max-w-sm">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-1.5 text-ivory"
                >
                  <span className="section-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-ivory/15 pt-8">
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
      </div>
    </header>
  );
}
