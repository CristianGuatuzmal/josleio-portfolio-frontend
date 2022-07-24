import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../src/components';
import styles from '../styles/About.module.scss';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Josleio portfolio</title>
        <meta name="description" content="Information about Josleio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className={styles.container}>
          <h2>This is the second test</h2>
        </div>
      </MainLayout>
    </>
  );
}

export default About;
