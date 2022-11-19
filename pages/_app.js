import NomadeProvider from '../components/context/nomadeProvider.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <NomadeProvider>
      <Component {...pageProps} />
    </NomadeProvider>
  )
}

export default MyApp
