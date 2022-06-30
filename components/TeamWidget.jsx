import Image from "next/image";
import Link from "next/link";

function TeamWidget() {
  return (
    <section className="our-team">
      <div className="container">
        {/* <!-- === Our team header === --> */}

        <div className="row">
          <div className="col-md-offset-2 col-md-8 text-center">
            <h1 className="h2 title">Meet our team</h1>
            <div className="text">
              <p>
                Our architects and designers constantly and carefully monitor
                the environment, they accept and develop changes, research
                fashion and architectural, as well as sociological, changes and
                transform them into unique design.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- === Our team === --> */}

        <div className="team">
          <div className="row">
            {/* <!-- === team member === --> */}

            <div className="col-sm-3">
              <article>
                <div className="details details-text">
                  <div className="inner">
                    <h3 className="title">Lea Nils</h3>
                    <h6 className="title">Director</h6>
                  </div>
                </div>
                <div className="image">
                  <Image
                    src="/assets/images/user-5.jpg"
                    alt="User image"
                    width={204}
                    height={204}
                    layout="responsive"
                  />
                </div>
                <div className="details details-social">
                  <div className="inner">
                    <a href="#">
                      <i className="fa fa-phone"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-envelope"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* <!-- === team member === --> */}

            <div className="col-sm-3">
              <article>
                <div className="details details-text">
                  <div className="inner">
                    <h3 className="title">Nora Star</h3>
                    <h6 className="title">Architect</h6>
                  </div>
                </div>
                <div className="image">
                  <Image
                    src="/assets/images/user-4.jpg"
                    alt="User image"
                    width={204}
                    height={204}
                    layout="responsive"
                  />
                </div>
                <div className="details details-social">
                  <div className="inner">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* <!-- === team member === --> */}

            <div className="col-sm-3">
              <article>
                <div className="details details-text">
                  <div className="inner">
                    <h3 className="title">Jenna Hale</h3>
                    <h6 className="title">Quality director</h6>
                  </div>
                </div>
                <div className="image">
                  <Image
                    src="/assets/images/user-5.jpg"
                    alt="User image"
                    width={204}
                    height={204}
                    layout="responsive"
                  />
                </div>
                <div className="details details-social">
                  <div className="inner">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            {/* <!-- === team member === --> */}

            <div className="col-sm-3">
              <article>
                <div className="details details-text">
                  <div className="inner">
                    <h3 className="title">Glen Jordan</h3>
                    <h6 className="title">Supervisor</h6>
                  </div>
                </div>
                <div className="image">
                  <Image
                    src="/assets/images/user-4.jpg"
                    alt="User image"
                    width={204}
                    height={204}
                    layout="responsive"
                  />
                </div>
                <div className="details details-social">
                  <div className="inner">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
          {/* <!-- === button more === --> */}

          <div className="wrapper-more">
            <Link href="/contact">
              <a className="btn btn-clean-dark">Contact us</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamWidget;
