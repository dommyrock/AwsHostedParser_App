import { useStore } from "../../../store";
import useComponentVisible from "../../helpers/hooks/useComponentVisible";
import Search_Input from "../Search_Input";
import {
  p_px,
  inline_flex,
  img_css_class,
  mobile_max_width,
} from "../../../css/searchSection.module.css";
import { useEffect } from "react";

//#region inner style
let containerStyle = {
  display: "flex",
  flexDirrection: "row",
  justifyContent: "space-evenly",
  textAlign: "left",
  position: "absolute",
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  borderRadius: "10px",
  background: "#fff",
  overflow: "hidden",
  minWidth: "400px",
  padding: "3px",
  top: "3px",
};
const ulStyle = {
  backgroundColor: "rgba(210, 211, 215,0.1)",
};

const columnStyle = {
  marginTop: "55px",
  display: "flex",
  flexDirection: "columns",
  justifyItems: "center",
  padding: "0.5rem",
};
//#endregion
export default function MoreChips({ id }) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const {
    dropdown_companies,
    filtered_companies,
    dropdown_roles,
    filtered_roles,
    removeDropdownCompany,
    removeDropdownRole,
    addRole,
    addCompany,
  } = useStore();

  //Zustad SBSCRIPTION example
  // const filterSubscription = useStore.subscribe(
  //   (filtered_companies, previous) => console.log(filtered_companies, previous),
  //   (state) => state.filtered_companies
  // );

  //NOTE :This effect is called 2x (once for every component we have in search.jsx )
  useEffect(() => {
    //Exited dropdowns
    if (!ref.current) {
      //Reset data on intial render, and exit
      useStore.setState({ filtered_companies: dropdown_companies });
      useStore.setState({ filtered_roles: dropdown_roles });

      //Calculate container top position
      containerStyle = {
        ...containerStyle,
        top: `${
          document.getElementById("navbar").clientHeight +
          document.getElementById("main_container").clientHeight
        }px`,
      };
    }
  }, [isComponentVisible]);

  const handleClick = (item) => {
    switch (item.type) {
      case "company":
        addCompany(item);
        //remove from dopdown and filered list
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
  function detectMob() {
    return window.innerWidth <= 800 && window.innerHeight <= 600;
  }

  //On search input show filtered lists[filtered_companies,filtered_roles] else show dropdown lists
  return (
    <>
      <div
        id="more-button"
        className={inline_flex}
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        style={{ backgroundColor: "#cccc", maxHeight: "24px" }}
      >
        <span className={p_px}>More</span>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width={16}
          height={16}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width={20}
          height={20}
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isComponentVisible && id === "more-companies" && (
        <div id="companiesDropdown" ref={ref} style={containerStyle} className={mobile_max_width}>
          <Search_Input />
          {/* Companies and roles are split and displayed in two rows  */}
          <div style={columnStyle}>
            <ul style={ulStyle}>
              {filtered_companies.slice(0, filtered_companies.length / 2).map((company) => (
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
              {filtered_companies.slice(filtered_companies.length / 2).map((company) => (
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
                {filtered_roles.slice(0, filtered_roles.length / 2).map((kw) => (
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
                {filtered_roles.slice(filtered_roles.length / 2).map((kw) => (
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
