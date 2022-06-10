import Image from "next/image";
import Link from "next/link";
function Order() {
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
              <li className="col-md-4 ">
                <span data-text="Cart items"></span>
              </li>
              <li className="col-md-4">
                <span data-text="Checkout"></span>
              </li>
              <li className="col-md-4 active">
                <span data-text="Order"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- ========================  Checkout ======================== --> */}

      <section className="checkout">
        <div className="container">
          <header className="hidden">
            <h3 className="h3 title">Checkout - Step 4</h3>
          </header>

          {/* <!-- ========================  Cart navigation ======================== --> */}

          <div className="clearfix">
            <div className="row">
              <div className="col-xs-6">
                <span className="h2 title">Your order is completed!</span>
              </div>
              <div className="col-xs-6 text-right">
                <Link href="/shop" replace>
                  <a className="btn btn-clean-dark">
                    <span className="icon icon-chevron-left"></span> Continue
                    Shopping
                  </a>
                </Link>
                {/* <a onClick={() => window.print()} className="btn btn-main">
                  <span className="icon icon-printer"></span> Print
                </a> */}
              </div>
            </div>
          </div>

          {/* <!-- ========================  Payment ======================== --> */}

          <div className="cart-wrapper">
            <div className="note-block">
              <div className="row">
                {/* <!-- === left content === --> */}

                <div className="col-md-6">
                  <div className="white-block">
                    <div className="h4">Shipping info</div>

                    <hr />

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Name</strong> <br />
                          <span>John Doe</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Email</strong>
                          <br />
                          <span>johndoe@company.com</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Phone</strong>
                          <br />
                          <span>+122 523 352</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Zip</strong>
                          <br />
                          <span>94107</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>City</strong>
                          <br />
                          <span>San Francisco, California</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Address</strong>
                          <br />
                          <span>795 Folsom Ave, Suite 600</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Company name</strong>
                          <br />
                          <span>Mobel Inc</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Company phone</strong>
                          <br />
                          <span>+122 333 6665</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- === right content === --> */}

                <div className="col-md-6">
                  <div className="white-block">
                    <div className="h4">Order details</div>

                    <hr />

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Order no.</strong> <br />
                          <span>52522-63259226</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Transaction ID</strong> <br />
                          <span>2265996</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Order date</strong> <br />
                          <span>06/30/2017</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Shipping arrival</strong> <br />
                          <span>07/30/2017</span>
                        </div>
                      </div>
                    </div>

                    <div className="h4">Payment details</div>

                    <hr />

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Transaction time</strong> <br />
                          <span>06/30/2017 at 00:59</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Amount</strong>
                          <br />
                          <span>$ 1259,00</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Cart details</strong>
                          <br />
                          <span>**** **** **** 5446</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Items in cart</strong>
                          <br />
                          <span>4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
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
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
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
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
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
                  <strong>1</strong>
                </div>
                <div className="price">
                  <span className="final h3">$ 1.998</span>
                  <span className="discount">$ 2.666</span>
                </div>
              </div>
            </div>

            {/* <!--cart prices --> */}

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

            {/* <!--cart final price --> */}

            <div className="clearfix">
              <div className="cart-block cart-block-footer clearfix">
                <div>
                  <strong>Promo code included!</strong>
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
                <span className="h2 title">Your order is completed!</span>
              </div>
              <div className="col-xs-6 text-right">
                <Link href="/shop" replace>
                  <a className="btn btn-clean-dark">
                    <span className="icon icon-chevron-left"></span> Continue
                    Shopping
                  </a>
                </Link>
                {/* <a onClick={() => window.print()} className="btn btn-main">
                  <span className="icon icon-printer"></span> Print
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Order;
