import '../styles/globals.css'
import {useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import AOS from "aos"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
