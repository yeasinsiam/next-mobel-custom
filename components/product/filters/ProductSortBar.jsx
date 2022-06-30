import { setProductView, syncProductList } from "@redux/actions";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

const ProductSortBar = ({ setShowFilterMobile, productView }) => {
  const dispatch = useDispatch();
  const {
    totalProducts,
    limit,
    page,
    filterOptions: { typeId },
  } = useSelector((state) => state.product.archiveProduct.response);

  const handleChangeProductView = (view) => {
    dispatch(setProductView(view));
    Cookies.set("product-productView", view, {
      expires: 7,
    });
  };
  const handleChangeProductLimit = (event) => {
    const newLimit = event.target.value;

    dispatch(
      syncProductList({
        productsPerPage: newLimit,
        page,
      })
    );
    Cookies.set("product-limit", newLimit, {
      expires: 7,
    });
  };
  return (
    <div className="sort-bar clearfix">
      <div className="sort-results pull-left">
        <select onChange={handleChangeProductLimit} defaultValue={limit}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        <span>
          Showing all <strong>{limit}</strong> of{" "}
          <strong>{new Intl.NumberFormat().format(totalProducts)}</strong> items
        </span>
      </div>
      <div className="sort-options pull-right">
        <span className="grid-list">
          <a
            className={productView === "grid" ? "active" : ""}
            onClick={() => handleChangeProductView("grid")}
          >
            <i className="fa fa-th-large"></i>
          </a>
          <a
            className={productView === "list" ? "active" : ""}
            onClick={() => handleChangeProductView("list")}
          >
            <i className="fa fa-align-justify"></i>
          </a>
          <a
            className="toggle-filters-mobile"
            onClick={() => setShowFilterMobile(true)}
          >
            <i className="fa fa-search"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProductSortBar;
