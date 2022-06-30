import Head from "next/head";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import dynamic from "next/dynamic";

// components
const Breadcrumb = dynamic(() => import("components/Breadcrumb"));
const IconsSlider = dynamic(() => import("components/IconsSlider"));
const Products = dynamic(() => import("components/product/Products"));

//Contollers
import { connectDB } from "db/dbConnect";
import { getAllTypes } from "db/controllers/typeController";
import { getAllProducts } from "db/controllers/productController";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setTypesList, setProductList, setProductView } from "@redux/actions";
import { wrapper } from "@redux/store";

function ArchiveProducts() {
  const dispatch = useDispatch();

  //  states

  useEffect(function () {
    // Default Cookie for state
    dispatch(setProductView(Cookies.get("product-productView") || "grid"));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/*  <!-- ======================== Main header ======================== --> */}
      <Head>
        <title>Products</title>
      </Head>
      <Breadcrumb
        backgroundImageLink="assets/images/gallery-2.webp"
        containerHtml={
          <>
            <h1 className="h2 title">Prtoducts</h1>
            <ol className="breadcrumb breadcrumb-inverted">
              <li>
                <Link href="/">
                  <a>
                    <span className="icon icon-home"></span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/product">
                  <a className="active">Products</a>
                </Link>
              </li>
            </ol>
          </>
        }
        layoutTwo
      />

      {/* <!-- ========================  Icons slider ======================== -->  */}
      <IconsSlider />
      {/* <!-- ======================== Products ======================== -->  */}
      <Products />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req: { cookies }, query }) => {
      await connectDB();

      let filterOptions = {
        typeId: "",
        page: "1",
        productsPerPage: cookies["product-limit"] || "2", // need to fetch form admin panel
      };

      if (query.page && !isNaN(query.page)) {
        filterOptions.page = query.page;
      }

      // Getting all types from server
      const types = JSON.parse(JSON.stringify(await getAllTypes()));

      // console.log(types);

      // slug filter query
      if (query.type && query.type !== "") {
        const pageActiveType = types.find((type) => type.slug === query.type);
        filterOptions.typeId = pageActiveType ? pageActiveType._id : "";
      }

      const productDocsReaponse = JSON.parse(
        JSON.stringify(await getAllProducts({ ...filterOptions }))
      );

      // console.log(productDocsReaponse.products);

      // if (!productDocsReaponse.products.length)
      //   return {
      //     notFound: true,
      //   };

      // set default to redux store
      store.dispatch(setTypesList(types)); //setup types
      store.dispatch(setProductList(productDocsReaponse)); //setup products

      console.log("Server Ruins");
    }
);

export default ArchiveProducts;
