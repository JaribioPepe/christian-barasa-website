import Image from "next/image";
import Reveal from "./Reveal";
import { signature } from "@/lib/content";

export default function Portrait() {
  return (
    <section className="grain relative overflow-hidden bg-charcoal py-28 text-ivory md:py-36">
      {/* ambient champagne glow */}
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-champagne/10 blur-[130px]" />

      <div className="relative mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Framed portrait — a matted gallery print on a dark wall */}
          <Reveal className="relative mx-auto w-full max-w-[20rem]">
            <div className="relative">
              {/* offset champagne frame for depth */}
              <span
                className="absolute -inset-3 border border-champagne/30"
                aria-hidden
              />
              {/* the print */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white shadow-2xl shadow-black/50 ring-1 ring-champagne/40">
                <Image
                  src={signature.portrait}
                  alt="Portrait of Christian Mark Barasa, luxury hospitality professional"
                  fill
                  sizes="(max-width: 1024px) 80vw, 30vw"
                  className="object-cover object-top"
                />
              </div>
              {/* name placard */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap border border-champagne/30 bg-charcoal px-6 py-3">
                <p className="text-center font-sans text-[0.6rem] uppercase tracking-[0.3em] text-champagne-light">
                  {signature.placard}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Statement */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-champagne/60" aria-hidden />
                <span className="eyebrow-light">{signature.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display-lg mt-6 max-w-xl text-balance text-ivory">
                {signature.title}
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl font-serif text-lg leading-relaxed text-ivory/75 md:text-xl">
                {signature.statement}
              </p>
            </Reveal>

            {/* Credibility stats */}
            <Reveal delay={0.24}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-ivory/10 pt-10">
                {signature.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl text-champagne-light md:text-4xl">
                      {s.value}
                    </dt>
                    <dd className="mt-2 font-sans text-[0.65rem] uppercase tracking-[0.18em] text-ivory/55">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
