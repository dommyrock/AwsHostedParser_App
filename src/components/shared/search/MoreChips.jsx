import { useStore } from "../../../store";
import useComponentVisible from "../../helpers/hooks/useComponentVisible";
import Search_Input from "../Search_Input";
import {
  p_px,
  inline_flex,
  img_css_class,
  mobile_max_width,
} from "../../../css/searchSection.module.css";

export default function MoreChips({ id }) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const {
    dropdown_companies,
    dropdown_roles,
    removeDropdownCompany,
    removeDropdownRole,
    addRole,
    addCompany,
  } = useStore();
  //   const [bg_color, setBg_color] = useState("");
  //   const handleChipColor = () => {----------> NOTE:This was buggy so i removed it for now
  //     if (!bg_color) setBg_color("#77747459");
  //     else setBg_color("");
  //   };
  const handleClick = (item) => {
    debugger;
    switch (item.type) {
      case "company":
        addCompany(item);
        removeDropdownCompany(item.label);
        break;
      case "role":
        addRole(item);
        removeDropdownRole(item.label);
        break;
      default:
        break;
    }
  };

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
        <div id="companiesDropdown" ref={ref} style={containerStyle} className={mobile_max_width}>
          <Search_Input />
          <div style={columnStyle}>
            <ul style={ulStyle}>
              {dropdown_companies.slice(0, dropdown_companies.length / 2).map((company) => (
                <li key={company.id}>
                  <div
                    id={company.id}
                    className={inline_flex}
                    style={{ borderRadius: "10px" }}
                    onClick={() => handleClick(company)}
                  >
                    {company.src && (
                      <img className={img_css_class} src={company.src} alt={company.label} />
                    )}
                    <span className={p_px}>{company.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={columnStyle}>
            <ul style={ulStyle}>
              {dropdown_companies.slice(dropdown_companies.length / 2).map((company) => (
                <li key={company.id}>
                  <div
                    id={company.id}
                    className={inline_flex}
                    style={{ borderRadius: "10px" }}
                    onClick={() => handleClick(company)}
                  >
                    {company.src && (
                      <img className={img_css_class} src={company.src} alt={company.label} />
                    )}
                    <span className={p_px}>{company.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isComponentVisible &&
        id === "more-roles" && ( //NOTE: keywords should have anoter input where user can type "Contains aditional keywords ..... which solar handles"
          <div id="rolesDropdown" ref={ref} style={containerStyle} className={mobile_max_width}>
            <Search_Input />
            <div style={columnStyle}>
              <ul style={ulStyle}>
                {dropdown_roles.slice(0, dropdown_roles.length / 2).map((kw) => (
                  <li key={kw.id}>
                    <div
                      id={kw.id}
                      className={inline_flex}
                      style={{ borderRadius: "10px" }}
                      onClick={() => handleClick(kw)}
                    >
                      <span className={p_px}>{kw.label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div style={columnStyle}>
              <ul style={ulStyle}>
                {dropdown_roles.slice(dropdown_roles.length / 2).map((kw) => (
                  <li key={kw.id}>
                    <div
                      id={kw.id}
                      className={inline_flex}
                      style={{ borderRadius: "10px" }}
                      onClick={() => handleClick(kw)}
                    >
                      <span className={p_px}>{kw.label}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
    </>
  );
}
const ulStyle = {
  backgroundColor: "rgba(210, 211, 215,0.1)",
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
  position: "inherit",
};

const columnStyle = {
  marginTop: "55px",
  display: "flex",
  flexDirection: "columns",
  justifyItems: "center",
  padding: "0.5rem",
};
