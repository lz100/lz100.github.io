'use client';

import NextLink from 'next/link';
import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

const menuItems: Record<string, string> = {
  Research: '/research',
  Projects: '/projects',
  Contact: '/contact',
  About: '/about',
};

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-default/40 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <NextLink href="/" className="text-lg font-semibold text-foreground">
          Le Zhang
        </NextLink>

        <div className="hidden items-center gap-8 sm:flex">
          {Object.entries(menuItems).map(([name, href]) => (
            <NextLink
              key={name}
              href={href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {name}
            </NextLink>
          ))}
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground"
          >
            <span className="text-xl leading-none">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-default/40 px-4 py-2 sm:hidden">
          {Object.entries(menuItems).map(([name, href]) => (
            <NextLink
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2 text-foreground/80 transition-colors hover:text-foreground"
            >
              {name}
            </NextLink>
          ))}
        </div>
      )}
    </header>
  );
}
