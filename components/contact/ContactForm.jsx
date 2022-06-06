import { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const contactForm = useRef(null);
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => setShowForm(!showForm);

  useEffect(() => {
    showForm
      ? $(contactForm.current).slideDown()
      : $(contactForm.current).slideUp();
  }, [showForm]);
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
        <form id="sendmail">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <input
                  id="Email"
                  name="Email"
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <input
                  id="Subject"
                  name="Subject"
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  id="Comment"
                  name="Comment"
                  className="form-control"
                  placeholder="Your message"
                  rows="10"
                ></textarea>
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
