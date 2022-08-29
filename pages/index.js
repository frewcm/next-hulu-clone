import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Hulu</title>
      </Head>
      <Header />
      <NavBar />
    </div>
  )
}
