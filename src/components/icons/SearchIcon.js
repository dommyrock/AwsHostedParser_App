import React from "react";
import PropTypes from "prop-types";
import SearchPopup from "../shared/search/SearchPopup";
import useComponentVisible from "../helpers/hooks/useComponentVisible";

const SearchIcon = ({ width, height }) => {
  //handle visibility state
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <li id="hoverableIcon" className="nav-item">
      {/* render search box on click (NOTE:box doesnt close on icon click for some reason) */}
      {isComponentVisible && (
        <div ref={ref}>
          <SearchPopup />
        </div>
      )}
      <button
        style={override}
        aria-label="searchBtn"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      >
        <svg
          width={width}
          height={height}
          viewBox="0 0 16 16"
          className="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </button>
    </li>
    //useEffect Example

    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //   // debugger;
    //   // Update the document title using the browser API
    //   document.title = `You clicked ${count} times`;
    // });
  );
};
SearchIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const override = {
  background: "transparent",
  border: "none",
  outline: "none",
};
export default SearchIcon;
