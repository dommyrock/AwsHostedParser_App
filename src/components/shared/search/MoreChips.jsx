import { useState } from "react";
import { useStore } from "../../../store";
import useComponentVisible from "../../helpers/hooks/useComponentVisible";
import Search_Input from "../Search_Input";
import { p_px, inline_flex } from "../../../css/searchSection.module.css";

export default function MoreChips({ id }) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  //   const [bg_color, setBg_color] = useState("");
  const { dropdown_companies, dropdown_keywords } = useStore();

  //   This was buggy so i removed it for now
  //   const handleChipColor = () => {
  //     if (!bg_color) setBg_color("#77747459");
  //     else setBg_color("");
  //   };

  return (
    <>
      <div
        id="more-companies"
        className={inline_flex}
        onClick={() => {
          //   handleChipColor();
          setIsComponentVisible(!isComponentVisible);
        }}
        style={{ backgroundColor: "#cccc" }}
      >
        <span className={p_px}>More</span>
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
      </div>
      {isComponentVisible && id === "more-companies" && (
        <div ref={ref} style={containerStyle}>
          <Search_Input />
          <div style={columnStyle}>
            <ul>
              {dropdown_companies.slice(0, dropdown_companies.length / 2).map((company) => (
                <li key={company.id}>{company.label}</li>
              ))}
            </ul>
          </div>
          <div style={columnStyle}>
            <ul>
              {dropdown_companies.slice(dropdown_companies.length / 2).map((company) => (
                <li key={company.id}>{company.label}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isComponentVisible &&
        id === "more-keywords" && ( //NOTE: keywords should have anoter input where user can type "Contains aditional keywords ..... which solar handles"
          <div ref={ref} style={containerStyle}>
            <Search_Input />
            <div style={columnStyle}>
              <ul>
                {dropdown_keywords.slice(0, dropdown_keywords.length / 2).map((kw) => (
                  <li key={kw.id}>{kw.label}</li>
                ))}
              </ul>
            </div>
            <div style={columnStyle}>
              <ul>
                {dropdown_keywords.slice(dropdown_keywords.length / 2).map((kw) => (
                  <li key={kw.id}>{kw.label}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
    </>
  );
}
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
  transform: "translate(385px, 34px)",
};

const columnStyle = {
  marginTop: "55px",
  display: "flex",
  flexDirection: "columns",
  justifyItems: "center",
  padding: "0.5rem",
};
