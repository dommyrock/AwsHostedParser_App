import { searchBox, searchInput, searchButton } from "../../../css/searchSection.module.css";
import { useStore } from "../../../store";

export default function HomeSearchInput() {
  //   const { filterCompanies, filterRoles } = useStore();

  //handle space ,enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //TODO
      //apppend keword too tag ui, clear current input and combine solr query from all 3x inputs *company*role*keyword
      //UI make simpler static version of search from existing one
      console.log(`${e.key} was pressed`);
    }
  };

  return (
    <div className={searchBox}>
      <input
        id="homeSearchInput"
        className={searchInput}
        type="text"
        name=""
        placeholder="Search"
        onKeyPress={(e) => handleKeyPress(e)}
      />
      <button className={searchButton} style={{ outline: "none", border: 0 }} href="#">
        <svg
          width={25}
          height={25}
          viewBox="0 0 16 16"
          className="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fillRule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </button>
    </div>
  );
}