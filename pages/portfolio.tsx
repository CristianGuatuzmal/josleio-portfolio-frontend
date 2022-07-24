import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout, PortfolioSectionDisplayer } from '../src/components';
import styles from '../styles/Portfolio.module.scss';

const Portfolio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Josleio portfolio</title>
        <meta name="description" content="Art portfolio for Josleio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <PortfolioSectionDisplayer />
      </MainLayout>
    </>
  );
}

export default Portfolio
