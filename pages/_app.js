import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '/components/Header'
import Nav from '/components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
      <div className="grid grid-cols-1 mx-6 min-w-min justify-items-center place-items-center">
        <Head>
          <title>Chef Book</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* Selected Category Nav */}
        <Nav />
      <Component {...pageProps} />

      <Footer />
    </div>
  ) 
}

export default MyApp
