import ProjectsPage from '../src/pages/Projects';
import PageShell from '../src/components/PageShell';
import SEOHead from '../src/components/SEOHead';

export default function Projects() {
  return (
    <>
      <SEOHead page="projects" />
      <PageShell>
        <ProjectsPage />
      </PageShell>
    </>
  );
}
