import type { Metadata } from 'next';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { research } from '../content';

export const metadata: Metadata = { title: 'Research' };

export default function ResearchPage() {
  return (
    <>
      <PageHeader index="02" label="research" title="Research" intro={research.intro} />

      <section className="shell pb-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {research.areas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06}>
              <div className="panel h-full p-6">
                <span className="section-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{area.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{area.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="mono-label">{'// publications'}</p>
          </Reveal>
          <ul className="mt-8 border-t border-line">
            {research.publications.map((pub, i) => (
              <Reveal as="li" key={i} delay={i * 0.05}>
                <article className="grid gap-2 border-b border-line py-6 sm:grid-cols-[0.08fr_0.92fr]">
                  <span className="section-index pt-1">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    {pub.url ? (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-xl font-semibold transition-colors hover:text-accent"
                      >
                        {pub.title} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <h3 className="font-display text-xl font-semibold">{pub.title}</h3>
                    )}
                    <p className="mt-1 text-fg/75">{pub.authors}</p>
                    <p className="mono-label mt-1">{pub.venue}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
