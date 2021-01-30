import { useEffect } from "react";
import RoundFilterButton from "../components/shared/RoundFilterButton";
import MoreChips from "../components/shared/search/MoreChips";
import { main_container, chip_container } from "../css/searchSection.module.css";
import { useStore } from "../store";
import solrAPI from "./api/rest/solr";

const SearchComponent = () => {
  const { keywords, roles, companies } = useStore();

  useEffect(async () => {
    const testInput = ["denmark", "testing", "test"];
    //NOTE:this was only for testing solr queries , and should be debounced with 250,300ms delay when user is kw  querying
    // const testDAta = await solrAPI.querySearchData(testInput);
    debugger;
  }, []);

  return (
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
    </div>
  );
};
export default SearchComponent;
