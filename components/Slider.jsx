import magnificPopupJs from "libs/jquery.magnific-popup";
import owlCaroselJs from "libs/jquery.owl.carousel";
import strecherItemJs from "libs/jquery.strecherItem";
import { useEffect } from "react";

function Slider() {
  useEffect(() => {
    // -------------------(Assestial  initializations)-----------------\\
    owlCaroselJs(); //   owl carousel
    magnificPopupJs(); // magnific Popup\
    strecherItemJs(); // Strecher accordion
  }, []);
  return (
    <>
      <section className="header-content">
        <div className="owl-slider">
          <div
            className="item"
            // data-bgset="assets/images/gallery-3.webp"
            style={{ backgroundImage: "url(assets/images/gallery-3.webp)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Very Animate.css Friend.
                </h2>
                <div className="desc animated" data-animation="fadeInUp">
                  Combine with animate.css. Or just use your own!.
                </div>
                <div className="desc animated" data-animation="fadeInUp">
                  Bunch of typography effects.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                    className="btn btn-clean"
                  >
                    Buy this template
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item"
            // data-bgset="assets/images/gallery-1.webp"
            style={{ backgroundImage: "url(assets/images/gallery-1.webp)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Modern furniture theme
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Modern & powerfull template. <br /> Clean design & reponsive
                  layout. Google fonts integration
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                    className="btn btn-main"
                  >
                    <i className="icon icon-cart"></i> Buy this template
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item"
            // data-bgset="assets/images/gallery-2.webp"
            style={{ backgroundImage: "url(assets/images/gallery-2.webp)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Mobile ready!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Unlimited Choices. Unbeatable Prices. Free Shipping.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  Furniture category icon fonts!
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a href="category.html" className="btn btn-clean">
                    Get insipred
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================  Icons slider ======================== --> */}

      <section className="owl-icons-wrapper owl-icons-frontpage">
        <header className="hidden">
          <h2>Product categories</h2>
        </header>

        <div className="container">
          <div className="owl-icons">
            <a href="#">
              <figure>
                <i className="f-icon f-icon-sofa"></i>
                <figcaption>Sofa</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-armchair"></i>
                <figcaption>Armchairs</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-chair"></i>
                <figcaption>Chairs</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-dining-table"></i>
                <figcaption>Dining tables</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-media-cabinet"></i>
                <figcaption>Media storage</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-table"></i>
                <figcaption>Tables</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bookcase"></i>
                <figcaption>Bookcase</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bedroom"></i>
                <figcaption>Bedroom</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-nightstand"></i>
                <figcaption>Nightstand</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-children-room"></i>
                <figcaption>Children room</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-kitchen"></i>
                <figcaption>Kitchen</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bathroom"></i>
                <figcaption>Bathroom</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-wardrobe"></i>
                <figcaption>Wardrobe</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-shoe-cabinet"></i>
                <figcaption>Shoe cabinet</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-office"></i>
                <figcaption>Office</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-bar-set"></i>
                <figcaption>Bar sets</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-lightning"></i>
                <figcaption>Lightning</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-carpet"></i>
                <figcaption>Varpet</figcaption>
              </figure>
            </a>

            <a href="#">
              <figure>
                <i className="f-icon f-icon-accessories"></i>
                <figcaption>Accessories</figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
