import { syncProductList } from "@redux/productSlice";
import { pageQueryLinkGenerator } from "helpers/helper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ProductPagination = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [pageList, setPageList] = useState([]);
  const {
    totalPages,
    page,
    prevPage,
    nextPage,
    filterOptions: { typeId },
  } = useSelector((state) => state.product.archiveProduct.response);

  const types = useSelector((state) => state.product.types.typesList);

  const pageActiveType = types.find((type) => type._id === typeId);

  useEffect(() => {
    function generatePageList(totalPages) {
      let rows = [];
      for (var i = 1; i <= totalPages; i++) {
        rows.push(i);
      }
      setPageList(rows);
    }

    generatePageList(totalPages);
  }, [totalPages]);

  const handleChangePage = (page) => {
    const queryObj = {
      type: pageActiveType ? pageActiveType.slug : "",
      page,
    };

    const queryStrings = pageQueryLinkGenerator(queryObj);
    dispatch(
      syncProductList({
        page,
      })
    );
    router.push(`/products${queryStrings}`, undefined, { shallow: true });
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".owl-icons-wrapper").offset().top - 60,
      },
      500
    );
  };

  return (
    <div className="pagination-wrapper">
      <ul className="pagination">
        <li className={!prevPage ? "v-hide" : ""}>
          <a onClick={() => handleChangePage(prevPage)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {pageList.map((pageNumber) => (
          <li key={pageNumber} className={pageNumber === page ? "active" : ""}>
            <a onClick={() => handleChangePage(pageNumber)}>{pageNumber}</a>
          </li>
        ))}
        <li className={!nextPage ? "v-hide" : ""}>
          <a aria-label="Next" onClick={() => handleChangePage(nextPage)}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
