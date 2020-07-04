import React from "react";
import { job_column } from "./home.module.css";
import PropTypes from "prop-types";

//Map job data to div/card here
export default function JobContainer({ description }) {
  // debugger;
  return (
    <div className={job_column}>
      <h3>{description.Title}</h3>

      <h5>created:{description.CreatedTimestamp}</h5>
    </div>
  );
}
JobContainer.propTypes = {
  description: PropTypes.object,
};
//TODO:

/*
 Cache ssr responses
https://www.youtube.com/watch?v=a7JigiLw_OY
*/

//1 https://www.youtube.com/watch?v=61TngxLrP_0&list=WL&index=111&t=1098s
//Conclusion
// use getServerSideprops when i dont need API, and other sites dont consume my api (i query directly to db)

//getStaticPaths (for pagination)when i want to ssr
//https://www.youtube.com/watch?v=MxlmfI9IxVs&list=WL&index=108

//2 add css for searchbox ,+ add filtering , boxes/cards for job details(later for expences per location)

//Pass props to children example:
//https://reactjs.org/docs/components-and-props.html