'use client';

import { motion } from 'motion/react';
import NextLink from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { site, about, projects } from './content';
import { SocialLinks } from './components/SocialLinks';
import { Reveal } from './components/Reveal';

const EASE = [0.21, 0.5, 0.27, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const roleSequence = site.roles.flatMap((r) => [`${r}.`, 1800]);
const dna = 'ACGTACGTTGCAACGTAGCTTAGCGGATCAACGTTACGGCATGCAACGTAGCTTAGC';

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        {/* decorative vertical sequence */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-0 hidden h-full select-none font-mono text-xs leading-5 tracking-widest text-line-strong [writing-mode:vertical-rl] lg:block"
        >
          {dna}
        </span>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="shell flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20"
        >
          <motion.p variants={item} className="mono-label">
            {`// ${site.location} · open to collaboration`}
          </motion.p>

          <motion.h1
            variants={item}
            className="glow-accent mt-5 font-display text-[clamp(3rem,12vw,9rem)] font-bold uppercase leading-[0.92] tracking-tighter"
          >
            {site.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 font-display text-2xl text-muted sm:text-4xl"
          >
            I&apos;m a{' '}
            <TypeAnimation
              sequence={roleSequence}
              repeat={Infinity}
              speed={50}
              className="font-semibold text-accent"
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-fg/80"
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <NextLink href="/projects" className="cta">
              View projects <span aria-hidden="true">→</span>
            </NextLink>
            <NextLink href="/contact" className="cta-ghost">
              Get in touch
            </NextLink>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- ABOUT TEASER ---------- */}
      <section className="shell border-t border-line py-20">
        <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
          <Reveal>
            <p className="mono-label">{'// 01 — about'}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <p className="font-display text-2xl leading-snug sm:text-3xl">{about.lead}</p>
              <NextLink
                href="/about"
                className="mono-label mt-6 inline-block transition-colors hover:text-accent"
              >
                More about me <span aria-hidden="true">↗</span>
              </NextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- SELECTED WORK ---------- */}
      <section className="shell border-t border-line py-20">
        <Reveal>
          <div className="flex items-end justify-between">
            <p className="mono-label">{'// 02 — selected work'}</p>
            <NextLink
              href="/projects"
              className="mono-label transition-colors hover:text-accent"
            >
              all projects ↗
            </NextLink>
          </div>
        </Reveal>

        <ul className="mt-8 divide-y divide-line border-y border-line">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.06}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-surface/40 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div className="flex items-baseline gap-4">
                  <span className="section-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">
                    {p.name}
                  </span>
                </div>
                <span className="max-w-md text-muted sm:text-right">{p.tagline}</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
