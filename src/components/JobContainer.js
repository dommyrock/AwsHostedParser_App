import React from "react";
import { job_column } from "./home.module.css";
import PropTypes from "prop-types";

//Map job data to div/card here
export default function JobContainer({ description }) {
  debugger;
  return (
    <div className={job_column}>
      <h3>{description.Title}</h3>

      <h5>created:{description.CreatedTimestamp}</h5>
    </div>
  );
}
JobContainer.propTypes = {
  item: PropTypes.object,
};
//TODO:
//add css for search box ,+ add filtering , boxes/cards for job details(later for expences per location)

//Pass props to children example:
//https://reactjs.org/docs/components-and-props.html
