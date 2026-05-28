import App from '../src/App';
import SEOHead from '../src/components/SEOHead';
import { structuredData } from '../src/utils/seo';

export default function IndexPage() {
  return (
    <>
      <SEOHead page="home" structuredJSON={structuredData.person} />
      <App />
    </>
  );
}
