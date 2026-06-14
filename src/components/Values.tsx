import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { values } from "@/lib/content";

export default function Values() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-28 text-ivory md:py-40">
      {/* faint atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <Image
          src="/images/ocean-horizon.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal/80 to-charcoal-900" />

      <div className="relative mx-auto max-w-editorial px-6 md:px-10">
        <SectionHeading
          index={values.index}
          eyebrow={values.eyebrow}
          title={values.title}
          tone="dark"
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
          {values.items.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 0.07}>
              <div className="group h-full bg-charcoal-900 p-9 transition-colors duration-700 ease-luxe hover:bg-charcoal-700 md:p-11">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl text-champagne/80">
                    {v.n}
                  </span>
                  <span className="h-px flex-1 bg-ivory/10 transition-colors duration-700 group-hover:bg-champagne/40" />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ivory">
                  {v.title}
                </h3>
                <p className="mt-3 font-serif text-lg leading-relaxed text-ivory/65">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
