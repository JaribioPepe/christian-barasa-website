import type { Metadata } from "next";
import Image from "next/image";
import CvBar from "@/components/CvBar";
import Reveal from "@/components/Reveal";
import { site, cv } from "@/lib/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: `The professional curriculum vitae of ${site.name} — Butler, Suite Ambassador, and Guest Experience Specialist in ultra-luxury hospitality.`,
  alternates: { canonical: "/cv" },
};

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="section-index">{index}</span>
      <span className="h-px w-10 bg-champagne/60" aria-hidden />
      <span className="eyebrow">{title}</span>
    </div>
  );
}

export default function CvPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <CvBar />

      <main className="cv-sheet mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        {/* Header */}
        <Reveal>
          <header className="flex flex-col-reverse gap-8 border-b border-charcoal/15 pb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Curriculum Vitae</p>
              <h1 className="display-lg mt-4 text-charcoal">{site.name}</h1>
              <p className="mt-3 font-serif text-xl italic text-champagne-deep">
                {site.titles.join("  ·  ")}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm text-charcoal/70">
                <a href={`mailto:${site.email}`} className="hover:text-champagne-deep">
                  {site.email}
                </a>
                <a href={`tel:${site.phoneHref}`} className="hover:text-champagne-deep">
                  {site.phone}
                </a>
                <a href={site.url} className="text-champagne-deep hover:text-champagne">
                  {site.url.replace(/^https?:\/\//, "")}
                </a>
                <span>{site.location}</span>
              </div>
            </div>

            <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden bg-beige">
              <Image
                src="/images/christian-portrait.jpg"
                alt={site.name}
                fill
                sizes="96px"
                className="object-cover object-top"
              />
              <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/15" />
            </div>
          </header>
        </Reveal>

        {/* Profile */}
        <section className="cv-block mt-12">
          <Reveal>
            <SectionLabel index="01" title="Professional Profile" />
            <p className="mt-6 max-w-3xl font-serif text-lg leading-relaxed text-charcoal/80">
              {cv.profile}
            </p>
          </Reveal>
        </section>

        {/* Competencies */}
        <section className="cv-block mt-14">
          <Reveal>
            <SectionLabel index="02" title="Core Competencies" />
          </Reveal>
          <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {cv.competencies.map((c, i) => (
              <Reveal as="li" key={c} delay={(i % 2) * 0.05}>
                <span className="flex items-start gap-3">
                  <span className="mt-2 h-px w-5 flex-shrink-0 bg-champagne" aria-hidden />
                  <span className="font-sans text-[0.95rem] leading-relaxed text-charcoal/75">
                    {c}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="cv-block mt-14">
          <Reveal>
            <SectionLabel index="03" title="Professional Experience" />
          </Reveal>

          <div className="mt-8 space-y-10">
            {cv.experience.map((role, i) => (
              <Reveal key={role.company + i} delay={0.04}>
                <article className="cv-role border-l border-charcoal/15 pl-6 md:pl-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-2xl text-charcoal">
                      {role.company}
                    </h3>
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-deep">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 font-serif text-lg italic text-charcoal/70">
                    {role.role} &middot; {role.location}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 h-px w-4 flex-shrink-0 bg-champagne/70" aria-hidden />
                        <span className="font-sans text-[0.95rem] leading-relaxed text-charcoal/70">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Credentials + Education (two columns) */}
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <section className="cv-block">
            <Reveal>
              <SectionLabel index="04" title="Certifications" />
            </Reveal>
            <ul className="mt-6 space-y-3">
              {cv.certifications.map((c, i) => (
                <Reveal as="li" key={c} delay={i * 0.04}>
                  <span className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M20 6 9 17l-5-5" stroke="#C8A96A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-sans text-[0.95rem] leading-relaxed text-charcoal/75">
                      {c}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ul>
          </section>

          <section className="cv-block">
            <Reveal>
              <SectionLabel index="05" title="Education" />
            </Reveal>
            <ul className="mt-6 space-y-6">
              {cv.education.map((e, i) => (
                <Reveal as="li" key={e.title} delay={i * 0.05}>
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-champagne-deep">
                    {e.year}
                  </p>
                  <p className="mt-2 font-display text-lg text-charcoal">{e.title}</p>
                  <p className="font-serif text-base italic text-charcoal/65">{e.place}</p>
                </Reveal>
              ))}
            </ul>

            <div className="mt-8 border-t border-charcoal/10 pt-6">
              <p className="eyebrow">Personal</p>
              <dl className="mt-4 space-y-2">
                {cv.personal.map((p) => (
                  <div key={p.label} className="flex gap-3 font-sans text-sm">
                    <dt className="w-28 flex-shrink-0 text-charcoal/45">{p.label}</dt>
                    <dd className="text-charcoal/75">{p.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </div>

        {/* References */}
        <section className="cv-block mt-14 border-t border-charcoal/15 pt-10">
          <Reveal>
            <p className="font-serif text-lg italic text-charcoal/60">
              References available upon request.
            </p>
            <p className="mt-6 font-sans text-xs uppercase tracking-[0.22em] text-charcoal/40">
              {site.name} &middot; {site.role}
            </p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
