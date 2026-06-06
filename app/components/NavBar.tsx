'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { nav, site } from '../content';
import { ThemeSwitcher } from './ThemeSwitcher';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-line bg-bg/70 backdrop-blur-md">
      <nav className="shell flex h-16 items-center justify-between">
        <NextLink href="/" className="group flex items-baseline gap-2" aria-label={site.name}>
          <span className="font-mono text-sm font-bold tracking-[0.2em] text-fg">
            {site.initials}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
          <span className="font-display text-lg font-semibold text-fg">{site.name}</span>
        </NextLink>

        <div className="hidden items-center gap-7 sm:flex">
          {nav.map((item, i) => {
            const active = pathname === item.href;
            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={`mono-label transition-colors hover:text-accent ${active ? 'text-accent' : ''}`}
              >
                <span className="text-accent/60">{String(i + 1).padStart(2, '0')}</span>{' '}
                {item.label}
              </NextLink>
            );
          })}
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-fg"
          >
            <span className="text-xl leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col border-t border-line sm:hidden">
          {nav.map((item, i) => (
            <NextLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mono-label shell border-b border-line py-4 transition-colors hover:text-accent"
            >
              <span className="text-accent/60">{String(i + 1).padStart(2, '0')}</span>{' '}
              {item.label}
            </NextLink>
          ))}
        </div>
      )}
    </header>
  );
}
