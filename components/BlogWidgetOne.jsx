import Image from "next/image";

function BlogWidgetOne() {
  return (
    <section className="blog blog-block">
      <div className="container">
        <header>
          <div className="row">
            <div className="col-md-offset-2 col-md-8 text-center">
              <h2 className="title">Interior ideas</h2>
              <div className="text">
                <p>Keeping things minimal</p>
              </div>
            </div>
          </div>
        </header>

        <div className="row">
          <div className="col-sm-4">
            <article>
              <a href="#">
                <div className="image">
                  <Image
                    src="/assets/images/project-1.webp"
                    alt="project image"
                    width={480}
                    height={640}
                    layout="responsive"
                  />
                </div>
                <div className="entry entry-block">
                  <div className="date">28 Mart 2017</div>
                  <div className="title">
                    <h2 className="h3">Creating the Perfect Gallery Wall </h2>
                  </div>
                  <div className="description">
                    <p>
                      You’ve finally reached this point in your life- you’ve
                      bought your first home, moved into your very own
                      apartment, moved out of the dorm room or you’re finally
                      downsizing after all of your kids have left the nest.
                    </p>
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
                <div className="image">
                  <Image
                    src="/assets/images/project-2.jpg"
                    alt="project image"
                    width={480}
                    height={640}
                    layout="responsive"
                  />
                </div>
                <div className="entry entry-block">
                  <div className="date">25 Mart 2017</div>
                  <div className="title">
                    <h2 className="h3">
                      Making the Most Out of Your Kids Old Bedroom
                    </h2>
                  </div>
                  <div className="description">
                    <p>
                      You’ve finally reached this point in your life- you’ve
                      bought your first home, moved into your very own
                      apartment, moved out of the dorm room or you’re finally
                      downsizing after all of your kids have left the nest.
                    </p>
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
                <div className="image">
                  <Image
                    src="/assets/images/project-3.jpg"
                    alt="project image"
                    width={480}
                    height={640}
                    layout="responsive"
                  />
                </div>
                <div className="entry entry-block">
                  <div className="date">28 Mart 2017</div>
                  <div className="title">
                    <h2 className="h3">Have a look at our new projects!</h2>
                  </div>
                  <div className="description">
                    <p>
                      You’ve finally reached this point in your life- you’ve
                      bought your first home, moved into your very own
                      apartment, moved out of the dorm room or you’re finally
                      downsizing after all of your kids have left the nest.
                    </p>
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
          <a href="ideas.html" className="btn btn-main">
            View all posts
          </a>
        </div>
      </div>
    </section>
  );
}

export default BlogWidgetOne;
