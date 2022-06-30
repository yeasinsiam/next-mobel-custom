import dynamic from "next/dynamic";
import Head from "next/head";

//widgets
const Slider = dynamic(() => import("components/Slider"));
const FeaturedProductWidget = dynamic(() =>
  import("components/FeaturedProductWidget")
);
const StratcherWidget = dynamic(() => import("components/StretcherWidget"));
const BannerWidget = dynamic(() => import("components/BannerWidget"));
const BlogWidgetOne = dynamic(() => import("components/BlogWidgetOne"));
const BlogWidgetTwo = dynamic(() => import("components/BlogWidgetTwo"));
const InstagrramWidget = dynamic(() => import("components/InstagramWidget"));

function Home() {
  return (
    <>
      <Head>
        <title>Nadrat Ounak</title>
      </Head>
      {/* <!-- ========================  Header content ======================== --> */}
      <Slider />

      {/* <!-- ========================  Products widget ======================== --> */}
      <FeaturedProductWidget />

      {/*  <!-- ========================  Stretcher widget ======================== --> */}
      <StratcherWidget />
      {/*   <!-- ========================  Blog Block ======================== --> */}
      <BlogWidgetOne />

      {/* <!-- ========================  Banner ======================== --> */}
      <BannerWidget />

      {/* <!-- ========================  Blog ======================== --> */}
      <BlogWidgetTwo />

      {/* <!-- ========================  Instagram ======================== --> */}
      <InstagrramWidget />
    </>
  );
}

export default Home;
