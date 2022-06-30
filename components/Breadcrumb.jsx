function Breadcrumb({ backgroundImageLink, containerHtml, layoutTwo }) {
  return layoutTwo ? (
    <section
      className="main-header"
      style={{ backgroundImage: `url(${backgroundImageLink})` }}
    >
      <header>
        <div className="container">{containerHtml}</div>
      </header>
    </section>
  ) : (
    <section
      className="main-header"
      style={{ backgroundImage: `url(${backgroundImageLink})` }}
    >
      <header>
        <div className="container text-center">{containerHtml}</div>
      </header>
    </section>
  );
}

export default Breadcrumb;
