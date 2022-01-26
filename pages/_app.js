import '../styles/globals.css'
import SmoothScroll from "./components/smoothScroll/smoothScroll"

function MyApp({ Component, pageProps }) {
  return     <SmoothScroll><Component {...pageProps} /></SmoothScroll>
}

export default MyApp
