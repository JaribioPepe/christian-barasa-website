import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { credentials } from "@/lib/content";

export default function Credentials() {
  return (
    <section className="grain relative overflow-hidden bg-charcoal py-28 text-ivory md:py-40">
      <div className="relative mx-auto max-w-editorial px-6 md:px-10">
        <SectionHeading
          index={credentials.index}
          eyebrow={credentials.eyebrow}
          title={credentials.title}
          intro={credentials.intro}
          tone="dark"
        />

        {/* Forbes feature */}
        <Reveal>
          <div className="mt-16 grid items-center gap-10 border border-champagne/25 bg-charcoal-700/40 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
            <div className="bg-ivory p-6">
              <div className="relative aspect-[16/7] w-full">
                <Image
                  src="/images/forbes-2026.jpg"
                  alt="Forbes Travel Guide Five-Star 2026"
                  fill
                  sizes="(max-width: 768px) 80vw, 30vw"
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <p className="eyebrow-light">{credentials.forbes.label}</p>
              <h3 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
                <span className="text-champagne-light">
                  {credentials.forbes.rating}
                </span>{" "}
                Recognition
                <span className="ml-3 align-middle font-serif text-2xl text-stone-light">
                  {credentials.forbes.year}
                </span>
              </h3>
              <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed text-ivory/80">
                {credentials.forbes.note}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Credential cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <article className="group relative h-full border border-ivory/12 bg-charcoal-700/30 p-7 transition-colors duration-700 ease-luxe hover:border-champagne/50">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-champagne">
                    {c.meta}
                  </span>
                  {/* seal mark */}
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-champagne/40 transition-colors duration-700 group-hover:bg-champagne/10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M20 6 9 17l-5-5"
                        stroke="#C8A96A"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl leading-snug text-ivory">
                  {c.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ivory/60">
                  {c.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
