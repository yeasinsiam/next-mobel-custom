import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutForm";

const CheckoutSection = () => {
  //state
  const orderStatus = useSelector((state) => state.product.order.status);

  return (
    <div className="cart-wrapper">
      <div
        className={`page-loader inner-section-loader ${
          orderStatus !== "ordering" ? "loaded" : ""
        }`}
      ></div>
      <div className="note-block">
        <div className="row">
          {/* <!-- === left content === --> */}

          <div className="col-md-6">
            <div className="white-block">
              {/* <!--signup--> */}

              <div className="login-block login-block-signup">
                <div className="h4">Order details</div>
                <hr />

                <CheckoutForm />
              </div>
            </div>
          </div>
          {/* <!-- === right content === --> */}

          <div className="col-md-6">
            <div className="white-block">
              <div className="h4">Choose delivery</div>

              <hr />

              <span className="checkbox">
                <input type="radio" id="deliveryId1" name="deliveryOption" />
                <label htmlFor="deliveryId1">
                  Delivery 1-3 Days - <strong>$50,00</strong>
                </label>
              </span>

              <span className="checkbox">
                <input type="radio" id="deliveryId2" name="deliveryOption" />
                <label htmlFor="deliveryId2">
                  Fast delivery - <strong>$199,00</strong>
                </label>
              </span>

              <span className="checkbox">
                <input type="radio" id="deliveryId3" name="deliveryOption" />
                <label htmlFor="deliveryId3">
                  Pick up in the store - <strong>Free</strong>
                </label>
              </span>

              <hr />

              <div className="clearfix">
                <p>
                  A frequently overlooked, powerful fulfillment option is
                  offering local pick-up. If you have a physical location and
                  can allow your customers to forgo paying shipping costs
                  altogether, you should!
                </p>{" "}
                <p>
                  <strong>Benefits:</strong>
                </p>
                <ul>
                  <li>Avoid both shipping and packaging costs</li>
                  <li>
                    Develop a face-to-face relationship with your customers
                  </li>
                  <li>
                    Potential for additional purchases while customers are at
                    your store
                  </li>
                </ul>
                <p>
                  <strong>Challenges:</strong>
                </p>
                <ul>
                  <li>
                    Limited business hours can sometimes make it difficult to
                    coordinate pickup
                  </li>
                  <li>
                    Shoppers who cross state lines or ZIP codes may not know the
                    sales tax rates in your area
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
