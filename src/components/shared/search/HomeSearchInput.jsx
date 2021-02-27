import { searchBox, searchInput, searchButton } from "../../../css/searchSection.module.css";
import { useStore } from "../../../store";
import PropTypes from "prop-types";

export default function HomeSearchInput({ placeholder }) {
  //handle space ,enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //TODO
      //apppend keword too tag ui, clear current input and combine solr query from all 3x inputs *company*role*keyword
      //UI make simpler static version of search from existing one

      //https://swr.vercel.app/docs/pagination#useswrinfinite ,
      //https://www.ibrahima-ndaw.com/blog/data-fetching-in-nextjs-using-useswr/#paginating-the-data-with-useswrinfinite:~:text=Paginating%20the%20data%20with%20useSWRInfinite,-It's
      //NOTE COULD TRIGGER LOAD NEXT PAGE ON 50% OF LIST REACHED OR SOMETHING LIKE THAT
      //INTERDECTION OBSERVER EXAMPLE FROM OLDER SWR PAGES API
      //https://sergiodxa.com/articles/swr/pagination
      //UI SKELETON
      //skeleton loader https://www.youtube.com/watch?v=_OZYvKsn60g
      console.log(`${e.key} was pressed`);
    }
  };

  return (
    <div className={searchBox} style={{ borderRadius: "5px" }}>
      <input
        style={{ width: "initial", color: "rgb(130 128 128)" }}
        id="homeSearchInput"
        className={searchInput}
        type="text"
        name=""
        placeholder={placeholder}
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
HomeSearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
