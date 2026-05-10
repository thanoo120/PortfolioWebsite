import Head from 'next/head';
import App from '../src/App';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Sanmugarasa Thanoogithan | Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Software Engineering undergraduate portfolio showcasing full-stack, backend, and Spring Boot development projects."
        />
        <meta
          name="keywords"
          content="Sanmugarasa Thanoogithan, Full-Stack Developer, Spring Boot Developer, Backend Developer, React Portfolio"
        />
      </Head>
      <App />
    </>
  );
}
