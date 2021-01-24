import { useEffect } from "react";
import RoundFilterButton from "../components/shared/RoundFilterButton";
import MoreChips from "../components/shared/search/MoreChips";
import { main_container, chip_container } from "../css/searchSection.module.css";
import { useStore } from "../store";
import solrAPI from "./api/rest/solr";

const SearchComponent = () => {
  const { keywords, companies } = useStore();

  useEffect(async () => {
    const keywords = ["denmark", "testing", "test"];
    const testDAta = await solrAPI.querySearchData(keywords);
    debugger;
  });

  return (
    <div className={main_container}>
      <div className={chip_container}>
        {companies.map((x) => (
          <RoundFilterButton key={x.id} id={x.id} label={x.label} src={x.src} type={x.type} />
        ))}
        <MoreChips id="more-companies" />
      </div>
      <div className={chip_container}>
        {keywords.map((x) => (
          <RoundFilterButton key={x.id} id={x.id} label={x.label} src={x.src} type={x.type} />
        ))}
        <MoreChips id="more-keywords" />
      </div>
    </div>
  );
};
export default SearchComponent;
