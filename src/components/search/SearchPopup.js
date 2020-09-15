import React, { useState } from "react";
import LocationIcon from "./LocationIcon";
import RoleIcon from "./RoleIcon";
import SearchInput from "./SearchInput";

const iHeight = 20;
const iWidth = 20;

const SearchPopup = () => {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  function handleRoleChange(taget) {
    setRole(taget);
  }
  function handleLocationChange(taget) {
    setLocation(taget);
  }
  //changes parent container width /h to fit calendar

  return (
    <div id="search_popup">
      <div className="search_popupContainer">
        <h5>
          <RoleIcon width={iWidth} height={iHeight} />
          Role
          <br />
          <SearchInput data={roles} listName="roles" onChangeCallback={handleRoleChange} />
        </h5>
      </div>
      <div className="search_popupContainer">
        <h5>
          <LocationIcon width={iWidth} height={iHeight} />
          Location
          <br />
          <SearchInput
            data={countries}
            listName="countries"
            onChangeCallback={handleLocationChange}
          />
        </h5>
      </div>
    </div>
  );
};

export default SearchPopup;
// CSS Prioritys : style  >ID  > class,pseudo-class, elements
const countries = [
  { data: "Austria", key: "aus" },
  { data: "Croatia", key: "cro" },
  { data: "USA", key: "usa" },
  { data: "Remote", key: "remote" },
];
const roles = [
  { data: "Software engineer", key: "sde" },
  { data: "Backend developer", key: "bd" },
  { data: "Frontend developer", key: "fd" },
  { data: "Project manager", key: "pm" },
  { data: "Dev ops", key: "do" },
  { data: "System enginner", key: "se" },
  { data: "Designer", key: "d" },
];
//Context API + useReducer for global state >https://dev.to/email2vimalraj/react-hooks-lift-up--pass-down-state-using-usecontext-and-usereducer-5ai0
//Callbak from Child > Parent Component >https://webomnizz.com/change-parent-component-state-from-child-using-hooks-in-react/

//Get elements current dimensions
// const currentH = document.getElementById("search_popup").getBoundingClientRect().height;
////https://stackoverflow.com/questions/294250/how-do-i-retrieve-an-html-elements-actual-width-and-height
