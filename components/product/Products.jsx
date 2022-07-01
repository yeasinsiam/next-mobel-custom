import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// libs
import owlCaroselJs from "libs/jquery.owl.carousel";
import strecherItemJs from "libs/jquery.strecherItem";
import magnificPopupJs from "libs/jquery.magnific-popup";

// redux
import { useSelector } from "react-redux";
// Components
import ProductTypeFilter from "./filters/ProductTypeFilter";
import { ProductPagination } from "./ProductPagination";
import ProductSortBar from "./filters/ProductSortBar";
import { useRouter } from "next/router";

const Products = () => {
  const router = useRouter();
  const filterElement = useRef(null);

  // states
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  const products = useSelector(
    (state) => state.product.archiveProduct.response.products
  );
  const status = useSelector((state) => state.product.archiveProduct.status);
  const productView = useSelector(
    (state) => state.product.archiveProduct.productView
  );

  /**
   * Hide filter element if clicked on outside of element
   */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterElement.current &&
        !filterElement.current.contains(event.target) &&
        showFilterMobile
      ) {
        setShowFilterMobile(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterElement, showFilterMobile]);

  useEffect(function () {
    owlCaroselJs(); //   owl carousel
    strecherItemJs(); // Strecher accordion
  }, []);

  useEffect(() => {
    if (products.length) {
      owlCaroselJs(); //   owl carousel
      magnificPopupJs(); // magnific Popup
    }
  }, [products]);

  return (
    <section className="products">
      <div
        className={`page-loader inner-section-loader ${
          status === "loaded" ? "loaded" : ""
        }`}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-12">
            <div
              className={`filters ${showFilterMobile ? "active" : ""}`}
              ref={filterElement}
            >
              {/* <ProductPriceFilter /> */}
              <ProductTypeFilter />
            </div>
          </div>

          <div className="col-md-9 col-xs-12">
            <ProductSortBar
              setShowFilterMobile={setShowFilterMobile}
              productView={productView}
            />
            <div className="row">
              {products.map((product) => (
                <div
                  className={
                    productView === "grid" ? "col-md-6 col-xs-6" : "col-md-12"
                  }
                  key={product._id}
                >
                  <article>
                    <div className="info">
                      <span>
                        <a
                          href={`#${product.slug}`}
                          className="mfp-open"
                          data-title="Quick wiew"
                        >
                          <i className="icon icon-eye"></i>
                        </a>
                      </span>
                    </div>
                    <div className="btn btn-add">
                      <i className="icon icon-cart"></i>
                    </div>
                    <div
                      className={
                        productView === "grid" ? "figure-grid" : "figure-list"
                      }
                    >
                      {/* <span className="label label-warning">New</span> */}
                      <div className="image">
                        <a href={`#${product.slug}`} className="mfp-open">
                          <Image
                            // src="http://localhost:3000/assets/images/product-1.png"
                            src={product.images[0].url}
                            alt="product image"
                            width={640}
                            height={480}
                            layout="responsive"
                          />
                        </a>
                      </div>
                      <div className="text">
                        <h2 className="title h4">
                          <Link href={`/products/${product.slug}`}>
                            <a>
                              {product.title} {product.images[0].url}
                            </a>
                          </Link>
                        </h2>

                        <span className="description clearfix">
                          Gubergren amet dolor ea diam takimata consetetur
                          facilisis blandit et aliquyam lorem ea duo labore diam
                          sit et consetetur nulla
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <ProductPagination />
          </div>
        </div>

        {products.map((product) => (
          <div
            className="popup-main mfp-hide"
            id={product.slug}
            key={product._id}
          >
            <div className="product">
              <div className="popup-title">
                <div className="h1 title">
                  {product.title} <small>{product.types[0].title}</small>
                </div>
              </div>

              <div className="owl-product-gallery">
                {product.images.map((image, index) => (
                  <Image
                    src={image.url}
                    alt="product image"
                    width={640}
                    height={480}
                    layout="responsive"
                    key={index}
                  />
                ))}
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
                  {/* <div className="price">
                    <span className="h3">
                      $ 1999,00 <small>$ 2999,00</small>
                    </span>
                  </div> */}
                </div>
                <div className="popup-cell">
                  <div className="popup-buttons">
                    {/* <Link href={`/products/${product.slug}`}> */}
                    <a
                      href={`/products/${product.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        $.magnificPopup.close();
                        router.push(`/products/${product.slug}`);
                      }}
                    >
                      <span className="icon icon-eye"></span>{" "}
                      <span className="hidden-xs">View more</span>
                    </a>
                    {/* </Link> */}

                    <a href="#">
                      <span className="icon icon-cart"></span>
                      <span className="hidden-xs">Order now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
