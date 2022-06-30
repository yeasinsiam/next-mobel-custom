import { setOrderedProduct } from "@redux/actions";
import { wrapper } from "@redux/store";
import CartProduct from "components/checkout/CartProduct";
import { getOrder } from "db/controllers/orderController";
import { formatDate } from "helpers/helper";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
function Order() {
  const orderData = useSelector((state) => state.product.order.orderData);

  if (!orderData) {
    return <div className={`page-loader`}></div>;
  }
  const { product, checkoutData } = orderData;
  const { fullName, companyName, zipCode, city, phone, email, address } =
    checkoutData;
  return (
    <>
      {/*  <!-- ========================  Main header ======================== --> */}
      <section
        className="main-header"
        style={{ backgroundImage: "url(assets/images/gallery-2.webp)" }}
      >
        <header>
          <div className="container">
            <h1 className="h2 title">Order</h1>
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
                <a>checkout</a>
              </li>
              <li>
                <a className="active">order</a>
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
              <li className="col-md-6">
                <span data-text="Checkout"></span>
              </li>
              <li className="col-md-6 active">
                <span data-text="Order"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- ========================  Checkout ======================== --> */}

      <section className="checkout">
        <div className="container">
          {/* <!-- ========================  Cart navigation ======================== --> */}

          <div className="clearfix">
            <div className="row">
              <div className="col-xs-6">
                <span className="h2 title">Your order is completed!</span>
              </div>
              <div className="col-xs-6 text-right">
                <a
                  onClick={() => window.print()}
                  className="btn btn-main"
                  style={{ marginRight: "1rem" }}
                >
                  <span className="icon icon-printer"></span> Print
                </a>
                <Link href="/products" replace>
                  <a className="btn btn-clean-dark">
                    <span className="icon icon-chevron-left"></span> Continue
                    Shopping
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- ========================  info ======================== --> */}

          <div className="cart-wrapper">
            <div className="note-block">
              <div className="row">
                {/* <!-- === left content === --> */}

                <div className="col-md-6">
                  <div className="white-block">
                    <div className="h4">Order details</div>

                    <hr />

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Full Name</strong> <br />
                          <span>{fullName}</span>
                        </div>
                      </div>
                      {companyName ? (
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Company name</strong>
                            <br />
                            <span>{companyName}</span>
                          </div>
                        </div>
                      ) : null}
                      {email ? (
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Email</strong>
                            <br />
                            <span>johndoe@company.com</span>
                          </div>
                        </div>
                      ) : null}
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Phone</strong>
                          <br />
                          <span>{phone}</span>
                        </div>
                      </div>
                      {zipCode ? (
                        <div className="col-md-6">
                          <div className="form-group">
                            <strong>Zip</strong>
                            <br />
                            <span>{zipCode}</span>
                          </div>
                        </div>
                      ) : null}
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>City</strong>
                          <br />
                          <span>{city}</span>
                        </div>
                      </div>

                      {address ? (
                        <div className="col-md-12">
                          <div className="form-group">
                            <strong>Address</strong>
                            <br />
                            <span>{address}</span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* <!-- === right content === --> */}

                <div className="col-md-6">
                  <div className="white-block">
                    <div className="h4">&nbsp;</div>

                    <hr />

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Order no.</strong> <br />
                          <span>{orderData.orderId}</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Transaction ID</strong> <br />
                          <span>{orderData._id}</span>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <strong>Order date</strong> <br />
                          <span>{formatDate(orderData.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- ========================   Product wraper  ======================== --> */}

          <CartProduct
            // imageUrl={"/"}
            imageUrl={product.images[0].url}
            title={product.title}
            type={product.types[0].name}
          />
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req: { cookies } }) => {
      let orderData = null;
      const orderedProductId = cookies["ordered-product"];
      if (orderedProductId) {
        orderData = JSON.parse(
          JSON.stringify(await getOrder(orderedProductId))
        );
      }

      if (!orderData) {
        return {
          notFound: true,
        };
      }

      store.dispatch(setOrderedProduct(orderData));
    }
);

export default Order;
