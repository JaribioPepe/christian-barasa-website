import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { expertise } from "@/lib/content";

export default function SignatureExpertise() {
  return (
    <section
      id="expertise"
      className="grain relative overflow-hidden bg-charcoal-900 py-28 text-ivory md:py-40"
    >
      <div className="relative mx-auto max-w-editorial px-6 md:px-10">
        <SectionHeading
          index={expertise.index}
          eyebrow={expertise.eyebrow}
          title={expertise.title}
          intro={expertise.intro}
          tone="dark"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.08}>
              <article className="group relative h-[24rem] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.2s] ease-luxe group-hover:scale-110"
                />
                {/* base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent transition-opacity duration-700 group-hover:from-charcoal/95" />
                <div className="absolute inset-0 bg-charcoal/20 transition-colors duration-700 group-hover:bg-champagne/10" />

                {/* content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="font-serif text-sm text-champagne-light">
                    {item.n}
                  </span>
                  <span className="mt-3 h-px w-8 bg-champagne transition-all duration-700 ease-luxe group-hover:w-14" />
                  <h3 className="mt-4 font-display text-2xl leading-tight text-ivory">
                    {item.title}
                  </h3>
                  {/* Body: always visible on touch, reveals on hover on desktop */}
                  <p className="mt-3 overflow-hidden font-sans text-sm leading-relaxed text-ivory/75 transition-all duration-700 ease-luxe md:max-h-0 md:text-ivory/0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:text-ivory/75 md:group-hover:opacity-100 md:text-[0.92rem]">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
