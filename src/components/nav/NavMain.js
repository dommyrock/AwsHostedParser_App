import React from "react";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import SearchIcon from "../search/SearchIcon";
//Bootstrap icons: https://icons.getbootstrap.com/
//Ionic icons: https://ionicons.com/
//TODO: install npm csstransition
// from https://www.youtube.com/watch?v=IF6k0uZuypA&list=WL&index=71&t=0s
const NavMain = () => {
  return (
    <Navbar>
      <SearchIcon width={25} height={25} />
      <NavItem
        icon={
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-three-dots"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            />
          </svg>
        }
      >
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
};

export default NavMain;
