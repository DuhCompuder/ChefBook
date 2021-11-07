import Head from 'next/head'
import Footer from '../components/Footer'
import Recipes from '../components/Recipes'
// import Header from '/components/Header'
// import Nav from '/components/Nav'

export default function Home() {
  return (
    <div className="grid grid-cols-1 mx-6 min-w-min justify-items-center place-items-center">
      {/* <Head>
        <title>Chef Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
   
      <Nav /> */}
      {/* Recipies alternating based on Food Catagory - clicked for more detail */}
  
      <Recipes />
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
