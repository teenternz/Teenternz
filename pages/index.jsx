import Head from 'next/head'
import Vanilla_JS_Home from '../components/vanilla-js/vanilla-js-home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Teenternz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        {/* Vanilla JS imports */}
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        
      </Head>

      <div>
        <Vanilla_JS_Home />
      </div>

    </>
  )
}