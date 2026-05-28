import ContactPage from '../src/pages/Contact';
import PageShell from '../src/components/PageShell';
import SEOHead from '../src/components/SEOHead';

export default function Contact() {
  return (
    <>
      <SEOHead page="contact" />
      <PageShell>
        <ContactPage />
      </PageShell>
    </>
  );
}
