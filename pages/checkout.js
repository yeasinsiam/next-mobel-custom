import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelector } from "react-redux";
import { wrapper } from "@redux/store";
import { setCheckoutProduct } from "@redux/productSlice";

// components
const CheckoutSection = dynamic(() =>
  import("components/checkout/CheckoutSection")
);

//DB
import { getProduct } from "db/controllers/productController";

function Checkout() {
  const product = useSelector((state) => state.product.checkout.product);

  if (!product) {
    return <div className={`page-loader`}></div>;
  }

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      {/*  <!-- ========================  Main header ======================== --> */}
      <section
        className="main-header"
        style={{ backgroundImage: "url(assets/images/gallery-2.webp)" }}
      >
        <header>
          <div className="container">
            <h1 className="h2 title">Checkout</h1>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <Link href="/">
                  <a>
                    <span className="icon icon-home"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/checkout">
                  <a className="active">checkout</a>
                </Link>
              </li>
            </ol>
          </div>
        </header>
      </section>

      {/* <!-- ========================  Step Wraper ======================== --> */}

      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className="col-md-6 active">
                <span data-text="Checkout"></span>
              </li>
              <li className="col-md-6">
                <span data-text="Order"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- ========================  Checkout ======================== --> */}

      <section className="checkout">
        <div className="container">
          {/* <!-- ========================  Cart wrapper ======================== --> */}

          <div className="cart-wrapper">
            <div className="clearfix">
              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <Image
                      src={product.images[0].url}
                      alt={product.title}
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">{product.title}</a>
                  </div>
                  <div>{product.types[0].title}</div>
                </div>
                <div className="quantity">
                  <span>&nbsp;</span>
                </div>
                <div className="price">
                  <span>&nbsp;</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ========================  Checkout form ======================== --> */}

          <CheckoutSection />
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req: { cookies } }) => {
      let product = null;
      const checkoutProductId = cookies["checkout-product"];
      if (checkoutProductId) {
        product = JSON.parse(
          JSON.stringify(await getProduct(checkoutProductId))
        );
      }
      if (!product) {
        return {
          notFound: true,
        };
      }
      store.dispatch(setCheckoutProduct(product));
    }
);

export default Checkout;
