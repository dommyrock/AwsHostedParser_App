import { inline_flex, p_px, img_css_class } from "../../css/searchSection.module.css";
import PropTypes from "prop-types";
import { useStore } from "../../store";
import { useState } from "react";

export default function RoundFilterButton({ id, src, label, type }) {
  const [bg_color, setBg_color] = useState("");
  const { removeRole, removeCompany, addDropdownRole, addDropdownCompany } = useStore();

  const handleChipColor = () => {
    if (!bg_color) setBg_color("#77747459");
    else setBg_color("");
  };
  const handleRoles = () => {
    if (type === "role") {
      addDropdownRole(label);
      removeRole(label);
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
          handleRoles(label);
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
