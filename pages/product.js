import { useEffect } from "react";
import Image from "next/image";
import magnificPopupJs from "../libs/jquery.magnific-popup";
import owlCaroselJs from "../libs/jquery.owl.carousel";
import strecherItemJs from "../libs/jquery.strecherItem";

function Product() {
  useEffect(() => {
    owlCaroselJs(); //   owl carousel
    magnificPopupJs(); // magnific Popup\
    strecherItemJs(); // Strecher accordion
  }, []);

  return (
    <>
      {" "}
      {/*  <!-- ========================  Main header ======================== --> */}
      <section
        className="main-header"
        style={{ backgroundImage: "url(assets/images/gallery-2.webp)" }}
      >
        <header>
          <div className="container">
            <h1 className="h2 title">Sofa Laura</h1>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <a href="index.html">
                  <span className="icon icon-home"></span>
                </a>
              </li>
              <li>
                <a href="category.html">Product Category</a>
              </li>
              <li>
                <a href="products-grid.html">Product Sub-category</a>
              </li>
              <li>
                <a className="active" href="product.html">
                  Product overview
                </a>
              </li>
            </ol>
          </div>
        </header>
      </section>
      {/*  <!-- ========================  Product ======================== --> */}
      <section className="product">
        <div className="main">
          <div className="container">
            <div className="row product-flex">
              <div className="col-md-4 col-sm-12 product-flex-info">
                <div className="clearfix">
                  <h1 className="title" data-title="Sofa">
                    Laura <small>La Linea de Lucco</small>
                  </h1>

                  <div className="clearfix">
                    <div className="price">
                      <span className="h3">
                        $ 1999,00
                        <small>$ 2999,00</small>
                      </span>
                    </div>
                    <hr />

                    <div className="info-box">
                      <span>
                        <strong>Maifacturer</strong>
                      </span>
                      <span>Brand name</span>
                    </div>

                    <div className="info-box">
                      <span>
                        <strong>Materials</strong>
                      </span>
                      <span>Wood, Leather, Acrylic</span>
                    </div>

                    <div className="info-box">
                      <span>
                        <strong>Availability</strong>
                      </span>
                      <span>
                        <i className="fa fa-check-square-o"></i> In stock
                      </span>
                      <span className="hidden">
                        <i className="fa fa-truck"></i> Out of stock
                      </span>
                    </div>

                    <hr />

                    <div className="info-box info-box-addto added">
                      <span>
                        <strong>Favourites</strong>
                      </span>
                      <span>
                        <i className="add">
                          <i className="fa fa-heart-o"></i> Add to favorites
                        </i>
                        <i className="added">
                          <i className="fa fa-heart"></i> Remove from favorites
                        </i>
                      </span>
                    </div>

                    <div className="info-box info-box-addto">
                      <span>
                        <strong>Wishlist</strong>
                      </span>
                      <span>
                        <i className="add">
                          <i className="fa fa-eye-slash"></i> Add to Watch list
                        </i>
                        <i className="added">
                          <i className="fa fa-eye"></i> Remove from Watch list
                        </i>
                      </span>
                    </div>

                    <div className="info-box info-box-addto">
                      <span>
                        <strong>Collection</strong>
                      </span>
                      <span>
                        <i className="add">
                          <i className="fa fa-star-o"></i> Add to Collection
                        </i>
                        <i className="added">
                          <i className="fa fa-star"></i> Remove from Collection
                        </i>
                      </span>
                    </div>

                    <hr />

                    <div className="info-box">
                      <span>
                        <strong>Available Colors</strong>
                      </span>
                      <div className="product-colors clearfix">
                        <span className="color-btn color-btn-red"></span>
                        <span className="color-btn color-btn-blue checked"></span>
                        <span className="color-btn color-btn-green"></span>
                        <span className="color-btn color-btn-gray"></span>
                        <span className="color-btn color-btn-biege"></span>
                      </div>
                    </div>

                    <div className="info-box">
                      <span>
                        <strong>Choose size</strong>
                      </span>
                      <div className="product-colors clearfix">
                        <span className="color-btn color-btn-biege">
                          <span className="product-size" data-text="">
                            S
                          </span>
                        </span>
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

              <div className="col-md-8 col-sm-12 product-flex-gallery">
                <button
                  type="submit"
                  className="btn btn-buy"
                  data-text="Buy"
                ></button>

                <div className="owl-product-gallery open-popup-gallery">
                  <a href="assets/images/product-1.png">
                    <Image
                      src="/assets/images/product-1.png"
                      alt="product one"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                  <a href="assets/images/product-2.png">
                    <Image
                      src="/assets/images/product-2.png"
                      alt="product one"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                  <a href="assets/images/product-3.png">
                    <Image
                      src="/assets/images/product-3.png"
                      alt="product one"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                  <a href="assets/images/product-4.png">
                    <Image
                      src="/assets/images/product-4.png"
                      alt="product one"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="designer">
                  <div className="box">
                    <div className="image">
                      <Image
                        src="/assets/images/user-1.jpg"
                        alt="product image"
                        width={204}
                        height={204}
                        layout="responsive"
                      />
                    </div>
                    <div className="name">
                      <div className="h3 title">
                        John Doe <small>Arhitect</small>
                      </div>
                      <hr />
                      <p>
                        <a href="mailto:johndoe@mail.com">
                          <i className="icon icon-envelope"></i>{" "}
                          johndoe@mail.com
                        </a>
                      </p>
                      <p>
                        <a href="tel:002255858">
                          <i className="icon icon-phone-handset"></i> +002255858
                        </a>
                      </p>
                      <p>
                        <a href="#" className="btn btn-main btn-xs">
                          <i className="icon icon-user"></i>
                        </a>
                        <a href="#" className="btn btn-main btn-xs">
                          <i className="icon icon-printer"></i>
                        </a>
                        <a href="#" className="btn btn-main btn-xs">
                          <i className="icon icon-layers"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="btn btn-add">
                    <i className="icon icon-phone-handset"></i>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <a
                      href="#design"
                      aria-controls="design"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className="icon icon-sort-alpha-asc"></i>
                      <span>Specification</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#designer"
                      aria-controls="designer"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className="icon icon-user"></i>
                      <span>Collection</span>
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="design">
                    <div className="content">
                      <div className="row">
                        <div className="col-md-4">
                          <h3>Dimensions</h3>
                          <p>
                            {/* <img
                              className="full-image"
                              src="assets/images/specs.png"
                              alt="Alternate Text"
                              width="350"
                            /> */}

                            <Image
                              src="/assets/images/specs.png"
                              alt="product image"
                              width={2068}
                              height={1300}
                              layout="responsive"
                            />
                          </p>
                          <hr />
                          <p>
                            {/* <img
                              className="full-image"
                              src="assets/images/specs.png"
                              alt="Alternate Text"
                              width="350"
                            /> */}

                            <Image
                              src="/assets/images/specs.png"
                              alt="product image"
                              width={2068}
                              height={1300}
                              layout="responsive"
                            />
                          </p>
                        </div>
                        <div className="col-md-8">
                          <h3>Product Specification</h3>
                          <p>
                            Sofa Laura is a casual, contemporary collection that
                            your family is sure to love. The plush pillows and
                            soft sloped arms create the ultimate combination for
                            relaxation and comfort.
                          </p>
                          <p>
                            The collection is tailored with rounded padded arms,
                            box-welted seat cushions, and loose back cushions.
                            Comfort is provided by high density seat cushions
                            supported with a hardwood frame construction. This
                            collection is built for comfort and style!
                          </p>
                          <p>
                            Sofa is fun and elegant with beauty and style that
                            will stay cutting-edge trendy through the years. It
                            is completely padded, including the back and outside
                            arms - combining comfort and value to make rewarding
                            relaxatio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="designer">
                    <div className="content">
                      <h3>Designers collection</h3>

                      <div className="products">
                        <div className="row">
                          <div className="col-md-6 col-xs-6">
                            <article>
                              <div className="figure-grid">
                                <div className="image">
                                  <a href="#productid1" className="mfp-open">
                                    <Image
                                      src="/assets/images/product-1.webp"
                                      alt="product image"
                                      width={640}
                                      height={480}
                                      layout="responsive"
                                    />
                                  </a>
                                </div>
                                <div className="text">
                                  <h4 className="title">
                                    <a href="product.html">Green corner</a>
                                  </h4>
                                  <sup>Designer collection</sup>
                                  <span className="description clearfix">
                                    Gubergren amet dolor ea diam takimata
                                    consetetur facilisis blandit et aliquyam
                                    lorem ea duo labore diam sit et consetetur
                                    nulla
                                  </span>
                                </div>
                              </div>
                            </article>
                          </div>

                          <div className="col-md-6 col-xs-6">
                            <article>
                              <div className="figure-grid">
                                <div className="image">
                                  <a href="#productid1" className="mfp-open">
                                    <Image
                                      src="/assets/images/product-2.webp"
                                      alt="product image"
                                      width={640}
                                      height={480}
                                      layout="responsive"
                                    />
                                  </a>
                                </div>
                                <div className="text">
                                  <h4 className="title">
                                    <a href="product.html">Laura</a>
                                  </h4>
                                  <sup>Designer collection</sup>
                                  <span className="description clearfix">
                                    Gubergren amet dolor ea diam takimata
                                    consetetur facilisis blandit et aliquyam
                                    lorem ea duo labore diam sit et consetetur
                                    nulla
                                  </span>
                                </div>
                              </div>
                            </article>
                          </div>

                          <div className="col-md-6 col-xs-6">
                            <article>
                              <div className="figure-grid">
                                <div className="image">
                                  <a href="#productid1" className="mfp-open">
                                    <Image
                                      src="/assets/images/product-3.webp"
                                      alt="product image"
                                      width={640}
                                      height={480}
                                      layout="responsive"
                                    />
                                  </a>
                                </div>
                                <div className="text">
                                  <h4 className="title">
                                    <a href="product.html">Nude</a>
                                  </h4>
                                  <sup>Designer collection</sup>
                                  <span className="description clearfix">
                                    Gubergren amet dolor ea diam takimata
                                    consetetur facilisis blandit et aliquyam
                                    lorem ea duo labore diam sit et consetetur
                                    nulla
                                  </span>
                                </div>
                              </div>
                            </article>
                          </div>

                          <div className="col-md-6 col-xs-6">
                            <article>
                              <div className="figure-grid">
                                <div className="image">
                                  <a href="#productid1" className="mfp-open">
                                    <Image
                                      src="/assets/images/product-4.webp"
                                      alt="product image"
                                      width={640}
                                      height={480}
                                      layout="responsive"
                                    />
                                  </a>
                                </div>
                                <div className="text">
                                  <h4 className="title">
                                    <a href="product.html">Aurora</a>
                                  </h4>
                                  <sup>Designer collection</sup>
                                  <span className="description clearfix">
                                    Gubergren amet dolor ea diam takimata
                                    consetetur facilisis blandit et aliquyam
                                    lorem ea duo labore diam sit et consetetur
                                    nulla
                                  </span>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Product;
