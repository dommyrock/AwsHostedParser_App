import { inline_flex, p_px, img_css_class } from "../../css/searchSection.module.css";
import PropTypes from "prop-types";
import { useStore } from "../../store";
import { useState } from "react";

// So called 'chip', this willl be rendered in parent 'ChipSet'Component

// IDEA (example https://www.levels.fyi/?compare=Apple,Amazon,Facebook,Google,Microsoft&track=Software%20Engineer)
/*
  1 might make grid display (with max 5 chips/companies pre-selected to show job cards in columns next to each other)
  2 prefetch list of companies from dyamoDB, load it in more chip
  3 for mobile view display only icon or text if there  is no icon to save space
*/

export default function RoundFilterButton({ id, src, label, type }) {
  const [bg_color, setBg_color] = useState("");
  const { removeKeyword, removeCompany, addDropdownKeyword, addDropdownCompany } = useStore();

  const handleChipColor = () => {
    if (!bg_color) setBg_color("#77747459");
    else setBg_color("");
  };
  const handleKewords = () => {
    if (type === "keyword") {
      addDropdownKeyword(label);
      removeKeyword(label);
    } else if (type === "company") {
      addDropdownCompany(label);
      removeCompany(label);
    }
  };

  return (
    <>
      <div
        id={id}
        className={inline_flex}
        onClick={() => {
          handleChipColor();
          handleKewords(label);
        }}
        style={{ backgroundColor: bg_color }}
      >
        {src && <img className={img_css_class} src={src} alt={label} />}
        <span className={p_px}>{label}</span>
      </div>
    </>
  );
}
RoundFilterButton.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  src: PropTypes.string,
};
