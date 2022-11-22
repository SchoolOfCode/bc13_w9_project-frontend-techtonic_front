import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import ResultsHeaders from "../ResultsHeaders";
import ResultsItem from "../ResultsItem";

function SearchDisplay() {
  const [searchValue, setSearchValue] = useState("");
  const [resources, setResources] = useState([]);

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    async function getResources() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
      const data = await response.json();
      console.log(data.results);
      setResources([...data.results]);
      console.log(resources);
    }
    getResources();
  }, [resources]);

  const filteredResults = resources.filter((eachItem) => {
    if (searchValue === "") return eachItem;
    else if (
      eachItem.name.toLowerCase().includes(searchValue.toLowerCase().trim())
    )
      return eachItem;
  });

  return (
    <div>
      <SearchBar
        value={searchValue}
        handleChange={handleChange}
        className="search-bar"
      />
      <ResultsHeaders />
      {filteredResults.map((eachItem, key) => {
        return (
          <ResultsItem
            key={key}
            title={eachItem.name}
            category={eachItem.url}
            language={eachItem.name}
            comment={eachItem.url}
          />
        );
      })}
    </div>
  );
}

export default SearchDisplay;
