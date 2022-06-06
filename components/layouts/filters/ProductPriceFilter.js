/*
 *Product Price Filtering widget
 *@display: Product page
 */
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const IonRangeSlider = dynamic(() => import("react-ion-slider"), {
  ssr: false,
});

const ProductPriceFilter = () => {
  const filterContentElement = useRef(null);
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleChange = (data) => {
    // console.log(data);
    //sed reques to database for filter
  };

  useEffect(() => {
    visible
      ? $(filterContentElement.current).slideDown()
      : $(filterContentElement.current).slideUp();
  }, [visible]);

  return (
    <div className={`filter-box ${visible ? "" : "active"}`}>
      <div className="title" onClick={toggleVisible}>
        Price
      </div>
      <div className="filter-content" ref={filterContentElement}>
        <div className="price-filter">
          <IonRangeSlider
            type="double"
            min={0}
            max={4000}
            from={1000}
            to={2600}
            grid
            drag_interval
            skin="square"
            prefix="$"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPriceFilter;
