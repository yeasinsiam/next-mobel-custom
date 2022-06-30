import Breadcrumb from "components/Breadcrumb";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useSelector } from "react-redux";
// components
const ContactForm = dynamic(() => import("../components/contact/ContactForm"));

function Contact() {
  const contactLoading = useSelector((state) => state.options.contact.loading);
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      {/*  <!-- ========================  Main header ======================== --> */}
      <Breadcrumb
        backgroundImageLink="assets/images/gallery-2.webp"
        containerHtml={
          <>
            <h2 className="h2 title">Contact</h2>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <a href="index.html">
                  <span className="icon icon-home"></span>
                </a>
              </li>
              <li>
                <a className="active" href="contact.html">
                  Contact
                </a>
              </li>
            </ol>
          </>
        }
      />
      {/* <!-- ========================  Contact ======================== --> */}
      <section className="contact">
        {/* <!-- === Goolge map === --> */}
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.2530232609856!2d90.03566291494492!3d23.270254184828268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37557de775605eab%3A0xe861c4b0f4ef949a!2sHossainpur%2C%20high%20School!5e0!3m2!1sen!2sbd!4v1654513618269!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
              <div className="contact-block">
                <div className="contact-info">
                  <div className="row">
                    <div className="col-sm-4">
                      <figure className="text-center">
                        <span className="icon icon-map-marker"></span>
                        <figcaption>
                          <strong>Where are we?</strong>
                          <span>
                            200 12th Ave, New York, <br />
                            NY 10001, USA
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-sm-4">
                      <figure className="text-center">
                        <span className="icon icon-phone"></span>
                        <figcaption>
                          <strong>Call us</strong>
                          <span>
                            <strong>T</strong> +1 222 333 4444 <br />
                            <strong>F</strong> +1 222 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-sm-4">
                      <figure className="text-center">
                        <span className="icon icon-clock"></span>
                        <figcaption>
                          <strong>Working hours</strong>
                          <span>
                            <strong>Mon</strong> - Sat: 10 am - 6 pm <br />
                            <strong>Sun</strong> 12pm - 2 pm
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="banner">
                  <div
                    className={`page-loader inner-section-loader ${
                      contactLoading ? "" : "loaded"
                    }`}
                  ></div>
                  <div className="row">
                    <div className="col-md-offset-1 col-md-10 text-center">
                      <h2 className="title">Send an email</h2>
                      <p>
                        Thanks for your interest in Mobel Theme. We believe in
                        creativity as one of the major forces of progress.
                        Please use this form if you have any questions about our
                        products and we ll get back with you very soon.
                      </p>
                      {/* Display contact form */}
                      <ContactForm />
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="row">
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Sales</strong>
                          <span>
                            <strong>T</strong> +1 125 251 4586 <br />
                            <strong>F</strong> +1 251 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Services</strong>
                          <span>
                            <strong>T</strong> +1 654 333 8541 <br />
                            <strong>F</strong> +1 125 251 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Support</strong>
                          <span>
                            <strong>T</strong> +1 222 852 9632 <br />
                            <strong>F</strong> +1 357 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Human resources</strong>
                          <span>
                            <strong>T</strong> +1 963 333 8745 <br />
                            <strong>F</strong> +1 159 333 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Factory</strong>
                          <span>
                            <strong>T</strong> +1 753 333 1259 <br />
                            <strong>F</strong> +1 247 652 5555
                          </span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="col-xs-6 col-sm-4">
                      <figure>
                        <figcaption>
                          <strong>Delivery</strong>
                          <span>
                            <strong>T</strong> +1 134 197 7532 <br />
                            <strong>F</strong> +1 291 468 4563
                          </span>
                        </figcaption>
                      </figure>
                    </div>
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

export default Contact;
