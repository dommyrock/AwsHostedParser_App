import { inline_flex, p_px, img_css_class } from "../../css/searchSection.module.css";
import PropTypes, { func } from "prop-types";
import { useEffect, useState } from "react";
import { useStore } from "../../store";
import Search_Input from "../shared/Search_Input";
import useComponentVisible from "../helpers/hooks/useComponentVisible";

// So called 'chip', this willl be rendered in parent 'ChipSet'Component

// IDEA (example https://www.levels.fyi/?compare=Apple,Amazon,Facebook,Google,Microsoft&track=Software%20Engineer)
/*
  1 might make grid display (with max 5 chips selected to show job cards in columns next to each other)
  2 have filters for roles , reuse same chips component
  3 prefetch list of companies from dyamoDB, load it in more chip
  4 add container for more chip 
  5 for mobile view display only icon or text if there  is no icon to save space
*/

export default function RoundFilterButton({ id, src, label, showSVG }) {
  const [bg_color, setBg_color] = useState("");
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const { toggleCompaniesSearch, addKeyword, removeKeyword } = useStore();

  const handleBg_color = () => {
    if (!bg_color) setBg_color("#77747459");
    else setBg_color("");
  };
  const handleKewords = () => {
    removeKeyword(label);
  };
  useEffect(() => {
    if (label === "More" && bg_color) {
      debugger;
      setIsComponentVisible(!isComponentVisible);
      toggleCompaniesSearch();
    } else if (!bg_color && label != "More") {
      addKeyword(label);
    }
  }, [bg_color]);
  return (
    <>
      <div
        id={id}
        className={inline_flex}
        onClick={() => {
          handleBg_color();
          label !== "More" ? handleKewords(label) : undefined;
        }}
        style={{ backgroundColor: bg_color }}
      >
        {src && <img className={img_css_class} src={src} />}
        <span className={p_px}>{label}</span>
        {showSVG && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={16}
            height={16}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      {isComponentVisible && (
        <div ref={ref} style={containerStyle}>
          <Search_Input />
          <div style={columnStyle}>Test 1111111111111</div>
          <div style={columnStyle}>Test 2</div>
        </div>
      )}
    </>
  );
}
const containerStyle = {
  display: "flex",
  flexDirrection: "row",
  textAlign: "left",
  position: "absolute",
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  borderRadius: "10px",
  background: "#fff",
  overflow: "hidden",
  minWidth: "350px",
  // top: "50%", //move to center of screen while testing
  padding: "3px",
  transform: "translate(206px, 34px)",
};

const columnStyle = {
  marginTop: "55px",
  display: "flex",
  flexDirection: "columns",
  padding: "0.5rem",
};
RoundFilterButton.propTypes = {
  src: PropTypes.string,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  showSVG: PropTypes.bool,
};
