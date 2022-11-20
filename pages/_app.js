import NomadeProvider from '../components/context/nomadeProvider.js'
import Header from '../components/Header/index.jsx'
import Layout from '../components/Layout/index.jsx'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <NomadeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NomadeProvider>
  )
}

export default MyApp
