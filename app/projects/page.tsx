import type { Metadata } from 'next';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { projects } from '../content';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="03"
        label="projects"
        title="Projects"
        intro="Selected open-source tools, packages, and experiments."
      />

      <section className="shell pb-10">
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex h-full flex-col p-6 transition-colors hover:border-accent"
              >
                <div className="flex items-baseline justify-between">
                  <span className="section-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mono-label">{p.year}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold transition-colors group-hover:text-accent">
                  {p.name} <span aria-hidden="true">↗</span>
                </h3>
                <p className="mt-2 flex-grow leading-relaxed text-muted">{p.tagline}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line-strong px-2.5 py-0.5 font-mono text-[0.7rem] text-fg/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
