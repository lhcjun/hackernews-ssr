import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="hacker news with Next.js" />
          <meta name="keywords" content="next react ssr seo" />
          <meta name="author" content="lhcjun" />
          <link rel="stylesheet" href="/static/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
