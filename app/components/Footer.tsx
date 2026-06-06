import { site } from '../content';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-24 border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-fg">{site.name}</p>
          <p className="mono-label mt-2">{`// ${site.roles.join(' · ')}`}</p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <SocialLinks />
          <p className="mono-label">
            © {year} — built with Next.js + HeroUI
          </p>
        </div>
      </div>
    </footer>
  );
}
