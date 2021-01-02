import {
  inline_flex,
  p_px,
  img_css_class,
  search_container,
} from "../../css/searchSection.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useStore } from "../../store";
import Search_Input from "../shared/Search_Input";
import useComponentVisible from "../helpers/hooks/useComponentVisible";

// So called 'chip', this willl be rendered in parent 'ChipSet'Component

// IDEA (example https://www.levels.fyi/?compare=Apple,Amazon,Facebook,Google,Microsoft&track=Software%20Engineer)
/*
  1 might make grid display (with max 5 chips/companies pre-selected to show job cards in columns next to each other)
  2 have filters for roles , reuse same chips component
  3 prefetch list of companies from dyamoDB, load it in more chip
  4 for mobile view display only icon or text if there  is no icon to save space
*/

export default function RoundFilterButton({ id, src, label, showSVG, type }) {
  const [bg_color, setBg_color] = useState("");
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const {
    toggleCompaniesSearch,
    addKeyword,
    removeKeyword,
    addCompany,
    removeCompany,
    keywords,
    companies,
  } = useStore();

  const handleChipColor = () => {
    if (!bg_color) setBg_color("#77747459");
    else setBg_color("");
  };
  const handleKewords = () => {
    if (type === "keyword") removeKeyword(label);
    else if (type === "company") removeCompany(label);
  };
  useEffect(() => {
    if (label === "More" && bg_color) {
      setIsComponentVisible(!isComponentVisible);
      toggleCompaniesSearch();
    } else if (!bg_color && label != "More") {
      if (type === "keyword") addKeyword(label);
      else if (type === "company") addCompany(label);
    }
  }, [bg_color]);
  return (
    <>
      <div
        id={id}
        className={inline_flex}
        onClick={() => {
          handleChipColor();
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

          <div style={columnStyle}>
            <ul>
              {type === "keyword"
                ? keywords.slice(0, 5).map((kw) => <li key={kw}>{kw}</li>)
                : companies.slice(0, 5).map((company) => <li key={company}>{company}</li>)}
            </ul>
          </div>
          <div style={columnStyle}>
            <ul>
              {type === "keyword"
                ? keywords.slice(5).map((kw) => <li key={kw}>{kw}</li>)
                : companies.slice(5).map((company) => <li key={company}>{company}</li>)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
RoundFilterButton.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  src: PropTypes.string,
  showSVG: PropTypes.bool,
};

const containerStyle = {
  display: "flex",
  flexDirrection: "row",
  justifyContent: "space-evenly",
  textAlign: "left",
  position: "absolute",
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  borderRadius: "10px",
  background: "#fff",
  overflow: "hidden",
  minWidth: "350px",
  padding: "3px",
  transform: "translate(410px, 34px)",
};

const columnStyle = {
  marginTop: "55px",
  display: "flex",
  flexDirection: "columns",
  justifyItems: "center",
  padding: "0.5rem",
};
