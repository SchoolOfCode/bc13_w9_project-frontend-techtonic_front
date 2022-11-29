import React from "react";


/**
 * 
 * @param {string} value - Is a string generated as the user types into the input field.
 * @param {string} className - A string for the class name. 
 * @param {func} handleChange - A function that sets the SearchValue state to the e.target.value of the input field as the user types to search.
 * compares the user input with the Resources state (set initially to contain all resources from database fetch request (see AddAndSearchDisplay Ln - 17)) returning any results in the Resources state that contain a partial match.
 * 
 * @param {string} placeholder - A string that sets the text displayed in the input before any the user types to search..
 * 
 * @returns A search bar that calls a handleChange function as the user types to search.
 */
function SearchBar({ value, className, handleChange, placeholder }) {
  return (
    <div className="search-bar-container">
      <label htmlFor="search">Find resources:</label>
      <input
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default SearchBar;
