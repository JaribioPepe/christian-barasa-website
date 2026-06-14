import Reveal from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

/**
 * The recurring editorial section header: index numeral + tracked eyebrow,
 * a hairline, then a large display title. Used across every section so the
 * whole site reads with one typographic voice.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
}: Props) {
  const isDark = tone === "dark";
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      <Reveal>
        <div
          className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}
        >
          <span className="section-index">{index}</span>
          <span className="h-px w-10 bg-champagne/60" aria-hidden />
          <span className={isDark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h2
          className={`display-lg mt-6 text-balance ${
            isDark ? "text-ivory" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={0.16}>
          <p
            className={`lede mt-6 text-pretty ${
              isDark ? "text-stone-light" : "text-stone"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
