import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi my name is Sabir  enrolled in metaverse and web3.o corse</p>
        <p>
          This is a sample website build by me {' '}
          <a href="https://github.com/Sabir5911">Here is my github link</a>.
        </p>
      </section>
    </Layout>
  );
}