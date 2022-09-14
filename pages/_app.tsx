import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'Styles/globalStyles'
import { themeStyle } from 'Styles/Theme'

export default function App({ Component, pageProps }: AppProps) {
 return (
  <>
   <Head>
    <title>QuaCode</title>
   </Head>

   <GlobalStyle />
   <ThemeProvider theme={themeStyle}>
    <Component {...pageProps} />
   </ThemeProvider>
  </>
 )
}
