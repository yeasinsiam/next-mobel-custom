import Image from "next/image";
import Link from "next/link";

function Cart() {
  return (
    <>
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

      {/* <!-- ========================  Step Wraper ======================== --> */}

      <div className="step-wrapper">
        <div className="container">
          <div className="stepper">
            <ul className="row">
              <li className="col-md-4 active">
                <span data-text="Cart items"></span>
              </li>
              <li className="col-md-4">
                <span data-text="Checkout"></span>
              </li>
              <li className="col-md-4">
                <span data-text="Order"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="checkout">
        <div className="container">
          <header className="hidden">
            <h3 className="h3 title">Checkout - Step 1</h3>
          </header>

          {/* <!-- ========================  Cart wrapper ======================== --> */}

          <div className="cart-wrapper">
            {/* <!--cart header --> */}

            <div className="cart-block cart-block-header clearfix">
              <div>
                <span>Product</span>
              </div>
              <div>
                <span>&nbsp;</span>
              </div>
              <div>
                <span>Quantity</span>
              </div>
              <div className="text-right">
                <span>Price</span>
              </div>
            </div>

            {/* <!--cart items--> */}

            <div className="clearfix">
              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <Image
                      src="/assets/images/product-1.png"
                      alt="product image"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <input type="number" className="form-control form-quantity" />
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
                {/* <!--delete-this-item--> */}
                <span className="icon icon-cross icon-delete"></span>
              </div>

              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <Image
                      src="/assets/images/product-2.png"
                      alt="product image"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <input type="number" className="form-control form-quantity" />
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
                {/* <!--delete-this-item--> */}
                <span className="icon icon-cross icon-delete"></span>
              </div>

              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <Image
                      src="/assets/images/product-3.png"
                      alt="product image"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <input type="number" className="form-control form-quantity" />
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
                {/* <!--delete-this-item--> */}
                <span className="icon icon-cross icon-delete"></span>
              </div>

              <div className="cart-block cart-block-item clearfix">
                <div className="image">
                  <a href="product.html">
                    <Image
                      src="/assets/images/product-3.png"
                      alt="product image"
                      width={640}
                      height={480}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div className="title">
                  <div className="h4">
                    <a href="product.html">Green corner</a>
                  </div>
                  <div>Green corner</div>
                </div>
                <div className="quantity">
                  <input type="number" className="form-control form-quantity" />
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
                {/* <!--delete-this-item--> */}
                <span className="icon icon-cross icon-delete"></span>
              </div>
            </div>

            {/*  <!--cart prices --> */}

            <div className="clearfix">
              <div className="cart-block cart-block-footer clearfix">
                <div>
                  <strong>Discount 15%</strong>
                </div>
                <div>
                  <span>$ 159,00</span>
                </div>
              </div>

              <div className="cart-block cart-block-footer clearfix">
                <div>
                  <strong>Shipping</strong>
                </div>
                <div>
                  <span>$ 30,00</span>
                </div>
              </div>

              <div className="cart-block cart-block-footer clearfix">
                <div>
                  <strong>VAT</strong>
                </div>
                <div>
                  <span>$ 59,00</span>
                </div>
              </div>
            </div>

            {/*  <!--cart final price --> */}

            <div className="clearfix">
              <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                <div>
                  <span className="checkbox">
                    <input type="checkbox" id="couponCodeID" />
                    <label htmlFor="couponCodeID">Promo code</label>
                    <input
                      type="text"
                      className="form-control form-coupon"
                      value=""
                      placeholder="Enter your coupon code"
                    />
                  </span>
                </div>
                <div>
                  <div className="h2 title">$ 1259,00</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ========================  Cart navigation ======================== --> */}
          <div className="clearfix">
            <div className="row">
              <div className="col-xs-6">
                <Link href="/shop">
                  <a className="btn btn-clean-dark">
                    <span className="icon icon-chevron-left"></span> Shop more
                  </a>
                </Link>
              </div>
              <div className="col-xs-6 text-right">
                <Link href="/checkout">
                  <a className="btn btn-main">
                    <span className="icon icon-cart"></span> Proceed to checkout
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
