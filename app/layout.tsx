import './styles/globals.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, Hanken_Grotesk, Space_Mono } from 'next/font/google';
import { Providers } from './providers';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { site } from './content';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});
const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lezhang.me'),
  title: {
    default: `${site.name} — ${site.roles[0]} & ${site.roles[1]}`,
    template: `%s · ${site.name}`,
  },
  description: site.tagline,
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: site.name,
    description: site.tagline,
    url: 'https://lezhang.me',
    siteName: site.name,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${hanken.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen font-sans text-fg antialiased">
        <Providers>
          <div className="grain" aria-hidden="true" />
          <NavBar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
