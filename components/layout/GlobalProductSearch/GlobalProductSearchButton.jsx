import { hideGlobalSearch, visibleGlobalSearch } from "@redux/optionsSlice";
import { useDispatch, useSelector } from "react-redux";

function GlobalProductSearchButton() {
  const dispatch = useDispatch();
  const isVisible = useSelector(
    (state) => state.options.globalSearch.isVisible
  );

  const toggleSearch = (e) => {
    e.preventDefault();
    isVisible ? dispatch(hideGlobalSearch()) : dispatch(visibleGlobalSearch());
  };

  return (
    <a
      href="#"
      className={`open-search ${isVisible ? "open" : ""}`}
      onClick={toggleSearch}
    >
      <i className="icon icon-magnifier"></i>
    </a>
  );
}

export default GlobalProductSearchButton;
