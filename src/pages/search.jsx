import { useEffect, useRef, useState } from "react";
import RoundFilterButton from "../components/shared/RoundFilterButton";
import MoreChips from "../components/shared/search/MoreChips";
import { main_container, chip_container } from "../css/searchSection.module.css";
import { useStore } from "../store";
import solrAPI from "./api/rest/solr";
import mockApi from "./api/mockApi";
import JobCardV2 from "../components/card/JobCardV2";

const SearchComponent = () => {
  const { keywords, roles, companies } = useStore();

  const [mockstate, setMockState] = useState([]);
  const divRef = useRef();

  useEffect(async () => {
    //mock data
    const testResponse = await mockApi.googleMockQuery();
    setMockState(testResponse.data);
    debugger;
    // This is example of how we can inject hml inside HTML node in react
    divRef.current.innerHTML = testResponse.data.jobs[0].description;

    /*NEXT 
      aar s = '<div id="myDiv"></div>';
      var htmlObject = document.createElement('div');
      htmlObject.innerHTML = s;
      htmlObject.getElementById("myDiv").style.marginTop = something;
        1.1 Add company logo to job div so its imediately parsable by humans
        1.2 implement jobs divs, implement job post sharing links (to my site)
    */

    //TODO
    //1 Also have separate query on app mount tht fetches Company logos(urls from cdn) w only 3props, id,company,logoUrl
    //2 NOTE:this was only for testing solr queries , and should be debounced with 250,300ms delay when user is kw  querying
    //const testInput = ["denmark", "testing", "test"];
    // const testDAta = await solrAPI.querySearchData(testInput);
  }, []);

  return (
    <>
      <div className={main_container}>
        <div className={chip_container}>
          {companies.map((x) => (
            <RoundFilterButton key={x.id} id={x.id} label={x.label} src={x.src} type={x.type} />
          ))}
          <MoreChips id="more-companies" />
        </div>
        <div className={chip_container}>
          {roles.map((x) => (
            <RoundFilterButton key={x.id} id={x.id} label={x.label} src={x.src} type={x.type} />
          ))}
          <MoreChips id="more-roles" />
        </div>
        {/* Render childeren with ref.current.innerHTML  */}
      </div>
      <JobCardV2 jobs={mockstate.jobs} />
      {/* Bellow Example should be inside JobCardV2 component */}
      <div
        id="innerHTML"
        ref={divRef}
        style={{ display: "flex", flexDirection: "column", maxWidth: "80%" }}
      ></div>
    </>
  );
};
export default SearchComponent;
