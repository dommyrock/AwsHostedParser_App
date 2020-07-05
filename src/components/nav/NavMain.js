import React from "react";
import Navbar from "./Navbar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
//icons: https://icons.getbootstrap.com/
//TODO: install npm csstransition
// from https://www.youtube.com/watch?v=IF6k0uZuypA&list=WL&index=71&t=0s
const NavMain = () => {
  return (
    <Navbar>
      <NavItem
        icon={
          <svg
            viewBox="0 0 16 16"
            className="bi bi-arrow-down-circle-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
            />
          </svg>
        }
      >
        <DropdownMenu></DropdownMenu>
      </NavItem>
      <NavItem
        icon={
          <svg
            viewBox="0 0 16 16"
            className="bi bi-arrow-up-circle-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-10.646.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"
            />
          </svg>
        }
      />
    </Navbar>
  );
};

export default NavMain;
