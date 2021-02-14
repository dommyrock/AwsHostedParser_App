import React from "react";
const Navbar = (props) => {
  return (
    <nav id="navbar" className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export default Navbar;
