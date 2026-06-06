import { Reveal } from './Reveal';

export function PageHeader({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="shell pt-16 pb-10 sm:pt-24">
      <Reveal>
        <p className="mono-label">
          {index} — {label}
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="glow-accent mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
        </Reveal>
      )}
    </section>
  );
}
