import { addContactComment } from "@redux/optionsSlice";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactForm = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter you name"),
      email: Yup.string()
        .email("Please enter a valid email")
        .required("Please enter a email"),
      subject: Yup.string().required("Please enter subject"),
      message: Yup.string().required("Please enter you message"),
    }),
    onSubmit: (values) => dispatch(addContactComment(values)),
  });

  // state
  const contactData = useSelector((state) => state.options.contact.data);

  const toggleShowForm = () => setShowForm(!showForm);

  useEffect(() => {
    showForm
      ? $(contactForm.current).slideDown()
      : $(contactForm.current).slideUp();
  }, [showForm]);

  useEffect(() => {
    if (contactData) {
      $("#contact-successfull-alert").slideDown();
      formik.resetForm();
    }
    // eslint-disable-next-line
  }, [contactData]);

  // console.log($("ontact-successfull-alert"));
  return (
    <div className={`contact-form-wrapper ${showForm ? "active" : ""}`}>
      <a
        className="btn btn-clean open-form"
        // ref={openForm}
        onClick={toggleShowForm}
      >
        {!showForm ? "Contact us via form" : "Close form"}
      </a>

      <div className="contact-form clearfix" ref={contactForm}>
        <form id="sendmail" onSubmit={formik.handleSubmit}>
          <div
            id="contact-successfull-alert"
            className="alert alert-success"
            role="alert"
            style={{ display: "none" }}
          >
            Email successfully send
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="Name"
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="Email"
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <input
                  id="Subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <div className="error">{formik.errors.subject}</div>
                ) : null}
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  id="Comment"
                  className="form-control"
                  placeholder="Your message"
                  rows="10"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}
              </div>
            </div>

            <div className="col-md-12 text-center">
              <input
                type="submit"
                className="btn btn-clean"
                value="Send message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
