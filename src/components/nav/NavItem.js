import React from "react";
import useComponentVisible from "../helpers/hooks/useComponentVisible";

const NavItem = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <li ref={ref} className="nav-item">
      <a href="#" className="icon-button" onClick={() => setIsComponentVisible(!isComponentVisible)}>
        {props.icon}
      </a>
      {isComponentVisible && props.children}
    </li>
  );
};
//if open == true show children else none
export default NavItem;
