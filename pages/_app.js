import Layout from "../components/layouts/Layout";
// Import all css file here
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/assets/bootstrap.min.css";
import "../styles/assets/furniture-icons.min.css";
import "../styles/assets/linear-icons.min.css";
import "../styles/assets/font-awesome.min.css";
import "../styles/assets/owl.carousel.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;