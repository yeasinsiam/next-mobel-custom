function BannerWidget() {
  return (
    <section
      className="banner lazyload blur-up"
      data-bgset="assets/images/gallery-4.webp"
      // style={{ backgroundImage: "url(assets/images/gallery-4.webp)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 text-center">
            <h2 className="title">Our story</h2>
            <p>
              We believe in creativity as one of the major forces of progress.
              With this idea, we traveled throughout Italy to find exceptional
              artisans and bring their unique handcrafted objects to
              connoisseurs everywhere.
            </p>
            <p>
              <a href="#" className="btn btn-clean">
                Read full story
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerWidget;
