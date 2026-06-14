import Image from "next/image";
import Reveal from "./Reveal";
import { philosophy } from "@/lib/content";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative bg-ivory py-28 md:py-40"
    >
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Text */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-index">{philosophy.index}</span>
                <span className="h-px w-10 bg-champagne/60" aria-hidden />
                <span className="eyebrow">{philosophy.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display-lg mt-6 max-w-xl text-balance text-charcoal">
                {philosophy.title}
              </h2>
            </Reveal>

            <div className="mt-8 max-w-xl space-y-6">
              {philosophy.paragraphs.map((p, i) => (
                <Reveal delay={0.16 + i * 0.08} key={i}>
                  <p className="font-serif text-lg leading-relaxed text-charcoal/75 md:text-xl">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Image */}
          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={philosophy.image}
                alt={philosophy.imageCaption}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden max-w-[200px] bg-charcoal px-6 py-5 md:block">
              <p className="font-serif text-sm italic leading-snug text-ivory/85">
                {philosophy.imageCaption}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Principles */}
        <div className="mt-24 border-t border-charcoal/10 pt-16 md:mt-32">
          <ul className="grid gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-5">
            {philosophy.principles.map((pr, i) => (
              <Reveal as="li" delay={i * 0.07} key={pr.title} className="group">
                <span className="font-serif text-2xl text-champagne">
                  {pr.n}
                </span>
                <span className="mt-4 block h-px w-8 bg-charcoal/20 transition-all duration-500 ease-luxe group-hover:w-14 group-hover:bg-champagne" />
                <h3 className="mt-5 font-display text-xl text-charcoal">
                  {pr.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/60">
                  {pr.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
