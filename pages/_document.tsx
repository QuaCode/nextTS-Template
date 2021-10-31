import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
 static async getInitialProps(ctx: DocumentContext) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
   ctx.renderPage = () =>
    originalRenderPage({
     enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
    })

   const initialProps = await Document.getInitialProps(ctx)
   return {
    ...initialProps,
    styles: (
     <>
      {initialProps.styles}
      {sheet.getStyleElement()}
     </>
    ),
   }
  } finally {
   sheet.seal()
  }
 }

 render() {
  return (
   <Html lang='es'>
    <Head>
     <link
      href='https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/fira-code.min.css'
      rel='stylesheet'
     />
    </Head>
    <body id='App'>
     <Main />
     <NextScript />
    </body>
   </Html>
  )
 }
}

export default MyDocument
