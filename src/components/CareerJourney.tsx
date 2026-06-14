"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { journey, type Chapter } from "@/lib/content";

function ChapterRow({ chapter, i }: { chapter: Chapter; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-8%", "8%"]
  );

  const flipped = i % 2 === 1;

  return (
    <div
      ref={ref}
      className="relative grid items-center gap-8 py-14 md:grid-cols-2 md:gap-16 md:py-20"
    >
      {/* Image */}
      <Reveal
        className={`relative ${flipped ? "md:order-2" : "md:order-1"}`}
        y={40}
      >
        <div className="relative aspect-[5/6] w-full overflow-hidden md:aspect-[4/5]">
          <motion.div style={{ y: imgY }} className="absolute -inset-y-[8%] inset-x-0">
            <Image
              src={chapter.image}
              alt={`${chapter.company}, ${chapter.location}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
          {/* year tab */}
          <div className="absolute left-0 top-8 bg-charcoal px-5 py-3">
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-champagne-light">
              {chapter.years}
            </span>
          </div>
        </div>
      </Reveal>

      {/* Text */}
      <div
        className={`relative ${flipped ? "md:order-1 md:pr-10" : "md:order-2 md:pl-10"}`}
      >
        {/* watermark numeral */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-16 right-0 font-display text-[8rem] leading-none text-charcoal/[0.04] md:text-[11rem]"
        >
          {chapter.index}
        </span>

        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            {chapter.accent && (
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-champagne" />
            )}
            {chapter.location}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h3 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
            {chapter.company}
          </h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-2 font-serif text-xl italic text-champagne-deep">
            {chapter.role}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-charcoal/75">
            {chapter.narrative}
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <ul className="mt-7 space-y-3">
            {chapter.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-2 h-px w-5 flex-shrink-0 bg-champagne" aria-hidden />
                <span className="font-sans text-sm leading-relaxed text-charcoal/65">
                  {h}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}

export default function CareerJourney() {
  return (
    <section id="journey" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <SectionHeading
          index={journey.index}
          eyebrow={journey.eyebrow}
          title={journey.title}
        />

        <div className="mt-10 divide-y divide-charcoal/10 md:mt-16">
          {journey.chapters.map((chapter, i) => (
            <ChapterRow key={chapter.index} chapter={chapter} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
