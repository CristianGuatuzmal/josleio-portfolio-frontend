import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '../src/components';
import styles from '../styles/Contact.module.scss';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Josleio portfolio</title>
        <meta name="description" content="Contact information for Josleio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className={styles.container}>
          <h2>This is the Final Test</h2>
        </div>
      </MainLayout>
    </>
  );
}

export default Contact;
