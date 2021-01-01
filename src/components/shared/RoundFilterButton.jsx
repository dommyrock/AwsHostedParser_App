import { inline_flex, p_px, img_css_class } from "../../css/searchSection.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// So called 'chip', this willl be rendered in parent 'ChipSet'Component

// IDEA (example https://www.levels.fyi/?compare=Apple,Amazon,Facebook,Google,Microsoft&track=Software%20Engineer)
/*
  1 might make grid display (with max 5 chips selected to show job cards in columns next to each other)
  2 have filters for roles , reuse same chips component
  3 prefetch list of companies from dyamoDB, load it in more chip
  4 add container for more chip 
  5 for mobile view display only icon or text if there  is no icon to save space
*/

export default function RoundFilterButton({ id, src, label }) {
  const [bg_color, setBg_color] = useState("");
  const handleBg_color = () => {
    if (!bg_color) setBg_color("#77747459");
    else setBg_color("");
  };
  return (
    <div
      id={id}
      className={inline_flex}
      onClick={() => handleBg_color()}
      style={{ backgroundColor: bg_color }}
    >
      {/* <input type="checkbox" className="ch" autocomplete="off" /> */}
      {src && <img className={img_css_class} src={src} />}
      <span className={p_px}>{label}</span>
    </div>
  );
}

RoundFilterButton.propTypes = {
  src: PropTypes.string,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
