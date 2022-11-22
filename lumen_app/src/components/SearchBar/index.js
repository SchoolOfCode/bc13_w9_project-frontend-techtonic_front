import React from "react";

function SearchBar({ value, className, handleChange }) {
  return (
    <div className="search-bar-container">
      <label for="search">Find resources:</label>
      <input
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search by topic..."
        className={className}
      />
    </div>
  );
}

export default SearchBar;
