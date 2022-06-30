import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import Cookies from "js-cookie";
import Head from "next/head";
import dynamic from "next/dynamic";

// Components
const Breadcrumb = dynamic(() => import("components/Breadcrumb"));
const SingleProduct = dynamic(() => import("components/product/SingleProduct"));

import { wrapper } from "@redux/store";
// Database
import { connectDB } from "db/dbConnect";
import { getProduct } from "db/controllers/productController";
//redux

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div className={`page-loader`}></div>;
  }

  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      {/*  <!-- ========================  Main header ======================== --> */}
      <Breadcrumb
        backgroundImageLink="/assets/images/gallery-2.jpg"
        containerHtml={
          <>
            <h1 className="h2 title">{product.title}</h1>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <Link href="/">
                  <a>
                    <span className="icon icon-home"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/product">
                  <a className="active">Products</a>
                </Link>
              </li>
            </ol>
          </>
        }
        layoutTwo
      />
      {/*  <!-- ========================  Product ======================== --> */}
      <SingleProduct product={product} />
      {/*<!-- ========================  Product info popup - quick view ======================== -->  */}
      <div className="popup-main mfp-hide" id="productid1">
        <div className="product">
          <div className="popup-title">
            <div className="h1 title">
              Laura <small>product category</small>
            </div>
          </div>

          <div className="owl-product-gallery">
            <Image
              src="/assets/images/product-1.webp"
              alt="product image"
              width={640}
              height={480}
              layout="responsive"
            />
            <Image
              src="/assets/images/product-2.webp"
              alt="product image"
              width={640}
              height={480}
              layout="responsive"
            />
            <Image
              src="/assets/images/product-3.webp"
              alt="product image"
              width={640}
              height={480}
              layout="responsive"
            />
          </div>

          <div className="popup-content">
            <div className="product-info-wrapper">
              <div className="row">
                <div className="col-sm-6">
                  <div className="info-box">
                    <strong>Maifacturer</strong>
                    <span>Brand name</span>
                  </div>
                  <div className="info-box">
                    <strong>Materials</strong>
                    <span>Wood, Leather, Acrylic</span>
                  </div>
                  <div className="info-box">
                    <strong>Availability</strong>
                    <span>
                      <i className="fa fa-check-square-o"></i> in stock
                    </span>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="info-box">
                    <strong>Available Colors</strong>
                    <div className="product-colors clearfix">
                      <span className="color-btn color-btn-red"></span>
                      <span className="color-btn color-btn-blue checked"></span>
                      <span className="color-btn color-btn-green"></span>
                      <span className="color-btn color-btn-gray"></span>
                      <span className="color-btn color-btn-biege"></span>
                    </div>
                  </div>
                  <div className="info-box">
                    <strong>Choose size</strong>
                    <div className="product-colors clearfix">
                      <span className="color-btn color-btn-biege">S</span>
                      <span className="color-btn color-btn-biege checked">
                        M
                      </span>
                      <span className="color-btn color-btn-biege">XL</span>
                      <span className="color-btn color-btn-biege">XXL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="popup-table">
            <div className="popup-cell">
              <div className="price">
                <span className="h3">
                  $ 1999,00 <small>$ 2999,00</small>
                </span>
              </div>
            </div>
            <div className="popup-cell">
              <div className="popup-buttons">
                <a href="product.html">
                  <span className="icon icon-eye"></span>{" "}
                  <span className="hidden-xs">View more</span>
                </a>
                <a href="#">
                  <span className="icon icon-cart"></span>{" "}
                  <span className="hidden-xs">Buy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params: { productSlug } }) => {
      console.log("Static Server Ruins");
      await connectDB();

      // console.log(productSlug);
      const singleProduct = JSON.parse(
        JSON.stringify(await getProduct(productSlug))
      );

      return {
        props: {
          product: singleProduct,
        },
        notFound: !singleProduct,
      };
    }
);

export default Product;
