import Image from "next/image";
import Link from "next/link";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";

function Layout({ children }) {
  // Defined States
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [isNavbarSticked, setIsNavbarSticked] = useState(false);

  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);

  // Defiend functions
  const handleWindowScroll = () => {
    // Window scroll handler
    window.pageYOffset > 94
      ? setIsNavbarSticked(true)
      : setIsNavbarSticked(false);

    window.pageYOffset > 150
      ? setScrollToTopVisible(true)
      : setScrollToTopVisible(false);
  };
  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll); //  scroll events

    // -------------------(Assestial default  initializations)-----------------\\
    // lazyLoader(); // lazy loader background image
    lazyLoader();

    // end lazy load code

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      <NextNProgress
        showOnShallow={true}
        color="#ffbb00"
        options={{ showSpinner: false }}
      />
      <div className="wraper">
        {/*     <!-- ======================== Navigation ======================== --> */}
        <nav className={`navbar-fixed ${isNavbarSticked && "navbar-sticked"}`}>
          <div className="container">
            <div className="navigation navigation-top clearfix">
              <ul>
                <li>
                  <a href="#">
                    {/* <FontAwesomeIcon icon={faFacebookF} /> */}
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <FontAwesomeIcon icon={faTwitter} /> */}
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <FontAwesomeIcon icon={faYoutube} /> */}
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li className="nav-settings">
                  <a href="#" className="nav-settings-value">
                    {" "}
                    USD $
                  </a>
                  <ul className="nav-settings-list">
                    <li>USD $</li>
                    <li>EUR €</li>
                    <li>CHF Fr.</li>
                    <li>GBP £</li>
                  </ul>
                </li>

                <li className="nav-settings">
                  <a href="#" className="nav-settings-value">
                    {" "}
                    ENG
                  </a>
                  <ul className="nav-settings-list">
                    <li>ENG</li>
                    <li>لعربية</li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="open-login">
                    <i className="icon icon-user"></i>
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="open-search">
                    <i className="icon icon-magnifier"></i>
                    {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                  </a>
                </li>
                <li>
                  <a href="#" className="open-cart">
                    {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                    <i className="icon icon-cart"></i>
                    <span>3</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="navigation navigation-main">
              <a href="#" className="logo">
                <Image
                  src="/assets/images/logo.png"
                  alt="nadrate_ounak_logo"
                  width={141}
                  height={50}
                />
              </a>

              <a
                href="#"
                className="open-menu"
                onClick={() => setToggleMobileMenu(true)}
              >
                <i className="icon icon-menu"></i>
              </a>

              <div
                className={`floating-menu ${toggleMobileMenu && "expanded"}`}
              >
                <div className="close-menu-wrapper">
                  <span
                    className="close-menu"
                    onClick={() => setToggleMobileMenu(false)}
                  >
                    <i className="icon icon-cross"></i>
                  </span>
                </div>

                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop">
                      <a>Shop</a>
                    </Link>
                  </li>

                  {/* <li>
                    <a href="#">
                      Pages{" "}
                      <span className="open-dropdown">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    <div className="navbar-dropdown">
                      <div className="navbar-box">
                        <div className="box-1">
                          <div className="box">
                            <div className="h2">Find your inspiration</div>
                            <div className="clearfix">
                              <p>
                                Homes that differ in terms of style, concept and
                                architectural solutions have been furnished by
                                Furniture Factory. These spaces tell of an
                                international lifestyle that expresses
                                modernity, research and a creative spirit.
                              </p>
                              <a
                                className="btn btn-clean btn-big"
                                href="products-grid.html"
                              >
                                Shop now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="box-2">
                          <div className="box clearfix">
                            <div className="row">
                              <div className="col-md-4">
                                <ul>
                                  <li className="label">Homepage</li>
                                  <li>
                                    <a href="#">Home - Slider</a>
                                  </li>
                                  <li>
                                    <a href="index-2.html">
                                      Home - Tabsy gallery
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index-3.html">
                                      Home - Slider full screen
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index-4.html">Home - Info icons</a>
                                  </li>
                                  <li>
                                    <a href="index-xmas.html">Home - Xmas</a>
                                  </li>
                                  <li>
                                    <a href="index-rtl.html">
                                      Home - RTL{" "}
                                      <span className="label label-warning">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="index-5.html">Onepage</a>
                                  </li>
                                  <li>
                                    <a href="index-6.html">
                                      Onepage - Filters{" "}
                                      <span className="label label-warning">
                                        Isotope
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4">
                                <ul>
                                  <li className="label">Blog</li>
                                  <li>
                                    <a href="blog-grid.html">Blog grid</a>
                                  </li>
                                  <li>
                                    <a href="blog-list.html">Blog list</a>
                                  </li>
                                  <li>
                                    <a href="blog-grid-fullpage.html">
                                      Blog fullpage
                                    </a>
                                  </li>
                                  <li>
                                    <a href="ideas.html">Blog ideas</a>
                                  </li>
                                  <li>
                                    <a href="article.html">Blog article</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4">
                                <ul>
                                  <li className="label">Pages</li>
                                  <li>
                                    <a href="about.html">About us</a>
                                  </li>
                                  <li>
                                    <a href="contact.html">Contact</a>
                                  </li>
                                  <li>
                                    <a href="login.html">
                                      Login & Register{" "}
                                      <span className="label label-warning">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li className="label">Extras</li>
                                  <li>
                                    <Link href="/shortcode">
                                      <a>Shortcodes</a>
                                    </Link>
                                  </li>
                                  <li>
                                    <a href="email-receipt.html">
                                      Email template{" "}
                                      <span className="label label-warning">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="404.html">
                                      Not found 404{" "}
                                      <span className="label label-warning">
                                        New
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  {/* <li>
                    <a href="#">
                      Shop{" "}
                      <span className="open-dropdown">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    <div className="navbar-dropdown navbar-dropdown-single">
                      <div className="navbar-box">
                        <div className="box-2">
                          <div className="box clearfix">
                            <ul>
                              <li className="label">Shop</li>
                              <li>
                                <a href="products-grid.html">Products grid</a>
                              </li>
                              <li>
                                <a href="products-list.html">Products list</a>
                              </li>
                              <li>
                                <a href="category.html">Products intro</a>
                              </li>
                              <li>
                                <a href="products-topbar.html">
                                  Products topbar
                                </a>
                              </li>
                              <li>
                                <a href="product.html">Product overview</a>
                              </li>
                            </ul>
                            <ul>
                              <li className="label">Shop Isotope</li>
                              <li>
                                <a href="products-grid-isotope.html">
                                  Products filters{" "}
                                  <span className="label label-warning">
                                    New
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="products-topbar-isotope.html">
                                  Products topbar{" "}
                                  <span className="label label-warning">
                                    New
                                  </span>
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li className="label">Checkout</li>
                              <li>
                                <a href="checkout-1.html">
                                  Checkout - Cart items
                                </a>
                              </li>
                              <li>
                                <a href="checkout-2.html">
                                  Checkout - Delivery
                                </a>
                              </li>
                              <li>
                                <a href="checkout-3.html">Checkout - Payment</a>
                              </li>
                              <li>
                                <a href="checkout-4.html">Checkout - Receipt</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}

                  <li>
                    <a href="#">
                      Icons{" "}
                      <span className="open-dropdown">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    <div className="navbar-dropdown">
                      <div className="navbar-box">
                        <div className="box-1">
                          <div className="image">
                            <Image
                              src="/assets/images/blog-2.jpg"
                              alt="Lorem ipsum"
                              width={640}
                              height={391}
                            />
                          </div>
                          <div className="box">
                            <div className="h2">Best ideas</div>
                            <div className="clearfix">
                              <p>
                                Homes that differ in terms of style, concept and
                                architectural solutions have been furnished by
                                Furniture Factory. These spaces tell of an
                                international lifestyle that expresses
                                modernity, research and a creative spirit.
                              </p>
                              <a
                                className="btn btn-clean btn-big"
                                href="ideas.html"
                              >
                                Explore
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="box-2">
                          <div className="clearfix categories">
                            <div className="row">
                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-sofa"></i>
                                    <figcaption>Sofa</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-armchair"></i>
                                    <figcaption>Armchairs</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-chair"></i>
                                    <figcaption>Chairs</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-dining-table"></i>
                                    <figcaption>Dining tables</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-media-cabinet"></i>
                                    <figcaption>Media storage</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-table"></i>
                                    <figcaption>Tables</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-bookcase"></i>
                                    <figcaption>Bookcase</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-bedroom"></i>
                                    <figcaption>Bedroom</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-nightstand"></i>
                                    <figcaption>Nightstand</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-children-room"></i>
                                    <figcaption>Children room</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-kitchen"></i>
                                    <figcaption>Kitchen</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-bathroom"></i>
                                    <figcaption>Bathroom</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-wardrobe"></i>
                                    <figcaption>Wardrobe</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-shoe-cabinet"></i>
                                    <figcaption>Shoe cabinet</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-office"></i>
                                    <figcaption>Office</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-bar-set"></i>
                                    <figcaption>Bar sets</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-lightning"></i>
                                    <figcaption>Lightning</figcaption>
                                  </figure>
                                </a>
                              </div>

                              <div className="col-sm-3 col-xs-6">
                                <a href="#">
                                  <figure>
                                    <i className="f-icon f-icon-carpet"></i>
                                    <figcaption>Carpet</figcaption>
                                  </figure>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* <li>
                    <a href="#">
                      Megamenu{" "}
                      <span className="open-dropdown">
                        <i className="fa fa-angle-down"></i>
                      </span>
                    </a>
                    <div className="navbar-dropdown">
                      <div className="navbar-box">
                        <div className="box-2">
                          <div className="box clearfix">
                            <div className="row">
                              <div className="clearfix">
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Seating</li>
                                    <li>
                                      <a href="#">Benches</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        Submenu{" "}
                                        <span className="label label-warning">
                                          New
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Chaises</a>
                                    </li>
                                    <li>
                                      <a href="#">Recliners</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Storage</li>
                                    <li>
                                      <a href="#">Bockcases</a>
                                    </li>
                                    <li>
                                      <a href="#">Closets</a>
                                    </li>
                                    <li>
                                      <a href="#">Wardrobes</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        Dressers{" "}
                                        <span className="label label-success">
                                          Trending
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Sideboards </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Tables</li>
                                    <li>
                                      <a href="#">Consoles</a>
                                    </li>
                                    <li>
                                      <a href="#">Desks</a>
                                    </li>
                                    <li>
                                      <a href="#">Dining tables</a>
                                    </li>
                                    <li>
                                      <a href="#">Occasional tables</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Chairs</li>
                                    <li>
                                      <a href="#">Dining Chairs</a>
                                    </li>
                                    <li>
                                      <a href="#">Office Chairs</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        Lounge Chairs{" "}
                                        <span className="label label-warning">
                                          Offer
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Stools</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="clearfix">
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Kitchen</li>
                                    <li>
                                      <a href="#">Kitchen types</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        Kitchen elements{" "}
                                        <span className="label label-info">
                                          50%
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Bars</a>
                                    </li>
                                    <li>
                                      <a href="#">Wall decoration</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Accessories</li>
                                    <li>
                                      <a href="#">Coat Racks</a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        Lazy bags{" "}
                                        <span className="label label-success">
                                          Info
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Beds</li>
                                    <li>
                                      <a href="#">Beds</a>
                                    </li>
                                    <li>
                                      <a href="#">Sofabeds</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3">
                                  <ul>
                                    <li className="label">Entertainment</li>
                                    <li>
                                      <a href="#">
                                        Wall units{" "}
                                        <span className="label label-warning">
                                          Popular
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Media sets</a>
                                    </li>
                                    <li>
                                      <a href="#">Decoration</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/shortcode">
                      <a>Shortcodes</a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Gose here */}
        {children}

        <footer>
          <div className="container">
            <div className="footer-showroom">
              <div className="row">
                <div className="col-sm-8">
                  <h2>Visit our showroom</h2>
                  <p>200 12th Ave, New York, NY 10001, USA</p>
                  <p>
                    Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun:
                    12pm - 2 pm
                  </p>
                </div>
                <div className="col-sm-4 text-center">
                  <a href="#" className="btn btn-clean">
                    <span className="icon icon-map-marker"></span> Get
                    directions
                  </a>
                  <div className="call-us h4">
                    <span className="icon icon-phone-handset"></span>{" "}
                    333.278.06622
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="row">
                <div className="col-sm-4 col-md-2">
                  <h5>Browse by</h5>
                  <ul>
                    <li>
                      <a href="#">Brand</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Category</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-md-2">
                  <h5>Recources</h5>
                  <ul>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Sales</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-md-2">
                  <h5>Our company</h5>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 col-md-6">
                  <h5>Sign up for our newsletter</h5>
                  <p>
                    <i>
                      Add your email address to sign up for our monthly emails
                      and to receive promotional offers.
                    </i>
                  </p>
                  <div className="form-group form-newsletter">
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      // value=""
                      placeholder="Email address"
                    />
                    <input
                      type="submit"
                      className="btn btn-clean btn-sm"
                      value="Subscribe"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-social">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155">
                    <i className="fa fa-download"></i> Download Mobel
                  </a>
                  &nbsp; | <a href="#">Sitemap</a> &nbsp; | &nbsp;{" "}
                  <a href="#">Privacy policy</a>
                </div>
                <div className="col-sm-6 links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`scroll-top  ${scrollToTopVisible && "visible"}`}
            onClick={handleScrollToTopClick}
          >
            <i className="icon icon-chevron-up"></i>
          </div>
        </footer>
      </div>
    </>
  );
}

