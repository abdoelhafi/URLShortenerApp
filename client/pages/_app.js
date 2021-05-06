import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/utils/Navbar' 
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
        integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o=" crossorigin="anonymous" />
  </Head>
  <Navbar />
  <Component {...pageProps} />
  </>
}

export default MyApp
