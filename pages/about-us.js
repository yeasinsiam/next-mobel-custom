import Head from "next/head";
import dynamic from "next/dynamic";

//Widgets
const BannerWidget = dynamic(() => import("components/BannerWidget"));
const Breadcrumb = dynamic(() => import("components/Breadcrumb"));
const CardsWidget = dynamic(() => import("components/CardsWidget"));
const HistoryWidget = dynamic(() => import("components/HistoryWidget"));
const TeamWidget = dynamic(() => import("components/TeamWidget"));
const BlogWidgetOne = dynamic(() => import("components/BlogWidgetOne"));
const ClientWidget = dynamic(() => import("components/ClientsWidget"));

function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      {/*  <!-- ========================  Main header ======================== --> */}
      <Breadcrumb
        backgroundImageLink="assets/images/gallery-2.webp"
        containerHtml={
          <>
            <h2 className="h2 title">Our story</h2>
            <p className="subtitle">A bit of history</p>
          </>
        }
      />

      {/* <!-- ================== Intro section default ================== --> */}
      <TeamWidget />

      {/* <!-- ========================  Banner ======================== --> */}
      <BannerWidget />

      {/* <!-- ========================  Cards ======================== --> */}
      <CardsWidget />
      {/* <!-- ========================  History ======================== --> */}
      <HistoryWidget />

      {/*   <!-- ========================  Blog Block ======================== --> */}
      <BlogWidgetOne />

      {/* <!-- ======================== Quotes ======================== --> */}
      <ClientWidget />
    </>
  );
}

export default AboutUs;
