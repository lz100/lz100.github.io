import NextLink from 'next/link';

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="mono-label">{'// error 404'}</p>
      <h1 className="glow-accent mt-4 font-display text-7xl font-bold sm:text-9xl">404</h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        This page wandered off the sequence. Let&apos;s get you back on track.
      </p>
      <NextLink href="/" className="cta mt-8">
        <span aria-hidden="true">←</span> Back home
      </NextLink>
    </section>
  );
}
