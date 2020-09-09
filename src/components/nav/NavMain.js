import React from "react";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import SearchIcon from "../search/SearchIcon";
import Link from "next/link";
//Bootstrap icons: https://icons.getbootstrap.com/
//Ionic icons: https://ionicons.com/
//TODO: install npm csstransition
// from https://www.youtube.com/watch?v=IF6k0uZuypA&list=WL&index=71&t=0s
const NavMain = () => {
  return (
    <Navbar>
      <SearchIcon width={25} height={25} />
      <NavItem
        link="#"
        title="Menu"
        icon={
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-three-dots"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        }
      >
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <NavItem
        link="/analytics"
        title="Analytics"
        icon={
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-graph-up"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        }
      ></NavItem>
    </Navbar>
  );
};

export default NavMain;
