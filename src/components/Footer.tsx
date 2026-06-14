import { nav, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal-900 pb-10 pt-20 text-ivory">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">{site.name}</p>
            <p className="mt-3 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-champagne">
              {site.titles.join(" · ")}
            </p>
            <p className="mt-6 max-w-sm font-serif text-lg italic leading-relaxed text-ivory/60">
              &ldquo;{site.tagline}&rdquo;
            </p>
          </div>

          <div>
            <p className="eyebrow-light">Explore</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-serif text-lg text-ivory/70 transition-colors hover:text-champagne-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow-light">Connect</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-serif text-lg text-ivory/70 transition-colors hover:text-champagne-light"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="font-serif text-lg text-ivory/70 transition-colors hover:text-champagne-light"
                >
                  {site.phone}
                </a>
              </li>
              <li className="pt-2 font-sans text-sm text-ivory/45">
                {site.nationality} · {site.languages.join(", ")}
              </li>
              <li className="font-sans text-sm text-ivory/45">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 sm:flex-row">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-ivory/40">
            © {year} {site.name}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-ivory/40">
            Luxury Hospitality · Worldwide
          </p>
          <a
            href="#top"
            className="nav-link text-ivory/55 transition-colors hover:text-champagne-light"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
