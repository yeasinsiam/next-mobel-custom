import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&amp;subset=latin-ext&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
            rel="stylesheet"
          />

          {/* <script src="https://code.jquery.com/jquery-3.2.1.min.js" defer />
          <script src="static/jquery.owl.carousel.min.js" defer />
          <script src="static/main.js" defer /> */}

          {/* <Script
            src={}
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"
            // strategy="beforeInteractive"
          /> */}
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
