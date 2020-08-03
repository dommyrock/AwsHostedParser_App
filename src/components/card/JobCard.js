import React from "react";
import { job_column_new, background_img1, background_img2, background_img3 } from "../../css/jobCard.module.css";
import PropTypes from "prop-types";

//Map job data to div/card here
export default function JobCard({ data }) {
  //   debugger;

  //Randomize classes
  let bgImgArr = [background_img1, background_img2, background_img3];
  //randomise data from Array
  let randomClass = bgImgArr[Math.floor(Math.random() * bgImgArr.length)];
  //moch data for testign
  let randArr = ["Frontend developer", "Backend developer", "Database engineer", "Product manager"];
  let randDEv = randArr[Math.floor(Math.random() * randArr.length)];
  let randLogoArr = ["/adecco-logo.png", "/microblink-logo-min.png", "/rimac-logo-min.png"];
  let randLogo = randLogoArr[Math.floor(Math.random() * randLogoArr.length)];

  return (
    <div className={job_column_new}>
      <div className={randomClass}>
        {/* <h3>{data.Title}</h3>
      <h5>created:{data.CreatedTimestamp}</h5> */}
        <img src={randLogo} width="80px" alt="company Logo" className="logo" />
        <h4>{randDEv}</h4>
        <p>{data.Title}</p>
        <p>Zagreb, Hektoroviceva 2234</p>
      </div>
    </div>
  );
}
JobCard.propTypes = {
  data: PropTypes.object,
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
