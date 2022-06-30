import dynamic from "next/dynamic";
import Head from "next/head";
// import Layout from "components/layout/Layout";
const Layout = dynamic(() => import("components/layout/Layout"));

// Redux
import { wrapper } from "@redux/store";

// Import all css file here
import "styles/assets/bootstrap.min.css";
import "styles/assets/furniture-icons.min.css";
import "styles/assets/linear-icons.min.css";
import "styles/assets/font-awesome.min.css";
import "styles/assets/magnific-popup.min.css";
import "styles/assets/owl.carousel.min.css";
// import "styles/assets/ion-range-slider.css";

import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
