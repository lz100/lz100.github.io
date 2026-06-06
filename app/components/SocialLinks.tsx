import { site } from '../content';

const LABELS: Record<string, string> = {
  github: 'GitHub',
  linkedin: 'LinkedIn',
  scholar: 'Scholar',
  twitter: 'Twitter',
  orcid: 'ORCID',
};

export function SocialLinks({ className = '' }: { className?: string }) {
  const entries = Object.entries(site.links).filter(([, url]) => url);

  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {entries.map(([key, url]) => (
        <li key={key}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label transition-colors hover:text-accent"
          >
            {LABELS[key] ?? key} <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
