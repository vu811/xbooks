import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../node_modules/antd/dist/antd.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>X Books - Buy, sell and giveaway books.</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <Header />

      <div className='container'>
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
