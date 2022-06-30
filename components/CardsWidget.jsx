function CardsWidget() {
  return (
    <section className="cards">
      {/* <!-- === cards header === --> */}

      <header>
        <div className="row">
          <div className="col-md-offset-2 col-md-8 text-center">
            <h2 className="title">Design of interiors</h2>
            <div className="text">
              <p>Our services team produces interior design solutions</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          {/* <!-- === item === --> */}

          <div className="col-md-8">
            <figure>
              <figcaption
                className="lazyload blur-up"
                data-bgset="assets/images/blog-7.jpg"
              ></figcaption>
              <a href="#" className="btn btn-clean">
                Interior design
              </a>
            </figure>
          </div>

          {/* <!-- === item === --> */}

          <div className="col-md-4">
            <figure>
              <figcaption
                className="lazyload blur-up"
                data-bgset="assets/images/blog-2.jpg"
              ></figcaption>
              <a href="#" className="btn btn-clean">
                3D Modeling
              </a>
            </figure>
          </div>

          {/* <!-- === item === --> */}

          <div className="col-md-4">
            <figure>
              <figcaption
                className="lazyload blur-up"
                data-bgset="assets/images/blog-3.jpg"
              ></figcaption>
              <a href="#" className="btn btn-clean">
                Arhitect serives
              </a>
            </figure>
          </div>

          {/* <!-- === item === --> */}

          <div className="col-md-4">
            <figure>
              <figcaption
                className="lazyload blur-up"
                data-bgset="assets/images/blog-4.jpg"
              ></figcaption>
              <a href="#" className="btn btn-clean">
                Manufacturing
              </a>
            </figure>
          </div>

          {/* <!-- === item === --> */}

          <div className="col-md-4">
            <figure>
              <figcaption
                className="lazyload blur-up"
                data-bgset="assets/images/blog-5.jpg"
              ></figcaption>
              <a href="#" className="btn btn-clean">
                Planning
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsWidget;
