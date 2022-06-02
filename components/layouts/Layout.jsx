// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import NextNProgress from "nextjs-progressbar";

// import { Navbar, Container } from "react-bootstrap";
// import {
//   faFacebookF,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faCartShopping,
//   faMagnifyingGlass,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function Layout({ children }) {
  // Defined States
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [isNavbarSticked, setIsNavbarSticked] = useState(false);

  // Defiend functions
  const handleWindowScroll = () => {
    // Window scroll handler
    window.pageYOffset > 94
      ? setIsNavbarSticked(true)
      : setIsNavbarSticked(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

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
              <a href="index.html" className="logo">
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
                    <a href="index.html">
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
                                    <a href="index.html">Home - Slider</a>
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
                  </li>

                  <li>
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
                  </li>

                  <li>
                    <a href="category.html">
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

                  <li>
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
                  </li>

                  <li>
                    <Link href="/shortcode">
                      <a>Shortcodes</a>
                    </Link>
                  </li>
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
        </footer>
      </div>
    </>
  );
}

export default Layout;
