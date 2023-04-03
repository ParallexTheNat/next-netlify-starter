import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nataniel</title>
        <link rel="icon" href="/Nat_LOGO.ico" />
      </Head>

      <main>
        <Header title="Hello">Hellos</Header>
      </main>
    </div>
  )
}
