import { createOrder } from "@redux/productSlice";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";
import * as Yup from "yup";
import "yup-phone";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // state
  const checkoutProduct = useSelector(
    (state) => state.product.checkout.product
  );
  const order = useSelector((state) => state.product.order);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      companyName: "",
      zipCode: "",
      city: "",
      phone: "",
      email: "",
      address: "",
      termsAndConditions: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Please enter you full name"),
      companyName: Yup.string(),
      zipCode: Yup.string(),
      city: Yup.string().required("Please enter you city"),
      phone: Yup.string()
        .phone("KSA", false, "Please enter valid  phone number")
        .required("Required"),
      email: Yup.string().email("Please enter a valid email"),
      address: Yup.string(),
      termsAndConditions: Yup.bool().oneOf([true]),
    }),
    onSubmit: (values) => {
      const body = {
        product: checkoutProduct._id,
        checkoutData: values,
      };

      dispatch(createOrder(body));
    },
  });

  // Redirect and set cookie when a order is complected
  useEffect(() => {
    if (order.status === "ordered") {
      Cookies.set("ordered-product", order.orderData._id);
      router.push("/order");
    }
    // eslint-disable-next-line
  }, [order]);

  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.touched.termsAndConditions && formik.errors.termsAndConditions ? (
        <div className="alert alert-warning" role="alert">
          Accept terms and conditions
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name: *"
              name="fullName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="error">{formik.errors.fullName}</div>
            ) : null}
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Company name:"
              name="companyName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.companyName && formik.errors.companyName ? (
              <div className="error">{formik.errors.companyName}</div>
            ) : null}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Zip code:"
              name="zipCode"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.zipCode && formik.errors.zipCode ? (
              <div className="error">{formik.errors.zipCode}</div>
            ) : null}
          </div>
        </div>

        <div className="col-md-8">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="City: *"
              name="city"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="error">{formik.errors.city}</div>
            ) : null}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">+966</div>
              <input
                type="text"
                className="form-control"
                placeholder="Phone: *"
                name="phone"
                onChange={(e) => {
                  const value = "+966 " + e.target.value;
                  formik.setFieldValue("phone", value, true);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email:"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group">
            <textarea
              rows="2"
              className="form-control"
              placeholder="Address:"
              style={{ resize: "vertical" }}
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            ></textarea>
            {formik.touched.address && formik.errors.address ? (
              <div className="error">{formik.errors.address}</div>
            ) : null}
          </div>
        </div>

        <div className="col-md-12">
          <hr
            className={
              formik.touched.termsAndConditions &&
              formik.errors.termsAndConditions
                ? "error"
                : ""
            }
          />
          <span className="checkbox">
            <input
              type="checkbox"
              id="checkBoxId1"
              checked={formik.values.termsAndConditions}
              onChange={() =>
                formik.setFieldValue(
                  "termsAndConditions",
                  !formik.values.termsAndConditions,
                  true
                )
              }
            />
            <label htmlFor="checkBoxId1">
              I have read and accepted the <a href="#">terms</a>, as well as
              read and understood our terms of{" "}
              <a href="#">business contidions</a>
            </label>
          </span>

          <hr
            className={
              formik.touched.termsAndConditions &&
              formik.errors.termsAndConditions
                ? "error"
                : ""
            }
          />
        </div>

        <div className="col-md-12">
          {/* <Link href="/order"> */}
          <button type="submit" className="btn btn-main btn-block">
            Proceed to order
          </button>
          {/* </Link> */}
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
