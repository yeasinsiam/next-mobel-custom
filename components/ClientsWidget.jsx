import owlCaroselJs from "libs/jquery.owl.carousel";
import Image from "next/image";
import { useEffect } from "react";

function ClientWidget() {
  useEffect(() => {
    // -------------------(Assestial  initializations)-----------------\\
    owlCaroselJs(); //   owl carousel
  }, []);
  return (
    //   <!-- ======================== Quotes ======================== -->

    <section
      className="quotes quotes-slider lazyload blur-up"
      data-bgset="assets/images/gallery-2.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="quote-carousel">
            {/* <!-- === quoute item === --> */}

            <div className="quote">
              <div className="image">
                <Image
                  src="/assets/images/user-2.jpg"
                  alt="User image"
                  width={204}
                  height={204}
                  layout="responsive"
                />
              </div>
              <div className="text">
                <h4>Jenna Hale</h4>
                <p>
                  Ipsum dolore eros dolore <br />
                  dolor dolores sit iriure
                </p>
              </div>
              <div className="more">
                <div className="rating">
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                </div>
              </div>
            </div>

            {/* <!-- === quoute item === --> */}

            <div className="quote">
              <div className="image">
                <Image
                  src="/assets/images/user-1.jpg"
                  alt="User image"
                  width={204}
                  height={204}
                  layout="responsive"
                />
              </div>
              <div className="text">
                <h4>Glen Jordan</h4>
                <p>
                  Ipsum dolore eros dolore <br />
                  dolor dolores sit iriure
                </p>
              </div>
              <div className="more">
                <div className="rating">
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                </div>
              </div>
            </div>

            {/* <!-- === quoute item === --> */}

            <div className="quote">
              <div className="image">
                <Image
                  src="/assets/images/user-4.jpg"
                  alt="User image"
                  width={204}
                  height={204}
                  layout="responsive"
                />
              </div>
              <div className="text">
                <h4>Lea Nils</h4>
                <p>
                  Ipsum dolore eros dolore <br />
                  dolor dolores sit iriure
                </p>
              </div>
              <div className="more">
                <div className="rating">
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                </div>
              </div>
            </div>

            {/* <!-- === quoute item === --> */}

            <div className="quote">
              <div className="image">
                <Image
                  src="/assets/images/user-5.jpg"
                  alt="User image"
                  width={204}
                  height={204}
                  layout="responsive"
                />
              </div>
              <div className="text">
                <h4>Nora Star</h4>
                <p>
                  Ipsum dolore eros dolore <br />
                  dolor dolores sit iriure
                </p>
              </div>
              <div className="more">
                <div className="rating">
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                  <span className="icon icon-star"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientWidget;
