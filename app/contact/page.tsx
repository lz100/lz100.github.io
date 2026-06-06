import type { Metadata } from 'next';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { CopyEmail } from '../components/CopyEmail';
import { SocialLinks } from '../components/SocialLinks';
import { contact } from '../content';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <PageHeader index="04" label="contact" title="Let's talk" intro={contact.blurb} />

      <section className="shell pb-20">
        <Reveal>
          <div className="panel p-8 sm:p-10">
            <p className="mono-label">{'// email'}</p>
            <div className="mt-5">
              <CopyEmail />
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="mono-label">{'// elsewhere'}</p>
              <SocialLinks className="mt-4" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
