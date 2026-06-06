'use client';

import { Button } from '@heroui/react';
import { useState } from 'react';
import { site } from '../content';

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <a href={`mailto:${site.email}`} className="cta">
        {site.email} <span aria-hidden="true">→</span>
      </a>
      <Button
        variant="tertiary"
        onPress={() => {
          navigator.clipboard?.writeText(site.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? 'Copied!' : 'Copy email'}
      </Button>
    </div>
  );
}
