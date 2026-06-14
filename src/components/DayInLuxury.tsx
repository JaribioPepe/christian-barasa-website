import Image from "next/image";
import Reveal from "./Reveal";
import { dayInLuxury } from "@/lib/content";

export default function DayInLuxury() {
  return (
    <section className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: heading + image */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-index">{dayInLuxury.index}</span>
                <span className="h-px w-10 bg-champagne/60" aria-hidden />
                <span className="eyebrow">{dayInLuxury.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-6 text-balance text-charcoal">
                {dayInLuxury.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede mt-6 max-w-md text-pretty text-stone">
                {dayInLuxury.intro}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative mt-10 hidden aspect-[5/4] w-full overflow-hidden lg:block">
                <Image
                  src="/images/suite-modern.jpg"
                  alt="A luxury suite prepared at first light"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10" />
              </div>
            </Reveal>
          </div>

          {/* Right: timeline */}
          <ol className="relative border-l border-charcoal/15 pl-8 md:pl-12">
            {dayInLuxury.moments.map((m, i) => (
              <Reveal as="li" key={m.time} delay={i * 0.05} className="relative pb-12 last:pb-0">
                {/* node */}
                <span className="absolute -left-[2.15rem] top-1.5 flex h-3 w-3 items-center justify-center md:-left-[3.15rem]">
                  <span className="h-3 w-3 rounded-full border border-champagne bg-ivory" />
                  <span className="absolute h-3 w-3 rounded-full bg-champagne/30" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className="font-display text-2xl text-champagne-deep">
                    {m.time}
                  </span>
                  <h3 className="font-display text-2xl text-charcoal">
                    {m.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-lg font-serif text-lg leading-relaxed text-charcoal/70">
                  {m.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
