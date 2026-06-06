import type { Metadata } from 'next';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { about, experience } from '../content';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <PageHeader index="01" label="about" title="About" intro={about.lead} />

      <section className="shell pb-10">
        <div className="grid gap-12 md:grid-cols-[0.62fr_0.38fr]">
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-lg leading-relaxed text-fg/85">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="panel p-6">
              <p className="mono-label">{'// focus'}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-fg/80"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="mono-label">{'// experience'}</p>
          </Reveal>
          <ul className="mt-8 border-t border-line">
            {experience.map((e, i) => (
              <Reveal as="li" key={`${e.org}-${i}`} delay={i * 0.06}>
                <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[0.26fr_0.74fr]">
                  <span className="mono-label pt-1">{e.period}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {e.role} <span className="text-accent">/ {e.org}</span>
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{e.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
