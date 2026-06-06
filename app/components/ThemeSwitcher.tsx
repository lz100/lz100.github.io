'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon } from '../../public/MoonIcon';
import { SunIcon } from '../../public/SunIcon';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-default/40"
    >
      {isDark ? <MoonIcon /> : <SunIcon style={{ color: '#f5a524' }} />}
    </button>
  );
}