function lazyLoader() {
  (function (window, factory) {
    var lazySizes = factory(window, window.document, Date);
    window.lazySizes = lazySizes;
    if (typeof module == "object" && module.exports) {
      module.exports = lazySizes;
    }
  })(
    typeof window != "undefined" ? window : {},
    /**
     * import("./types/global")
     * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
     */
    function l(window, document, Date) {
      // Pass in the window Date function also for SSR because the Date class can be lost
      "use strict";
      /*jshint eqnull:true */

      var lazysizes,
        /**
         * @type { LazySizesConfigPartial }
         */
        lazySizesCfg;

      (function () {
        var prop;

        var lazySizesDefaults = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          //strictClass: 'lazystrict',
          autosizesClass: "lazyautosizes",
          fastLoadedClass: "ls-is-cached",
          iframeLoadMode: 0,
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          //preloadAfterLoad: false,
          minSize: 40,
          customMedia: {},
          init: true,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: true,
          ricTimeout: 0,
          throttleDelay: 125,
        };

        lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

        for (prop in lazySizesDefaults) {
          if (!(prop in lazySizesCfg)) {
            lazySizesCfg[prop] = lazySizesDefaults[prop];
          }
        }
      })();

      if (!document || !document.getElementsByClassName) {
        return {
          init: function () {},
          /**
           * @type { LazySizesConfigPartial }
           */
          cfg: lazySizesCfg,
          /**
           * @type { true }
           */
          noSupport: true,
        };
      }

      var docElem = document.documentElement;

      var supportPicture = window.HTMLPictureElement;

      var _addEventListener = "addEventListener";

      var _getAttribute = "getAttribute";

      /**
       * Update to bind to window because 'this' becomes null during SSR
       * builds.
       */
      var addEventListener = window[_addEventListener].bind(window);

      var setTimeout = window.setTimeout;

      var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

      var requestIdleCallback = window.requestIdleCallback;

      var regPicture = /^picture$/i;

      var loadEvents = ["load", "error", "lazyincluded", "_lazyloaded"];

      var regClassCache = {};

      var forEach = Array.prototype.forEach;

      /**
       * @param ele {Element}
       * @param cls {string}
       */
      var hasClass = function (ele, cls) {
        if (!regClassCache[cls]) {
          regClassCache[cls] = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        }
        return (
          regClassCache[cls].test(ele[_getAttribute]("class") || "") &&
          regClassCache[cls]
        );
      };

      /**
       * @param ele {Element}
       * @param cls {string}
       */
      var addClass = function (ele, cls) {
        if (!hasClass(ele, cls)) {
          ele.setAttribute(
            "class",
            (ele[_getAttribute]("class") || "").trim() + " " + cls
          );
        }
      };

      /**
       * @param ele {Element}
       * @param cls {string}
       */
      var removeClass = function (ele, cls) {
        var reg;
        if ((reg = hasClass(ele, cls))) {
          ele.setAttribute(
            "class",
            (ele[_getAttribute]("class") || "").replace(reg, " ")
          );
        }
      };

      var addRemoveLoadEvents = function (dom, fn, add) {
        var action = add ? _addEventListener : "removeEventListener";
        if (add) {
          addRemoveLoadEvents(dom, fn);
        }
        loadEvents.forEach(function (evt) {
          dom[action](evt, fn);
        });
      };

      /**
       * @param elem { Element }
       * @param name { string }
       * @param detail { any }
       * @param noBubbles { boolean }
       * @param noCancelable { boolean }
       * @returns { CustomEvent }
       */
      var triggerEvent = function (
        elem,
        name,
        detail,
        noBubbles,
        noCancelable
      ) {
        var event = document.createEvent("Event");

        if (!detail) {
          detail = {};
        }

        detail.instance = lazysizes;

        event.initEvent(name, !noBubbles, !noCancelable);

        event.detail = detail;

        elem.dispatchEvent(event);
        return event;
      };

      var updatePolyfill = function (el, full) {
        var polyfill;
        if (
          !supportPicture &&
          (polyfill = window.picturefill || lazySizesCfg.pf)
        ) {
          if (full && full.src && !el[_getAttribute]("srcset")) {
            el.setAttribute("srcset", full.src);
          }
          polyfill({ reevaluate: true, elements: [el] });
        } else if (full && full.src) {
          el.src = full.src;
        }
      };

      var getCSS = function (elem, style) {
        return (getComputedStyle(elem, null) || {})[style];
      };

      /**
       *
       * @param elem { Element }
       * @param parent { Element }
       * @param [width] {number}
       * @returns {number}
       */
      var getWidth = function (elem, parent, width) {
        width = width || elem.offsetWidth;

        while (
          width < lazySizesCfg.minSize &&
          parent &&
          !elem._lazysizesWidth
        ) {
          width = parent.offsetWidth;
          parent = parent.parentNode;
        }

        return width;
      };

      var rAF = (function () {
        var running, waiting;
        var firstFns = [];
        var secondFns = [];
        var fns = firstFns;

        var run = function () {
          var runFns = fns;

          fns = firstFns.length ? secondFns : firstFns;

          running = true;
          waiting = false;

          while (runFns.length) {
            runFns.shift()();
          }

          running = false;
        };

        var rafBatch = function (fn, queue) {
          if (running && !queue) {
            fn.apply(this, arguments);
          } else {
            fns.push(fn);

            if (!waiting) {
              waiting = true;
              (document.hidden ? setTimeout : requestAnimationFrame)(run);
            }
          }
        };

        rafBatch._lsFlush = run;

        return rafBatch;
      })();

      var rAFIt = function (fn, simple) {
        return simple
          ? function () {
              rAF(fn);
            }
          : function () {
              var that = this;
              var args = arguments;
              rAF(function () {
                fn.apply(that, args);
              });
            };
      };

      var throttle = function (fn) {
        var running;
        var lastTime = 0;
        var gDelay = lazySizesCfg.throttleDelay;
        var rICTimeout = lazySizesCfg.ricTimeout;
        var run = function () {
          running = false;
          lastTime = Date.now();
          fn();
        };
        var idleCallback =
          requestIdleCallback && rICTimeout > 49
            ? function () {
                requestIdleCallback(run, { timeout: rICTimeout });

                if (rICTimeout !== lazySizesCfg.ricTimeout) {
                  rICTimeout = lazySizesCfg.ricTimeout;
                }
              }
            : rAFIt(function () {
                setTimeout(run);
              }, true);
        return function (isPriority) {
          var delay;

          if ((isPriority = isPriority === true)) {
            rICTimeout = 33;
          }

          if (running) {
            return;
          }

          running = true;

          delay = gDelay - (Date.now() - lastTime);

          if (delay < 0) {
            delay = 0;
          }

          if (isPriority || delay < 9) {
            idleCallback();
          } else {
            setTimeout(idleCallback, delay);
          }
        };
      };

      //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
      var debounce = function (func) {
        var timeout, timestamp;
        var wait = 99;
        var run = function () {
          timeout = null;
          func();
        };
        var later = function () {
          var last = Date.now() - timestamp;

          if (last < wait) {
            setTimeout(later, wait - last);
          } else {
            (requestIdleCallback || run)(run);
          }
        };

        return function () {
          timestamp = Date.now();

          if (!timeout) {
            timeout = setTimeout(later, wait);
          }
        };
      };

      var loader = (function () {
        var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

        var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

        var regImg = /^img$/i;
        var regIframe = /^iframe$/i;

        var supportScroll =
          "onscroll" in window && !/(gle|ing)bot/.test(navigator.userAgent);

        var shrinkExpand = 0;
        var currentExpand = 0;

        var isLoading = 0;
        var lowRuns = -1;

        var resetPreloading = function (e) {
          isLoading--;
          if (!e || isLoading < 0 || !e.target) {
            isLoading = 0;
          }
        };

        var isVisible = function (elem) {
          if (isBodyHidden == null) {
            isBodyHidden = getCSS(document.body, "visibility") == "hidden";
          }

          return (
            isBodyHidden ||
            !(
              getCSS(elem.parentNode, "visibility") == "hidden" &&
              getCSS(elem, "visibility") == "hidden"
            )
          );
        };

        var isNestedVisible = function (elem, elemExpand) {
          var outerRect;
          var parent = elem;
          var visible = isVisible(elem);

          eLtop -= elemExpand;
          eLbottom += elemExpand;
          eLleft -= elemExpand;
          eLright += elemExpand;

          while (
            visible &&
            (parent = parent.offsetParent) &&
            parent != document.body &&
            parent != docElem
          ) {
            visible = (getCSS(parent, "opacity") || 1) > 0;

            if (visible && getCSS(parent, "overflow") != "visible") {
              outerRect = parent.getBoundingClientRect();
              visible =
                eLright > outerRect.left &&
                eLleft < outerRect.right &&
                eLbottom > outerRect.top - 1 &&
                eLtop < outerRect.bottom + 1;
            }
          }

          return visible;
        };

        var checkElements = function () {
          var eLlen,
            i,
            rect,
            autoLoadElem,
            loadedSomething,
            elemExpand,
            elemNegativeExpand,
            elemExpandVal,
            beforeExpandVal,
            defaultExpand,
            preloadExpand,
            hFac;
          var lazyloadElems = lazysizes.elements;

          if (
            (loadMode = lazySizesCfg.loadMode) &&
            isLoading < 8 &&
            (eLlen = lazyloadElems.length)
          ) {
            i = 0;

            lowRuns++;

            for (; i < eLlen; i++) {
              if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
                continue;
              }

              if (
                !supportScroll ||
                (lazysizes.prematureUnveil &&
                  lazysizes.prematureUnveil(lazyloadElems[i]))
              ) {
                unveilElement(lazyloadElems[i]);
                continue;
              }

              if (
                !(elemExpandVal =
                  lazyloadElems[i][_getAttribute]("data-expand")) ||
                !(elemExpand = elemExpandVal * 1)
              ) {
                elemExpand = currentExpand;
              }

              if (!defaultExpand) {
                defaultExpand =
                  !lazySizesCfg.expand || lazySizesCfg.expand < 1
                    ? docElem.clientHeight > 500 && docElem.clientWidth > 500
                      ? 500
                      : 370
                    : lazySizesCfg.expand;

                lazysizes._defEx = defaultExpand;

                preloadExpand = defaultExpand * lazySizesCfg.expFactor;
                hFac = lazySizesCfg.hFac;
                isBodyHidden = null;

                if (
                  currentExpand < preloadExpand &&
                  isLoading < 1 &&
                  lowRuns > 2 &&
                  loadMode > 2 &&
                  !document.hidden
                ) {
                  currentExpand = preloadExpand;
                  lowRuns = 0;
                } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
                  currentExpand = defaultExpand;
                } else {
                  currentExpand = shrinkExpand;
                }
              }

              if (beforeExpandVal !== elemExpand) {
                eLvW = innerWidth + elemExpand * hFac;
                elvH = innerHeight + elemExpand;
                elemNegativeExpand = elemExpand * -1;
                beforeExpandVal = elemExpand;
              }

              rect = lazyloadElems[i].getBoundingClientRect();

              if (
                (eLbottom = rect.bottom) >= elemNegativeExpand &&
                (eLtop = rect.top) <= elvH &&
                (eLright = rect.right) >= elemNegativeExpand * hFac &&
                (eLleft = rect.left) <= eLvW &&
                (eLbottom || eLright || eLleft || eLtop) &&
                (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
                ((isCompleted &&
                  isLoading < 3 &&
                  !elemExpandVal &&
                  (loadMode < 3 || lowRuns < 4)) ||
                  isNestedVisible(lazyloadElems[i], elemExpand))
              ) {
                unveilElement(lazyloadElems[i]);
                loadedSomething = true;
                if (isLoading > 9) {
                  break;
                }
              } else if (
                !loadedSomething &&
                isCompleted &&
                !autoLoadElem &&
                isLoading < 4 &&
                lowRuns < 4 &&
                loadMode > 2 &&
                (preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
                (preloadElems[0] ||
                  (!elemExpandVal &&
                    (eLbottom ||
                      eLright ||
                      eLleft ||
                      eLtop ||
                      lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) !=
                        "auto")))
              ) {
                autoLoadElem = preloadElems[0] || lazyloadElems[i];
              }
            }

            if (autoLoadElem && !loadedSomething) {
              unveilElement(autoLoadElem);
            }
          }
        };

        var throttledCheckElements = throttle(checkElements);

        var switchLoadingClass = function (e) {
          var elem = e.target;

          if (elem._lazyCache) {
            delete elem._lazyCache;
            return;
          }

          resetPreloading(e);
          addClass(elem, lazySizesCfg.loadedClass);
          removeClass(elem, lazySizesCfg.loadingClass);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass);
          triggerEvent(elem, "lazyloaded");
        };
        var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
        var rafSwitchLoadingClass = function (e) {
          rafedSwitchLoadingClass({ target: e.target });
        };

        var changeIframeSrc = function (elem, src) {
          var loadMode =
            elem.getAttribute("data-load-mode") || lazySizesCfg.iframeLoadMode;

          // loadMode can be also a string!
          if (loadMode == 0) {
            elem.contentWindow.location.replace(src);
          } else if (loadMode == 1) {
            elem.src = src;
          }
        };

        var handleSources = function (source) {
          var customMedia;

          var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

          if (
            (customMedia =
              lazySizesCfg.customMedia[
                source[_getAttribute]("data-media") ||
                  source[_getAttribute]("media")
              ])
          ) {
            source.setAttribute("media", customMedia);
          }

          if (sourceSrcset) {
            source.setAttribute("srcset", sourceSrcset);
          }
        };

        var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
          var src, srcset, parent, isPicture, event, firesLoad;

          if (
            !(event = triggerEvent(elem, "lazybeforeunveil", detail))
              .defaultPrevented
          ) {
            if (sizes) {
              if (isAuto) {
                addClass(elem, lazySizesCfg.autosizesClass);
              } else {
                elem.setAttribute("sizes", sizes);
              }
            }

            srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
            src = elem[_getAttribute](lazySizesCfg.srcAttr);

            if (isImg) {
              parent = elem.parentNode;
              isPicture = parent && regPicture.test(parent.nodeName || "");
            }

            firesLoad =
              detail.firesLoad ||
              ("src" in elem && (srcset || src || isPicture));

            event = { target: elem };

            addClass(elem, lazySizesCfg.loadingClass);

            if (firesLoad) {
              clearTimeout(resetPreloadingTimer);
              resetPreloadingTimer = setTimeout(resetPreloading, 2500);
              addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
            }

            if (isPicture) {
              forEach.call(
                parent.getElementsByTagName("source"),
                handleSources
              );
            }

            if (srcset) {
              elem.setAttribute("srcset", srcset);
            } else if (src && !isPicture) {
              if (regIframe.test(elem.nodeName)) {
                changeIframeSrc(elem, src);
              } else {
                elem.src = src;
              }
            }

            if (isImg && (srcset || isPicture)) {
              updatePolyfill(elem, { src: src });
            }
          }

          if (elem._lazyRace) {
            delete elem._lazyRace;
          }
          removeClass(elem, lazySizesCfg.lazyClass);

          rAF(function () {
            // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
            var isLoaded = elem.complete && elem.naturalWidth > 1;

            if (!firesLoad || isLoaded) {
              if (isLoaded) {
                addClass(elem, lazySizesCfg.fastLoadedClass);
              }
              switchLoadingClass(event);
              elem._lazyCache = true;
              setTimeout(function () {
                if ("_lazyCache" in elem) {
                  delete elem._lazyCache;
                }
              }, 9);
            }
            if (elem.loading == "lazy") {
              isLoading--;
            }
          }, true);
        });

        /**
         *
         * @param elem { Element }
         */
        var unveilElement = function (elem) {
          if (elem._lazyRace) {
            return;
          }
          var detail;

          var isImg = regImg.test(elem.nodeName);

          //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
          var sizes =
            isImg &&
            (elem[_getAttribute](lazySizesCfg.sizesAttr) ||
              elem[_getAttribute]("sizes"));
          var isAuto = sizes == "auto";

          if (
            (isAuto || !isCompleted) &&
            isImg &&
            (elem[_getAttribute]("src") || elem.srcset) &&
            !elem.complete &&
            !hasClass(elem, lazySizesCfg.errorClass) &&
            hasClass(elem, lazySizesCfg.lazyClass)
          ) {
            return;
          }

          detail = triggerEvent(elem, "lazyunveilread").detail;

          if (isAuto) {
            autoSizer.updateElem(elem, true, elem.offsetWidth);
          }

          elem._lazyRace = true;
          isLoading++;

          lazyUnveil(elem, detail, isAuto, sizes, isImg);
        };

        var afterScroll = debounce(function () {
          lazySizesCfg.loadMode = 3;
          throttledCheckElements();
        });

        var altLoadmodeScrollListner = function () {
          if (lazySizesCfg.loadMode == 3) {
            lazySizesCfg.loadMode = 2;
          }
          afterScroll();
        };

        var onload = function () {
          if (isCompleted) {
            return;
          }
          if (Date.now() - started < 999) {
            setTimeout(onload, 999);
            return;
          }

          isCompleted = true;

          lazySizesCfg.loadMode = 3;

          throttledCheckElements();

          addEventListener("scroll", altLoadmodeScrollListner, true);
        };

        return {
          _: function () {
            started = Date.now();

            lazysizes.elements = document.getElementsByClassName(
              lazySizesCfg.lazyClass
            );
            preloadElems = document.getElementsByClassName(
              lazySizesCfg.lazyClass + " " + lazySizesCfg.preloadClass
            );

            addEventListener("scroll", throttledCheckElements, true);

            addEventListener("resize", throttledCheckElements, true);

            addEventListener("pageshow", function (e) {
              if (e.persisted) {
                var loadingElements = document.querySelectorAll(
                  "." + lazySizesCfg.loadingClass
                );

                if (loadingElements.length && loadingElements.forEach) {
                  requestAnimationFrame(function () {
                    loadingElements.forEach(function (img) {
                      if (img.complete) {
                        unveilElement(img);
                      }
                    });
                  });
                }
              }
            });

            if (window.MutationObserver) {
              new MutationObserver(throttledCheckElements).observe(docElem, {
                childList: true,
                subtree: true,
                attributes: true,
              });
            } else {
              docElem[_addEventListener](
                "DOMNodeInserted",
                throttledCheckElements,
                true
              );
              docElem[_addEventListener](
                "DOMAttrModified",
                throttledCheckElements,
                true
              );
              setInterval(throttledCheckElements, 999);
            }

            addEventListener("hashchange", throttledCheckElements, true);

            //, 'fullscreenchange'
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend",
            ].forEach(function (name) {
              document[_addEventListener](name, throttledCheckElements, true);
            });

            if (/d$|^c/.test(document.readyState)) {
              onload();
            } else {
              addEventListener("load", onload);
              document[_addEventListener](
                "DOMContentLoaded",
                throttledCheckElements
              );
              setTimeout(onload, 20000);
            }

            if (lazysizes.elements.length) {
              checkElements();
              rAF._lsFlush();
            } else {
              throttledCheckElements();
            }
          },
          checkElems: throttledCheckElements,
          unveil: unveilElement,
          _aLSL: altLoadmodeScrollListner,
        };
      })();

      var autoSizer = (function () {
        var autosizesElems;

        var sizeElement = rAFIt(function (elem, parent, event, width) {
          var sources, i, len;
          elem._lazysizesWidth = width;
          width += "px";

          elem.setAttribute("sizes", width);

          if (regPicture.test(parent.nodeName || "")) {
            sources = parent.getElementsByTagName("source");
            for (i = 0, len = sources.length; i < len; i++) {
              sources[i].setAttribute("sizes", width);
            }
          }

          if (!event.detail.dataAttr) {
            updatePolyfill(elem, event.detail);
          }
        });
        /**
         *
         * @param elem {Element}
         * @param dataAttr
         * @param [width] { number }
         */
        var getSizeElement = function (elem, dataAttr, width) {
          var event;
          var parent = elem.parentNode;

          if (parent) {
            width = getWidth(elem, parent, width);
            event = triggerEvent(elem, "lazybeforesizes", {
              width: width,
              dataAttr: !!dataAttr,
            });

            if (!event.defaultPrevented) {
              width = event.detail.width;

              if (width && width !== elem._lazysizesWidth) {
                sizeElement(elem, parent, event, width);
              }
            }
          }
        };

        var updateElementsSizes = function () {
          var i;
          var len = autosizesElems.length;
          if (len) {
            i = 0;

            for (; i < len; i++) {
              getSizeElement(autosizesElems[i]);
            }
          }
        };

        var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

        return {
          _: function () {
            autosizesElems = document.getElementsByClassName(
              lazySizesCfg.autosizesClass
            );
            addEventListener("resize", debouncedUpdateElementsSizes);
          },
          checkElems: debouncedUpdateElementsSizes,
          updateElem: getSizeElement,
        };
      })();

      var init = function () {
        if (!init.i && document.getElementsByClassName) {
          init.i = true;
          autoSizer._();
          loader._();
        }
      };

      setTimeout(function () {
        if (lazySizesCfg.init) {
          init();
        }
      });

      lazysizes = {
        /**
         * @type { LazySizesConfigPartial }
         */
        cfg: lazySizesCfg,
        autoSizer: autoSizer,
        loader: loader,
        init: init,
        uP: updatePolyfill,
        aC: addClass,
        rC: removeClass,
        hC: hasClass,
        fire: triggerEvent,
        gW: getWidth,
        rAF: rAF,
      };

      return lazysizes;
    }
  );
  //
  /*! lazysizes - v5.3.2 */

  //   Bgset
  !(function (e, t) {
    var a = function () {
      t(e.lazySizes), e.removeEventListener("lazyunveilread", a, !0);
    };
    (t = t.bind(null, e, e.document)),
      "object" == typeof module && module.exports
        ? t(require("lazysizes"))
        : "function" == typeof define && define.amd
        ? define(["lazysizes"], t)
        : e.lazySizes
        ? a()
        : e.addEventListener("lazyunveilread", a, !0);
  })(window, function (e, z, c) {
    "use strict";
    var g, y, b, f, r, l, s, v, m;
    e.addEventListener &&
      ((g = c.cfg),
      (y = /\s+/g),
      (b = /\s*\|\s+|\s+\|\s*/g),
      (f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/),
      (r = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/),
      (l = /\(|\)|'/),
      (s = { contain: 1, cover: 1 }),
      (v = function (e, t) {
        var a;
        t &&
          ((a = t.match(r)) && a[1]
            ? e.setAttribute("type", a[1])
            : e.setAttribute("media", g.customMedia[t] || t));
      }),
      (m = function (e) {
        var t, a, r, i, s;
        e.target._lazybgset &&
          ((a = (t = e.target)._lazybgset),
          (r = t.currentSrc || t.src) &&
            ((i = l.test(r) ? JSON.stringify(r) : r),
            (s = c.fire(a, "bgsetproxy", {
              src: r,
              useSrc: i,
              fullSrc: null,
            })).defaultPrevented ||
              (a.style.backgroundImage =
                s.detail.fullSrc || "url(" + s.detail.useSrc + ")")),
          t._lazybgsetLoading &&
            (c.fire(a, "_lazyloaded", {}, !1, !0), delete t._lazybgsetLoading));
      }),
      addEventListener("lazybeforeunveil", function (e) {
        var t, a, r, i, s, l, n, d, u, o;
        !e.defaultPrevented &&
          (t = e.target.getAttribute("data-bgset")) &&
          ((u = e.target),
          ((o = z.createElement("img")).alt = ""),
          (o._lazybgsetLoading = !0),
          (e.detail.firesLoad = !0),
          (a = t),
          (r = u),
          (i = o),
          (s = z.createElement("picture")),
          (l = r.getAttribute(g.sizesAttr)),
          (n = r.getAttribute("data-ratio")),
          (d = r.getAttribute("data-optimumx")),
          r._lazybgset &&
            r._lazybgset.parentNode == r &&
            r.removeChild(r._lazybgset),
          Object.defineProperty(i, "_lazybgset", { value: r, writable: !0 }),
          Object.defineProperty(r, "_lazybgset", { value: s, writable: !0 }),
          (a = a.replace(y, " ").split(b)),
          (s.style.display = "none"),
          (i.className = g.lazyClass),
          1 != a.length || l || (l = "auto"),
          a.forEach(function (e) {
            var t,
              a = z.createElement("source");
            l && "auto" != l && a.setAttribute("sizes", l),
              (t = e.match(f))
                ? (a.setAttribute(g.srcsetAttr, t[1]), v(a, t[2]), v(a, t[3]))
                : a.setAttribute(g.srcsetAttr, e),
              s.appendChild(a);
          }),
          l &&
            (i.setAttribute(g.sizesAttr, l),
            r.removeAttribute(g.sizesAttr),
            r.removeAttribute("sizes")),
          d && i.setAttribute("data-optimumx", d),
          n && i.setAttribute("data-ratio", n),
          s.appendChild(i),
          r.appendChild(s),
          setTimeout(function () {
            c.loader.unveil(o),
              c.rAF(function () {
                c.fire(o, "_lazyloaded", {}, !0, !0),
                  o.complete && m({ target: o });
              });
          }));
      }),
      z.addEventListener("load", m, !0),
      e.addEventListener(
        "lazybeforesizes",
        function (e) {
          var t, a, r, i;
          e.detail.instance == c &&
            e.target._lazybgset &&
            e.detail.dataAttr &&
            ((t = e.target._lazybgset),
            (r = t),
            (i = (
              getComputedStyle(r) || { getPropertyValue: function () {} }
            ).getPropertyValue("background-size")),
            !s[i] && s[r.style.backgroundSize] && (i = r.style.backgroundSize),
            s[(a = i)] &&
              ((e.target._lazysizesParentFit = a),
              c.rAF(function () {
                e.target.setAttribute("data-parent-fit", a),
                  e.target._lazysizesParentFit &&
                    delete e.target._lazysizesParentFit;
              })));
        },
        !0
      ),
      z.documentElement.addEventListener("lazybeforesizes", function (e) {
        var t, a;
        !e.defaultPrevented &&
          e.target._lazybgset &&
          e.detail.instance == c &&
          (e.detail.width =
            ((t = e.target._lazybgset),
            (a = c.gW(t, t.parentNode)),
            (!t._lazysizesWidth || a > t._lazysizesWidth) &&
              (t._lazysizesWidth = a),
            t._lazysizesWidth));
      }));
  });

  // blur up
  (function (window, factory) {
    if (!window) {
      return;
    }
    var globalInstall = function () {
      factory(window.lazySizes);
      window.removeEventListener("lazyunveilread", globalInstall, true);
    };

    factory = factory.bind(null, window, window.document);

    if (typeof module == "object" && module.exports) {
      factory(require("lazysizes"));
    } else if (typeof define == "function" && define.amd) {
      define(["lazysizes"], factory);
    } else if (window.lazySizes) {
      globalInstall();
    } else {
      window.addEventListener("lazyunveilread", globalInstall, true);
    }
  })(
    typeof window != "undefined" ? window : 0,
    function (window, document, lazySizes) {
      "use strict";

      var lazySizesCfg;

      (function () {
        var prop;

        var blurUpDefaults = {
          blurUpClass: "ls-blur-up-img",
          blurUpLoadingClass: "ls-blur-up-is-loading",
          blurUpInviewClass: "ls-inview",
          blurUpLoadedClass: "ls-blur-up-loaded",
          blurUpLoadedOriginalClass: "ls-original-loaded",
        };

        lazySizesCfg = lazySizes.cfg || {};

        for (prop in blurUpDefaults) {
          if (!(prop in lazySizesCfg)) {
            lazySizesCfg[prop] = blurUpDefaults[prop];
          }
        }
      })();

      var slice = [].slice;
      var regBlurUp = /blur-up["']*\s*:\s*["']*(always|auto)/;
      var regType = /image\/(jpeg|png|gif|svg\+xml)/;
      var transSrc =
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

      var matchesMedia = function (source) {
        var media =
          source.getAttribute("data-media") || source.getAttribute("media");
        var type = source.getAttribute("type");

        return (
          (!type || regType.test(type)) &&
          (!media ||
            window.matchMedia(lazySizes.cfg.customMedia[media] || media)
              .matches)
        );
      };

      var getLowSrc = function (picture, img) {
        var matchingLowSrc;
        var sources = picture
          ? slice.call(picture.querySelectorAll("source, img"))
          : [img];

        sources.forEach(function (src) {
          if (matchingLowSrc) {
            return;
          }
          var lowSrc = src.getAttribute("data-lowsrc");

          if (lowSrc && matchesMedia(src)) {
            matchingLowSrc = lowSrc;
          }
        });

        return matchingLowSrc;
      };

      var createBlurup = function (picture, img, src, blurUp) {
        var blurImg;
        var isBlurUpLoaded = false;
        var isForced = false;
        var start = blurUp == "always" ? 0 : Date.now();
        var isState = 0;
        var parent = (picture || img).parentNode;

        var createBlurUpImg = function () {
          if (!src) {
            return;
          }

          var onloadBlurUp = function (e) {
            isBlurUpLoaded = true;

            if (!blurImg) {
              blurImg = e.target;
            }

            lazySizes.rAF(function () {
              lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
              if (blurImg) {
                lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedClass);
              }
            });

            if (blurImg) {
              blurImg.removeEventListener("load", onloadBlurUp);
              blurImg.removeEventListener("error", onloadBlurUp);
            }
          };

          blurImg = document.createElement("img");

          blurImg.addEventListener("load", onloadBlurUp);
          blurImg.addEventListener("error", onloadBlurUp);

          blurImg.className = lazySizes.cfg.blurUpClass;
          blurImg.cssText = img.cssText;
          blurImg.src = src;
          blurImg.alt = "";
          blurImg.setAttribute("aria-hidden", "true");

          parent.insertBefore(blurImg, (picture || img).nextSibling);

          if (blurUp != "always") {
            blurImg.style.visibility = "hidden";

            lazySizes.rAF(function () {
              if (blurImg) {
                setTimeout(function () {
                  if (blurImg) {
                    lazySizes.rAF(function () {
                      if (!isForced && blurImg) {
                        blurImg.style.visibility = "";
                      }
                    });
                  }
                }, lazySizes.cfg.blurupCacheDelay || 33);
              }
            });
          }
        };

        var remove = function () {
          if (blurImg) {
            lazySizes.rAF(function () {
              lazySizes.rC(img, lazySizes.cfg.blurUpLoadingClass);
              try {
                blurImg.parentNode.removeChild(blurImg);
              } catch (er) {}
              blurImg = null;
            });
          }
        };

        var setStateUp = function (force) {
          isState++;

          isForced = force || isForced;

          if (force) {
            remove();
          } else if (isState > 1) {
            setTimeout(remove, 5000);
          }
        };

        var onload = function () {
          img.removeEventListener("load", onload);
          img.removeEventListener("error", onload);

          if (blurImg) {
            lazySizes.rAF(function () {
              if (blurImg) {
                lazySizes.aC(blurImg, lazySizes.cfg.blurUpLoadedOriginalClass);
              }
            });
          }

          lazySizes.fire(img, "blurUpLoaded");

          if (
            blurUp != "always" &&
            (!isBlurUpLoaded || Date.now() - start < 66)
          ) {
            setStateUp(true);
          } else {
            setStateUp();
          }
        };

        createBlurUpImg();

        img.addEventListener("load", onload);
        img.addEventListener("error", onload);

        lazySizes.aC(img, lazySizes.cfg.blurUpLoadingClass);

        var parentUnveil = function (e) {
          if (parent != e.target) {
            return;
          }

          lazySizes.aC(blurImg || img, lazySizes.cfg.blurUpInviewClass);

          setStateUp();

          parent.removeEventListener("lazybeforeunveil", parentUnveil);
        };

        if (!parent.getAttribute("data-expand")) {
          parent.setAttribute("data-expand", -1);
        }

        parent.addEventListener("lazybeforeunveil", parentUnveil);

        lazySizes.aC(parent, lazySizes.cfg.lazyClass);
      };

      window.addEventListener("lazybeforeunveil", function (e) {
        var detail = e.detail;

        if (detail.instance != lazySizes || !detail.blurUp) {
          return;
        }

        var img = e.target;
        var picture = img.parentNode;

        if (picture.nodeName != "PICTURE") {
          picture = null;
        }

        createBlurup(
          picture,
          img,
          getLowSrc(picture, img) || transSrc,
          detail.blurUp
        );
      });

      window.addEventListener("lazyunveilread", function (e) {
        var detail = e.detail;

        if (detail.instance != lazySizes) {
          return;
        }

        var img = e.target;
        var match = (
          getComputedStyle(img, null) || { fontFamily: "" }
        ).fontFamily.match(regBlurUp);

        if (!match && !img.getAttribute("data-lowsrc")) {
          return;
        }

        detail.blurUp =
          (match && match[1]) || lazySizes.cfg.blurupMode || "always";
      });
    }
  );
}

export default Layout;
