"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { hero } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-charcoal"
    >
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={hero.image}
          alt="A private superyacht at sea"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Tonal overlays for legibility */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/30"
      />
      <div className="absolute inset-0 bg-charcoal/20" />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-editorial px-6 md:px-10"
      >
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="eyebrow-light"
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="mt-7 text-ivory">
            <span className="sr-only">
              {hero.headlineTop} {hero.headlineBottom}
            </span>
            <motion.span
              aria-hidden
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.12, ease }}
              className="display-xl block"
            >
              {hero.headlineTop}
            </motion.span>
            <motion.span
              aria-hidden
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.26, ease }}
              className="display-xl mt-1 block italic text-champagne-light"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {hero.headlineBottom}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.44, ease }}
            className="mt-8 max-w-xl font-serif text-lg leading-relaxed text-ivory/80 md:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.58, ease }}
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={hero.ctaPrimary.href}
              className="btn-solid justify-center"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="btn-ghost justify-center text-ivory hover:border-champagne hover:text-champagne-light"
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] text-ivory/60">
            Scroll
          </span>
          <span className="relative flex h-12 w-px overflow-hidden bg-ivory/20">
            <span className="absolute inset-x-0 top-0 h-4 animate-scroll-hint bg-champagne" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
