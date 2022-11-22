import React from "react";

function SearchBar({ value, className, handleChange }) {
  return (
    <div>
      <label for="search">Find Resources:</label>
      <input
        name="search"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search..."
        className={className}
      />
    </div>
  );
}

export default SearchBar;
