import { syncProductList } from "@redux/actions";
import { fetchProducts } from "@redux/productSlice";
import { pageQueryLinkGenerator } from "helpers/helper";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductTypeFilter = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filterContent = useRef(null);

  // states
  const [visibleType, setVisibleType] = useState(true);
  const types = useSelector((state) => state.product.types);
  const filteredTypeId = useSelector(
    (state) => state.product.archiveProduct.response.filterOptions.typeId
  );

  const handleClick = (type) => {
    const queryObj = {
      type: type !== "all" ? type.slug : "",
    };
    const queryStrings = pageQueryLinkGenerator(queryObj);
    dispatch(
      syncProductList({
        typeId: type !== "all" ? type._id : "",
        page: 1,
      })
    );

    router.push(`/products${queryStrings}`, undefined, { shallow: true });
  };

  useEffect(() => {
    visibleType
      ? $(filterContent.current).slideDown()
      : $(filterContent.current).slideUp();
  }, [visibleType]);
  return (
    <div className={`filter-box ${visibleType ? "active" : ""}`}>
      <div className="title" onClick={() => setVisibleType(!visibleType)}>
        Type
      </div>
      <div
        className="filter-content"
        style={{ display: "block" }}
        ref={filterContent}
      >
        <span className="checkbox">
          <input
            type="radio"
            name="radiogroup-type"
            id="typeAll"
            defaultChecked={filteredTypeId === ""}
            onClick={() => handleClick("all")}
          />
          <label htmlFor="typeAll">All</label>
        </span>
        {types.typesList.map((type) => (
          <span className="checkbox" key={type._id}>
            <input
              type="radio"
              name="radiogroup-type"
              id={`type${type.slug}`}
              onClick={() => handleClick(type)}
              defaultChecked={filteredTypeId === type._id}
            />
            <label htmlFor={`type${type.slug}`}>
              {type.title} <i>({type.products.length})</i>
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductTypeFilter;
