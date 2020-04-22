import App from 'next/app'
import Layout from '../components/Layout'

import 'antd/dist/antd.css'

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    // console.log('app init')
    let pageProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps
    }
  }

  render() {
    // 对应pages下面的所以页面
    const { Component, pageProps } = this.props
    // console.log(Component)
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp