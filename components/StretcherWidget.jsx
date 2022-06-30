function StratcherWidget() {
  return (
    <section className="stretcher-wrapper">
      <header className="hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <h1 className="h2 title">Popular categories</h1>
              <div className="text">
                <p>
                  Whether you are changing your home, or moving into a new one,
                  you will find a huge selection of quality living room
                  furniture, bedroom furniture, dining room furniture and the
                  best value at Furniture factory
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ul className="stretcher">
        <li
          className="stretcher-item lazyload blur-up"
          data-bgset="assets/images/gallery-1.webp"
          // style={{ backgroundImage: "url(assets/images/gallery-1.webp)" }}
        >
          <div className="stretcher-logo">
            <div className="text">
              <span className="f-icon f-icon-bedroom"></span>
              <span className="text-intro">Bedroom</span>
            </div>
          </div>
          <figure>
            <h4>Modern furnishing projects</h4>
            <figcaption>New furnishing ideas</figcaption>
          </figure>
          <a href="#">Anchor link</a>
        </li>

        <li
          className="stretcher-item lazyload blur-up"
          data-bgset="assets/images/gallery-2.webp"
          // style={{ backgroundImage: "url(assets/images/gallery-2.webp)" }}
        >
          <div className="stretcher-logo">
            <div className="text">
              <span className="f-icon f-icon-sofa"></span>
              <span className="text-intro">Living room</span>
            </div>
          </div>
          <figure>
            <h4>Furnishing and complements</h4>
            <figcaption>Discover the design table collection</figcaption>
          </figure>
          <a href="#">Anchor link</a>
        </li>

        <li
          className="stretcher-item lazyload blur-up"
          data-bgset="assets/images/gallery-3.webp"
          // style={{ backgroundImage: "url(assets/images/gallery-3.webp)" }}
        >
          <div className="stretcher-logo">
            <div className="text">
              <span className="f-icon f-icon-office"></span>
              <span className="text-intro">Office</span>
            </div>
          </div>
          <figure>
            <h4>Which is Best for Your Home</h4>
            <figcaption>Wardrobes vs Walk-In Closets</figcaption>
          </figure>
          <a href="#">Anchor link</a>
        </li>

        <li
          className="stretcher-item lazyload blur-up"
          data-bgset="assets/images/gallery-4.webp"
          // style={{ backgroundImage: "url(assets/images/gallery-4.webp)" }}
        >
          <div className="stretcher-logo">
            <div className="text">
              <span className="f-icon f-icon-bathroom"></span>
              <span className="text-intro">Bathroom</span>
            </div>
          </div>
          <figure>
            <h4>Keeping Things Minimal</h4>
            <figcaption>Creating Your Very Own Bathroom</figcaption>
          </figure>
          <a href="#">Anchor link</a>
        </li>

        <li className="stretcher-item more">
          <div className="more-icon">
            <span data-title-show="Show more" data-title-hide="+"></span>
          </div>
          <a href="#"></a>
        </li>
      </ul>
    </section>
  );
}

export default StratcherWidget;
