function BlogWidgetTwo() {
  return (
    <section className="blog">
      <div className="container">
        <header>
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <h1 className="h2 title">Blog</h1>
              <div className="text">
                <p>Latest news from the blog</p>
              </div>
            </div>
          </div>
        </header>

        <div className="row">
          <div className="col-sm-4">
            <article>
              <a href="#">
                <div
                  className="image lazyload blur-up"
                  data-bgset="assets/images/blog-1.jpg"
                  // style={{ backgroundImage: "url(assets/images/blog-1.jpg)" }}
                >
                  {/* <Image
                      src="/assets/images/blog-1.jpg"
                      alt="blog image"
                      width={640}
                      height={391}
                      layout="responsive"
                    /> */}
                </div>
                <div className="entry entry-table">
                  <div className="date-wrapper">
                    <div className="date">
                      <span>MAR</span>
                      <strong>08</strong>
                      <span>2017</span>
                    </div>
                  </div>
                  <div className="title">
                    <h2 className="h5">
                      The 3 Tricks that Quickly Became Rules
                    </h2>
                  </div>
                </div>
                <div className="show-more">
                  <span className="btn btn-main btn-block">Read more</span>
                </div>
              </a>
            </article>
          </div>

          <div className="col-sm-4">
            <article>
              <a href="#">
                <div
                  className="image lazyload blur-up"
                  data-bgset="assets/images/blog-2.jpg"
                  // style={{ backgroundImage: "url(assets/images/blog-2.jpg)" }}
                >
                  {/* <Image
                      src="/assets/images/blog-2.jpg"
                      alt="blog image"
                      width={640}
                      height={391}
                      layout="responsive"
                    /> */}
                </div>
                <div className="entry entry-table">
                  <div className="date-wrapper">
                    <div className="date">
                      <span>MAR</span>
                      <strong>03</strong>
                      <span>2017</span>
                    </div>
                  </div>
                  <div className="title">
                    <h2 className="h5">
                      Decorating When You re Starting Out or Starting Over
                    </h2>
                  </div>
                </div>
                <div className="show-more">
                  <span className="btn btn-main btn-block">Read more</span>
                </div>
              </a>
            </article>
          </div>

          <div className="col-sm-4">
            <article>
              <a href="#">
                <div
                  className="image lazyload blur-up"
                  data-bgset="assets/images/blog-8.jpg"
                  // style={{ backgroundImage: "url(assets/images/blog-8.jpg)" }}
                >
                  {/* <Image
                      src="/assets/images/blog-8.jpg"
                      alt="blog image"
                      width={640}
                      height={391}
                      layout="responsive"
                    /> */}
                </div>
                <div className="entry entry-table">
                  <div className="date-wrapper">
                    <div className="date">
                      <span>MAR</span>
                      <strong>01</strong>
                      <span>2017</span>
                    </div>
                  </div>
                  <div className="title">
                    <h2 className="h5">
                      What does your favorite dining chair say about you?
                    </h2>
                  </div>
                </div>
                <div className="show-more">
                  <span className="btn btn-main btn-block">Read more</span>
                </div>
              </a>
            </article>
          </div>
        </div>

        <div className="wrapper-more">
          <a href="#" className="btn btn-main">
            View all posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogWidgetTwo;
