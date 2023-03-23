import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../redux/filters/action";

const FilterButtons = () => {
  const { status } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const handleFilter = (filter) => {
    if (filter === false) {
      dispatch(changeStatus(false));
    } else if (filter === true) {
      dispatch(changeStatus(true));
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleFilter(false)}
        className={`filter-btn ${status === false ? "active-filter" : ""}`}
        id="lws-filterAll"
      >
        All
      </button>
      <button
        onClick={() => handleFilter(true)}
        className={`filter-btn  ${
          status === true ? "active-filter" : ""
        }`}
        id="lws-filterFeatured"
      >
        Featured
      </button>
    </div>
  );
};

export default FilterButtons;
