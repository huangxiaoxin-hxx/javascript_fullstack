import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// Hoc
function withLog(Comp) {
  return (props) => {
    console.log(props)
    return <Comp {...props} />
  }
}

class myDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
    const sheet = new ServerStyleSheet()

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => (props) => sheet.collectStyles(<App {...props} />),
        // enhanceComponent: Component => withLog(Component)
      })
      const props = await Document.getInitialProps(ctx)
      return {
        ...props,
        styles: <>{props.styles}{sheet.getStyleElement()}</>
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`.test { color: red }`}</style>
        </Head>
        <body className="test">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default myDocument