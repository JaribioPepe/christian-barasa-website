"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { voyage, type VoyageNode } from "@/lib/content";

// Viewport window over the equirectangular world (matches node x/y in content).
const WIN = { minX: 22, minY: 20, w: 50, h: 38 };

function pct(n: VoyageNode) {
  return {
    left: ((n.x - WIN.minX) / WIN.w) * 100,
    top: ((n.y - WIN.minY) / WIN.h) * 100,
  };
}

// Quadratic-bezier arc bowing toward the top, like a great-circle route.
function arcPath(a: VoyageNode, b: VoyageNode) {
  const cx = (a.x + b.x) / 2;
  const cy = Math.min(a.y, b.y) - Math.abs(a.x - b.x) * 0.22 - 3;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export default function GlobalVoyage() {
  const nodes = voyage.nodes;
  const [active, setActive] = useState(nodes[nodes.length - 1].id);
  const activeNode = nodes.find((n) => n.id === active) ?? nodes[0];

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="voyage"
      className="grain relative overflow-hidden bg-charcoal py-28 text-ivory md:py-40"
    >
      {/* ambient gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-champagne/10 blur-[120px]" />

      <div className="relative mx-auto max-w-editorial px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4">
              <span className="section-index">{voyage.index}</span>
              <span className="h-px w-10 bg-champagne/60" aria-hidden />
              <span className="eyebrow-light">{voyage.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg mt-6 text-balance text-ivory">
              {voyage.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede mt-6 text-pretty text-stone-light">
              {voyage.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          {/* Chart */}
          <Reveal>
            <div className="relative aspect-[16/11] w-full select-none rounded-sm border border-ivory/10 bg-charcoal-900/60">
              {/* SVG: graticule + routes */}
              <svg
                viewBox={`${WIN.minX} ${WIN.minY} ${WIN.w} ${WIN.h}`}
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden
              >
                <defs>
                  <pattern
                    id="dots"
                    width="2"
                    height="2"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="0.3" cy="0.3" r="0.12" fill="#C8A96A" opacity="0.18" />
                  </pattern>
                </defs>

                <rect
                  x={WIN.minX}
                  y={WIN.minY}
                  width={WIN.w}
                  height={WIN.h}
                  fill="url(#dots)"
                />

                {/* graticule */}
                {Array.from({ length: 7 }).map((_, i) => {
                  const x = WIN.minX + (WIN.w / 6) * i;
                  return (
                    <line
                      key={`v${i}`}
                      x1={x}
                      y1={WIN.minY}
                      x2={x}
                      y2={WIN.minY + WIN.h}
                      stroke="#F8F6F2"
                      strokeWidth="0.5"
                      opacity="0.05"
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
                {Array.from({ length: 6 }).map((_, i) => {
                  const y = WIN.minY + (WIN.h / 5) * i;
                  return (
                    <line
                      key={`h${i}`}
                      x1={WIN.minX}
                      y1={y}
                      x2={WIN.minX + WIN.w}
                      y2={y}
                      stroke="#F8F6F2"
                      strokeWidth="0.5"
                      opacity="0.05"
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}

                {/* routes */}
                {nodes.slice(0, -1).map((n, i) => (
                  <motion.path
                    key={`arc${i}`}
                    d={arcPath(n, nodes[i + 1])}
                    fill="none"
                    stroke="#C8A96A"
                    strokeWidth="1"
                    strokeDasharray="1.4 1.2"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.4, ease }}
                  />
                ))}
              </svg>

              {/* compass rose */}
              <div className="pointer-events-none absolute right-4 top-4 opacity-40">
                <svg width="46" height="46" viewBox="0 0 100 100" aria-hidden>
                  <circle cx="50" cy="50" r="46" fill="none" stroke="#C8A96A" strokeWidth="1" />
                  <circle cx="50" cy="50" r="34" fill="none" stroke="#C8A96A" strokeWidth="0.5" opacity="0.5" />
                  <polygon points="50,8 56,50 50,46 44,50" fill="#C8A96A" />
                  <polygon points="50,92 56,50 50,54 44,50" fill="#C8A96A" opacity="0.4" />
                  <polygon points="8,50 50,44 46,50 50,56" fill="#C8A96A" opacity="0.4" />
                  <polygon points="92,50 50,44 54,50 50,56" fill="#C8A96A" opacity="0.4" />
                  <text x="50" y="6" textAnchor="middle" fontSize="9" fill="#C8A96A">
                    N
                  </text>
                </svg>
              </div>

              {/* nodes */}
              {nodes.map((n, i) => {
                const p = pct(n);
                const isActive = n.id === active;
                return (
                  <button
                    key={n.id}
                    onClick={() => setActive(n.id)}
                    onMouseEnter={() => setActive(n.id)}
                    className="group absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${p.left}%`, top: `${p.top}%` }}
                    aria-label={`${n.place} — ${n.role}`}
                  >
                    {isActive && (
                      <span className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-champagne/40" />
                    )}
                    <span
                      className={`relative block h-3 w-3 rounded-full border transition-all duration-500 ease-luxe ${
                        isActive
                          ? "scale-125 border-champagne bg-champagne"
                          : "border-champagne/70 bg-charcoal group-hover:bg-champagne/70"
                      }`}
                    />
                    <span
                      className={`absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-sans text-[0.6rem] uppercase tracking-[0.2em] transition-colors duration-500 ${
                        isActive ? "text-champagne-light" : "text-ivory/45"
                      }`}
                    >
                      {n.place}
                    </span>
                    <span className="absolute -left-1 -top-5 font-serif text-xs text-champagne/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Detail card */}
          <div className="relative min-h-[15rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease }}
                className="border-l border-champagne/40 pl-8"
              >
                <p className="eyebrow-light">{activeNode.period}</p>
                <h3 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
                  {activeNode.place}
                </h3>
                <p className="mt-2 font-serif text-lg italic text-champagne-light">
                  {activeNode.region}
                </p>
                <p className="mt-5 font-sans text-sm uppercase tracking-[0.18em] text-stone-light">
                  {activeNode.role}
                </p>
                <p className="mt-5 max-w-md font-serif text-lg leading-relaxed text-ivory/75">
                  {activeNode.blurb}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* node selector (mobile-friendly, also a legend) */}
        <div className="mt-10 flex flex-wrap gap-3">
          {nodes.map((n, i) => (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`flex items-center gap-2 border px-4 py-2 font-sans text-[0.65rem] uppercase tracking-[0.18em] transition-all duration-500 ease-luxe ${
                n.id === active
                  ? "border-champagne bg-champagne/10 text-champagne-light"
                  : "border-ivory/15 text-ivory/55 hover:border-ivory/40"
              }`}
            >
              <span className="font-serif text-champagne">
                {String(i + 1).padStart(2, "0")}
              </span>
              {n.place}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
