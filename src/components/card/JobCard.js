import React from "react";
import { job_column_new } from "../../css/home.module.css";
import PropTypes from "prop-types";

//Map job data to div/card here
export default function JobCard({ description }) {
  // debugger;

  //Randomize classes
  // let arr = [job_column, job_column2];
  // let randomClass = arr[Math.floor(Math.random() * arr.length)];

  return (
    <div className={job_column_new}>
      <h3>{description.Title}</h3>
      <h5>created:{description.CreatedTimestamp}</h5>
    </div>
  );
}
JobCard.propTypes = {
  description: PropTypes.object,
};
//TODO:
//Ideas
//JOb filtering/ with pre configured ssr paths ,for common searches eg. "software engineer"
//keep all extra features insde the app , dont redirrect elswhere to keep seemles experience

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
