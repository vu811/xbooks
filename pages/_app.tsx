import Head from 'next/head'
import { Provider } from 'next-auth/client'
import { DefaultLayout } from '../components/layouts'
import { SignLayout } from 'components/layouts'
import '../node_modules/antd/dist/antd.css'
import '../styles/globals.scss'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const { isSignLayout, headerText } = pageProps
  const Layout = isSignLayout ? SignLayout : DefaultLayout
  return (
    <>
      <Head>
        <title>XBOOKS - Buy, sell and giveaway books.</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Layout headerText={headerText}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </>
  )
}

export default MyApp
