import React from "react";
import CalendarIcon from "./CalendarIcon";
import LocationIcon from "./LocationIcon";
import RoleIcon from "./RoleIcon";

// opens on seatch icon click
/**
 * TODO :
 * maybe open searchbox on hover and close on click outside of seatch box
 * add pagination 100 items
 * search dropdowns location,role, calendarr icon that opens selectable modal that filters by post enrolment expiration date
 * SEARCH
 * --when sending api respose include field "yearsOfExperience required" so i can add filter by "Years of experience" , and also show graphs analytics for this metric
 * have no search button at first , use debounce on value enter
 * Graphs
 * analytics route (job posts per location graph, salaryes per location, per role)
 * modal popup for location smending info ,eventualy evem tay calculator (foe nwo tey embeding them into iframe)
 */
const iHeight = 20;
const inWidth = 20;
const SearchPopup = () => {
  return (
    <div id="search_popup">
      <div className="search_popupContainer">
        {/* make this into separate divs  so dropdowns fit */}
        {/* try out neumorphic design on search_popup  */}
        <h4 style={{ marginRight: "150px" }}>
          <RoleIcon width={inWidth} height={iHeight} /> Role
        </h4>
        <h4 style={{ marginRight: "150px" }}>
          <LocationIcon width={inWidth} height={iHeight} />
          Location
        </h4>
        <h4>
          <CalendarIcon width={inWidth} height={iHeight} />
          Expiration
        </h4>
      </div>
    </div>
  );
};

export default SearchPopup;

// CSS Prioritys : style  >ID  > class,pseudo-class, elements
