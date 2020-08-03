import React from "react";
import PropTypes from "prop-types";

const RangeIcon = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      style={{ marginRight: "5px" }}
      viewBox="0 0 16 16"
      className="bi bi-bar-chart-line-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="4" height="5" x="1" y="10" rx="1" />
      <rect width="4" height="9" x="6" y="6" rx="1" />
      <rect width="4" height="14" x="11" y="1" rx="1" />
      <path fillRule="evenodd" d="M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
    </svg>
  );
};
RangeIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default RangeIcon;
