"use client";

import { site } from "@/lib/content";

export default function CvBar() {
  return (
    <div className="no-print sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-editorial items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/"
          className="group flex items-center gap-3 text-charcoal"
          aria-label="Back to site"
        >
          <span className="font-sans text-base transition-transform duration-500 ease-luxe group-hover:-translate-x-1">
            &larr;
          </span>
          <span className="font-display text-lg tracking-wide">{site.name}</span>
        </a>

        <div className="flex items-center gap-3">
          <a href="/#connect" className="nav-link hidden text-charcoal/70 hover:text-charcoal sm:inline">
            Let&rsquo;s Connect
          </a>
          <button
            onClick={() => window.print()}
            className="btn-solid"
            aria-label="Download or print this CV as PDF"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
