import Image from "next/image";

function FeaturedProductWidget() {
  return (
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
                    <Image
                      src="/assets/images/product-1.png"
                      alt="product one"
                      width={345}
                      height={258.75}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="text">
                  <h2 className="title h4">
                    <a href="#">Green corner</a>
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
                    <Image
                      src="/assets/images/product-2.png"
                      alt="product one"
                      width={345}
                      height={258.75}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="text">
                  <h2 className="title h4">
                    <a href="#">Laura</a>
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
                    <Image
                      src="/assets/images/product-3.png"
                      alt="product one"
                      width={345}
                      height={258.75}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="text">
                  <h2 className="title h4">
                    <a href="#">Nude</a>
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
                    <Image
                      src="/assets/images/product-4.png"
                      alt="product one"
                      width={345}
                      height={258.75}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="text">
                  <h2 className="title h4">
                    <a href="#">Aurora</a>
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
                    <Image
                      src="/assets/images/product-5.png"
                      alt="product one"
                      width={345}
                      height={258.75}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="text">
                  <h2 className="title h4">
                    <a href="#">Dining set</a>
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
                    <Image
                      src="/assets/images/product-6.png"
                      alt="product six"
                      width={345}
                      height={258.75}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="text">
                  <h2 className="title h4">
                    <a href="#">Seat chair</a>
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
          <a href="#  " className="btn btn-main">
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
              <Image
                src="/assets/images/product-1.png"
                alt="product one"
                width={640}
                height={480}
                layout="responsive"
              />
              <Image
                src="/assets/images/product-2.png"
                alt="product one"
                width={640}
                height={480}
                layout="responsive"
              />
              <Image
                src="/assets/images/product-3.png"
                alt="product one"
                width={640}
                height={480}
                layout="responsive"
              />
              <Image
                src="/assets/images/product-4.png"
                alt="product one"
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
                  <a href="#">
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
  );
}

export default FeaturedProductWidget;
