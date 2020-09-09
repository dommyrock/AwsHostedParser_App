import React from "react";
import useComponentVisible from "../helpers/hooks/useComponentVisible";
// import Link from 'next/link'

const NavItem = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <li ref={ref} className="nav-item">
      <a
        href={props.link}
        className="icon-button"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
        title={props.title}
      >
        {props.icon}
      </a>
      {isComponentVisible && props.children}
    </li>
  );
};
//if open == true show children else none
export default NavItem;
