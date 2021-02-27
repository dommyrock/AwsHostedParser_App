import { useCallback, useEffect, useRef, useState } from "react";
import RoundFilterButton from "../components/shared/RoundFilterButton";
import MoreChips from "../components/shared/search/MoreChips";
import { main_container, chip_container } from "../css/searchSection.module.css";
import { useStore } from "../store";
import solrAPI from "./api/rest/solr";
import mockApi from "./api/mockApi";
import JobCardV2 from "../components/card/JobCardV2";
import { job_div_main } from "../css/jobCard.module.css";
import HomeSearchInput from "../components/shared/search/HomeSearchInput";

const SearchComponent = () => {
  const { keywords, roles, companies } = useStore();

  const [mockstate, setMockState] = useState([]);
  const divRef = useRef();

  useEffect(async () => {
    //mock data
    const testResponse = await mockApi.googleMockQuery();
    setMockState(testResponse.data);
    debugger;

    //docs:https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
    //TODO
    //1 Also have separate query on app mount tht fetches Company logos(urls from cdn) w only 3props, id,company,logoUrl
    //2 NOTE:this was only for testing solr queries , and should be debounced with 250,300ms delay when user is kw  querying
    //const testInput = ["denmark", "testing", "test"];
    // const testDAta = await solrAPI.querySearchData(testInput);
    //3 abstract Bussiness logic in custom hooks where possible , add suspense , loading ,error states (return those from custom hook , so i can just use it here )
    //ref => https://www.youtube.com/watch?v=J-g9ZJha8FE&feature=youtu.be&t=481
  }, []);

  return (
    <>
      <div id="main_container" className={main_container}>
        <div id="companies_chipContainer" className={chip_container}>
          {companies.map((x) => (
            <RoundFilterButton key={x.id} id={x.id} label={x.label} src={x.src} type={x.type} />
          ))}
          <MoreChips id="more-companies" />
        </div>
        <div id="roles_chipContainer" className={chip_container}>
          {roles.map((x) => (
            <RoundFilterButton key={x.id} id={x.id} label={x.label} src={x.src} type={x.type} />
          ))}
          <MoreChips id="more-roles" />
        </div>
        <div
          id="kewords_chipContainer"
          className={chip_container}
          style={{ display: "block", borderRight: "none" }}
        >
          <h4>Job description keywords:</h4>
          <HomeSearchInput placeholder="Testing,api design..." />
        </div>
      </div>
      {/* Render Cards */}
      {mockstate.jobs?.length > 0 && (
        <div className={job_div_main}>
          <ol>
            {mockstate.jobs.map((job, index) => (
              <JobCardV2 key={index} job={job} />
            ))}
          </ol>
        </div>
      )}
    </>
  );
};
export default SearchComponent;
