//Compomnent made by me for tsting fetch logic
import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Test dat </h1>
      </div>
    </div>
  );
};

export default About;
// // //Get SSR Data on initial page load:
// About.getInitialProps = async (ctx) => {
//   const response = useSWR(GET_BOOKS);
//   const json = await response.json();
//   return { initialAboutData: json };

//hooks api: https://www.apollographql.com/docs/react/v3.0-beta/api/react/hooks/

//Queries info: https://www.apollographql.com/docs/react/v3.0-beta/data/queries/
