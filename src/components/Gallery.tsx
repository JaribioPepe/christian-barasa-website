"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { gallery } from "@/lib/content";

const aspectFor = (span: string) =>
  span === "wide"
    ? "aspect-[3/2]"
    : span === "tall"
      ? "aspect-[3/4]"
      : "aspect-square";

export default function Gallery() {
  const images = gallery.images;
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, next, prev]);

  return (
    <section id="gallery" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <SectionHeading
          index={gallery.index}
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          intro={gallery.intro}
        />

        <div className="mt-16 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {images.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 4) * 0.05}>
              <button
                onClick={() => setIndex(i)}
                className={`group relative block w-full overflow-hidden ${aspectFor(
                  img.span
                )}`}
                aria-label={`View ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.1s] ease-luxe group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/40" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <span className="font-serif text-sm italic text-ivory">
                    {img.caption}
                  </span>
                </div>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 5v14M5 12h14" stroke="#F8F6F2" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 md:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center text-ivory/70 transition-colors hover:text-ivory"
              aria-label="Close"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/60 transition-colors hover:text-champagne md:left-8"
              aria-label="Previous image"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.figure
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[72vh] w-full">
                <Image
                  src={images[index].src}
                  alt={images[index].caption}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-5 text-center font-serif text-base italic text-ivory/80">
                {images[index].caption}
                <span className="ml-3 not-italic text-stone">
                  {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-ivory/60 transition-colors hover:text-champagne md:right-8"
              aria-label="Next image"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
