import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
 return (
  <>
   <Head>
    <title>QuaCode</title>
   </Head>

   <GlobalStyle />
   <ThemeProvider theme={Theme}>
    <Component {...pageProps} />
   </ThemeProvider>
  </>
 )
}
