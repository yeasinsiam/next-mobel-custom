import { hideCart, visibleCart } from "@redux/optionsSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

function GlobalCartButton() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.options.cart.isVisible);

  const toggleCartVisible = (e) => {
    e.preventDefault();
    isVisible ? dispatch(hideCart()) : dispatch(visibleCart());
  };

  return (
    <a
      href="#"
      className={`open-cart ${isVisible ? "open" : ""}`}
      onClick={toggleCartVisible}
    >
      <i className="icon icon-cart"></i>
      <span>3</span>
    </a>
  );
}
function GlobalCartElement() {
  const isVisible = useSelector((state) => state.options.cart.isVisible);
  return (
    <div className={`cart-wrapper ${isVisible ? "open" : ""}`}>
      <div className="checkout">
        <div className="clearfix">
          {/* <!--cart item--> */}

          <div className="row">
            <div className="cart-block cart-block-item clearfix">
              <div className="image">
                <a href="product.html">
                  <Image
                    src="/assets/images/product-1.png"
                    alt="product one"
                    width={640}
                    height={463}
                    layout="intrinsic"
                  />
                </a>
              </div>
              <div className="title">
                <div>
                  <a href="product.html">Green corner</a>
                </div>
                <small>Green corner</small>
              </div>
              <div className="quantity">
                <input type="number" className="form-control form-quantity" />
              </div>
              <div className="price">
                <span className="final">$ 1.998</span>
                <span className="discount">$ 2.666</span>
              </div>
              {/* <!--delete-this-item--> */}
              <span className="icon icon-cross icon-delete"></span>
            </div>

            {/* <!--cart item--> */}

            <div className="cart-block cart-block-item clearfix">
              <div className="image">
                <a href="product.html">
                  <Image
                    src="/assets/images/product-2.png"
                    alt="product one"
                    width={640}
                    height={463}
                    layout="intrinsic"
                  />
                </a>
              </div>
              <div className="title">
                <div>
                  <a href="product.html">Green corner</a>
                </div>
                <small>Green corner</small>
              </div>
              <div className="quantity">
                <input type="number" className="form-control form-quantity" />
              </div>
              <div className="price">
                <span className="final">$ 1.998</span>
                <span className="discount">$ 2.666</span>
              </div>
              {/* <!--delete-this-item--> */}
              <span className="icon icon-cross icon-delete"></span>
            </div>

            {/* <!--cart item--> */}

            <div className="cart-block cart-block-item clearfix">
              <div className="image">
                <a href="product.html">
                  <Image
                    src="/assets/images/product-3.png"
                    alt="product one"
                    width={640}
                    height={463}
                    layout="intrinsic"
                  />
                </a>
              </div>
              <div className="title">
                <div>
                  <a href="product.html">Green corner</a>
                </div>
                <small>Green corner</small>
              </div>
              <div className="quantity">
                <input type="number" className="form-control form-quantity" />
              </div>
              <div className="price">
                <span className="final">$ 1.998</span>
                <span className="discount">$ 2.666</span>
              </div>
              {/* <!--delete-this-item--> */}
              <span className="icon icon-cross icon-delete"></span>
            </div>

            {/* <!--cart item--> */}

            <div className="cart-block cart-block-item clearfix">
              <div className="image">
                <a href="product.html">
                  <Image
                    src="/assets/images/product-4.png"
                    alt="product one"
                    width={640}
                    height={463}
                    layout="intrinsic"
                  />
                </a>
              </div>
              <div className="title">
                <div>
                  <a href="product.html">Green corner</a>
                </div>
                <small>Green corner</small>
              </div>
              <div className="quantity">
                <input type="number" className="form-control form-quantity" />
              </div>
              <div className="price">
                <span className="final">$ 1.998</span>
                <span className="discount">$ 2.666</span>
              </div>
              {/* <!--delete-this-item--> */}
              <span className="icon icon-cross icon-delete"></span>
            </div>
          </div>

          <hr />

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

          <hr />

          {/* <!--cart final price --> */}

          <div className="clearfix">
            <div className="cart-block cart-block-footer clearfix">
              <div>
                <strong>Total</strong>
              </div>
              <div>
                <div className="h4 title">$ 1259,00</div>
              </div>
            </div>
          </div>

          {/* <!--cart navigation --> */}

          <div className="cart-block-buttons clearfix">
            <div className="row">
              <div className="col-xs-6">
                <a href="products-grid.html" className="btn btn-clean-dark">
                  Continue shopping
                </a>
              </div>
              <div className="col-xs-6 text-right">
                <a href="checkout-1.html" className="btn btn-main">
                  <span className="icon icon-cart"></span> Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GlobalCartButton, GlobalCartElement };
