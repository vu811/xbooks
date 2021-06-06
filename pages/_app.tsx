import Head from 'next/head';
import { DefaultLayout } from '../components/Layouts';
import '../node_modules/antd/dist/antd.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <>
      <Head>
        <title>XBOOKS - Buy, sell and giveaway books.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Layout>
        <Component {...pageProps} headerText={Component.HeaderText} />
      </Layout>
    </>
  );
}

export default MyApp;
