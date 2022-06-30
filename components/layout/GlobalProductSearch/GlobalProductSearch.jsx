import { hideGlobalSearch, visibleGlobalSearch } from "@redux/actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const GlobalProductSearchButton = () => {
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
};

const GlobalProductSearchElement = () => {
  const isVisible = useSelector(
    (state) => state.options.globalSearch.isVisible
  );

  return (
    <div className={`search-wrapper ${isVisible ? "open" : ""}`}>
      {/* <!-- Search form --> */}
      <input className="form-control" placeholder="Search..." />
      <button className="btn btn-main btn-search">Go!</button>

      {/* <!-- Search results - live search --> */}
      <div className="search-results">
        <div className="search-result-items">
          <div className="title h4">
            Products{" "}
            <a href="#" className="btn btn-clean-dark btn-xs">
              View all
            </a>
          </div>
          <ul>
            <li>
              <a href="#">
                <span className="name">Green corner</span>{" "}
                <span className="category">Sofa</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">Laura</span>{" "}
                <span className="category">Armchairs</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">Nude</span>{" "}
                <span className="category">Dining tables</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">Aurora</span>{" "}
                <span className="category">Nightstands</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">Dining set</span>{" "}
                <span className="category">Kitchen</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="name">Seat chair</span>{" "}
                <span className="category">Bar sets</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { GlobalProductSearchButton, GlobalProductSearchElement };
