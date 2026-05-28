import AboutPage from '../src/pages/About';
import PageShell from '../src/components/PageShell';
import SEOHead from '../src/components/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead page="about" />
      <PageShell>
        <AboutPage />
      </PageShell>
    </>
  );
}
