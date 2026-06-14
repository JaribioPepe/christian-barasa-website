"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import { connect, site } from "@/lib/content";

export default function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(connect.reasons[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry — ${interest}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "w-full border-0 border-b border-charcoal/25 bg-transparent py-3 font-serif text-lg text-charcoal placeholder:text-stone/60 focus:border-champagne focus:outline-none focus:ring-0 transition-colors duration-500";

  return (
    <section id="connect" className="relative bg-ivory py-28 md:py-40">
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Left: invitation */}
          <div>
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-index">{connect.index}</span>
                <span className="h-px w-10 bg-champagne/60" aria-hidden />
                <span className="eyebrow">{connect.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display-lg mt-6 text-balance text-charcoal">
                {connect.title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lede mt-6 max-w-md text-pretty text-stone">
                {connect.intro}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-9 space-y-3">
                {connect.reasons.map((r) => (
                  <li key={r} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-champagne" aria-hidden />
                    <span className="font-sans text-sm uppercase tracking-[0.12em] text-charcoal/70">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-12 flex items-center gap-6">
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
                <div>
                  <p className="font-display text-xl text-charcoal">{site.name}</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-2 block font-serif text-base text-charcoal/70 transition-colors hover:text-champagne-deep"
                  >
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="block font-serif text-base text-charcoal/70 transition-colors hover:text-champagne-deep"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: inquiry form */}
          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="border border-charcoal/10 bg-white/40 p-8 md:p-10"
            >
              <p className="font-display text-2xl text-charcoal">
                Private Inquiry
              </p>
              <p className="mt-2 font-serif text-base text-stone">
                Tell me a little about your needs and I will respond personally.
              </p>

              <div className="mt-8 space-y-7">
                <div>
                  <label
                    htmlFor="name"
                    className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-champagne-deep"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-champagne-deep"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-champagne-deep"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className={`${fieldClass} cursor-pointer`}
                  >
                    {connect.reasons.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-sans text-[0.62rem] uppercase tracking-[0.22em] text-champagne-deep"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I be of service?"
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              <button type="submit" className="btn-solid mt-9 w-full justify-center">
                Send Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
