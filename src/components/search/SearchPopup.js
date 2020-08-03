import React, { useState } from "react";
import CalendarIcon from "./CalendarIcon";
import LocationIcon from "./LocationIcon";
import RoleIcon from "./RoleIcon";
import SearchInput from "./SearchInput";
import DatePicker from "react-datepicker";
// opens on seatch icon click
/**
 * TODO :
 * maybe open searchbox on hover and close on click outside of seatch box
 * add pagination 100 items
 * search dropdowns location,role, calendarr icon that opens selectable modal that filters by post enrolment expiration date
 * SEARCH
 * --when sending api respose include field "yearsOfExperience required" so i can add filter by "Years of experience" , and also show graphs analytics for this metric
 * have no search button at first , use debounce on value enter
 * Since i prefetch data i can imediately filter shown data on input with debounce of 200-500ms
 * Graphs
 * analytics route (job posts per location graph, salaryes per location, per role)
 * modal popup for location smending info ,eventualy evem tay calculator (foe nwo tey embeding them into iframe)
 */
const iHeight = 20;
const iWidth = 20;
const SearchPopup = () => {
  //Dropdown locations: Croatia,Austria,Remote (at firsst)
  //Roles ,SDE, Frontend, backend ,project manager...
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(null); //today new Date()
  //could also useReducer +Context for this
  function handleRoleChange(taget) {
    setRole(taget);
  }
  function handleLocationChange(taget) {
    setLocation(taget);
  }
  //changes parent container width /h to fit calendar
  function handleClick() {
    document.getElementById("search_popup").style.height = "330px";
    //Get parent div's width
  }
  function handleSElect() {
    document.getElementById("search_popup").style.height = "150px";
  }
  return (
    <div id="search_popup">
      <div className="search_popupContainer">
        {/* make this into separate divs  so dropdowns fit */}
        {/* try out neumorphic design on search_popup  */}
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
          <SearchInput data={countries} listName="countries" onChangeCallback={handleLocationChange} />
        </h5>
      </div>
      <div className="search_popupContainer">
        <h5>
          <CalendarIcon width={iWidth} height={iHeight} />
          Expiration
          <br />
          <DatePicker
            selected={startDate}
            disabled={true} //NOTE: comment this out when i want this option
            onInputClick={handleClick}
            onChange={(date) => setStartDate(date)}
            onSelect={handleSElect}
            popperModifiers={{
              offset: {
                enabled: true,
                offset: "-90px",
              },
            }}
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
