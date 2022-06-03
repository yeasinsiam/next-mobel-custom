import { useEffect } from "react";
import magnificPopupJs from "../libs/jquery.magnific-popup";
import owlCaroselJs from "../libs/jquery.owl.carousel";

// const $ = require("jquery");
// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }

function Home() {
  useEffect(() => {
    // -------------------(Assestial  initializations)-----------------\\
    owlCaroselJs(); //   owl carousel
    magnificPopupJs(); // magnific Popup
  }, []);

  return (
    <>
      {/* <!-- ========================  Header content ======================== --> */}
      <section className="header-content">
        <div className="owl-slider">
          <div
            className="item"
            style={{ backgroundImage: "url(assets/images/gallery-3.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Very Animate.css Friend.
                </h2>
                <div className="desc animated" data-animation="fadeInUp">
                  Combine with animate.css. Or just use your own!.
                </div>
                <div className="desc animated" data-animation="fadeInUp">
                  Bunch of typography effects.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                    className="btn btn-clean"
                  >
                    Buy this template
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item"
            style={{ backgroundImage: "url(assets/images/gallery-1.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Modern furniture theme
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Modern & powerfull template. <br /> Clean design & reponsive
                  layout. Google fonts integration
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                    className="btn btn-main"
                  >
                    <i className="icon icon-cart"></i> Buy this template
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item"
            style={{ backgroundImage: "url(assets/images/gallery-2.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Mobile ready!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Unlimited Choices. Unbeatable Prices. Free Shipping.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  Furniture category icon fonts!
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a href="category.html" className="btn btn-clean">
                    Get insipred
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================  Icons slider ======================== --> */}

      <section className="owl-icons-wrapper owl-icons-frontpage">
        <header className="hidden">
          <h2>Product categories</h2>
        </header>

        <div className="container">
          <div className="owl-icons">
            <a href="#">
              <figure>
                <i className="f-icon f-icon-sofa"></i>
                <figcaption>Sofa</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-armchair"></i>
                <figcaption>Armchairs</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-chair"></i>
                <figcaption>Chairs</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-dining-table"></i>
                <figcaption>Dining tables</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-media-cabinet"></i>
                <figcaption>Media storage</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-table"></i>
                <figcaption>Tables</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bookcase"></i>
                <figcaption>Bookcase</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bedroom"></i>
                <figcaption>Bedroom</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-nightstand"></i>
                <figcaption>Nightstand</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-children-room"></i>
                <figcaption>Children room</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-kitchen"></i>
                <figcaption>Kitchen</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bathroom"></i>
                <figcaption>Bathroom</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-wardrobe"></i>
                <figcaption>Wardrobe</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-shoe-cabinet"></i>
                <figcaption>Shoe cabinet</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-office"></i>
                <figcaption>Office</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bar-set"></i>
                <figcaption>Bar sets</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-lightning"></i>
                <figcaption>Lightning</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-carpet"></i>
                <figcaption>Varpet</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-accessories"></i>
                <figcaption>Accessories</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>

      {/* <!-- ========================  Products widget ======================== --> */}

      <section className="products">
        <div className="container">
          <header>
            <div className="row">
              <div className="col-md-offset-2 col-md-8 text-center">
                <h2 className="title">Popular products</h2>
                <div className="text">
                  <p>Check out our latest collections</p>
                </div>
              </div>
            </div>
          </header>

          <div className="row">
            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite added">
                    <a
                      href="#"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
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
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="assets/images/product-1.png"
                        alt="picssdf"
                        width="360"
                      />
                      {/* <Image
                        src="/assets/images/product-1.png"
                        alt="picssdf"
                        // layout="fill"
                        width={345}
                        height={200}
                        // layout="raw"
                      /> */}
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      <a href="product.html">Green corner</a>
                    </h2>
                    <sub>$ 1499,-</sub>
                    <sup>$ 1099,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="#"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
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
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="assets/images/product-2.png"
                        alt="picssdf"
                        width="360"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      <a href="product.html">Laura</a>
                    </h2>
                    <sub>$ 3999,-</sub>
                    <sup>$ 3499,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="#"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
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
                <div className="figure-grid">
                  <span className="label label-warning">New</span>
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="assets/images/product-3.png"
                        alt="picssdf"
                        width="360"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      <a href="product.html">Nude</a>
                    </h2>
                    <sup>$ 2999,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="#"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
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
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="assets/images/product-4.png"
                        alt="picssdf"
                        width="360"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      <a href="product.html">Aurora</a>
                    </h2>
                    <sup>$ 299,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite added">
                    <a
                      href="#"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
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
                <div className="figure-grid">
                  <span className="label label-info">-50%</span>
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="assets/images/product-5.png"
                        alt="picssdf"
                        width="360"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      <a href="product.html">Dining set</a>
                    </h2>
                    <sub>$ 1999,-</sub>
                    <sup>$ 1499,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-4 col-xs-6">
              <article>
                <div className="info">
                  <span className="add-favorite">
                    <a
                      href="#"
                      data-title="Add to favorites"
                      data-title-added="Added to favorites list"
                    >
                      <i className="icon icon-heart"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="#productid1"
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
                <div className="figure-grid">
                  <div className="image">
                    <a href="#productid1" className="mfp-open">
                      <img
                        src="assets/images/product-6.png"
                        alt="picssdf"
                        width="360"
                      />
                    </a>
                  </div>
                  <div className="text">
                    <h2 className="title h4">
                      <a href="product.html">Seat chair</a>
                    </h2>
                    <sup>$ 896,-</sup>
                    <span className="description clearfix">
                      Gubergren amet dolor ea diam takimata consetetur facilisis
                      blandit et aliquyam lorem ea duo labore diam sit et
                      consetetur nulla
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="wrapper-more">
            <a href="products-grid.html" className="btn btn-main">
              View store
            </a>
          </div>

          <div className="popup-main mfp-hide" id="productid1">
            <div className="product">
              <div className="popup-title">
                <div className="h1 title">
                  Laura <small>product category</small>
                </div>
              </div>

              <div className="owl-product-gallery">
                <img
                  src="assets/images/product-1.png"
                  alt="picssdf"
                  width="640"
                />
                <img
                  src="assets/images/product-2.png"
                  alt="picssdf"
                  width="640"
                />
                <img
                  src="assets/images/product-3.png"
                  alt="picssdf"
                  width="640"
                />
                <img
                  src="assets/images/product-4.png"
                  alt="picssdf"
                  width="640"
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
        </div>
      </section>
    </>
  );
}

export default Home;
