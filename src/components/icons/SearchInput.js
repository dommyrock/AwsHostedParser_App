import React from "react";
import PropTypes from "prop-types";
import { search } from "../../css/searchBox.module.css";

const SearchInput = ({ data, listName, onChangeCallback }) => {
  function handleChange(event) {
    onChangeCallback(event.target.value);
  }
  return (
    <>
      <input type="text" spellCheck="false" placeholder="Any" list={listName} onChange={handleChange} />
      <datalist id={listName}>
        {data.map((option) => (
          <option value={option.data} key={option.key} />
        ))}
      </datalist>
    </>
  );
};
SearchInput.propTypes = {
  data: PropTypes.array.isRequired,
  listName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default SearchInput;
