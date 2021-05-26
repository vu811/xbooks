import Head from 'next/head';
import { Layout } from '../components/Layout';
import '../node_modules/antd/dist/antd.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>XBOOKS - Buy, sell and giveaway books.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
