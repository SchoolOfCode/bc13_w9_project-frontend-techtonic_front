import React, { useEffect, useState } from "react";
import PopUp from "../PopUp/PopUp";
import SearchBar from "../SearchBar";
import ResultsHeaders from "../ResultsHeaders";
import ResultsItem from "../ResultsItem";
import Button from "../Button";

function AddAndSearchDisplay() {
  const [searchValue, setSearchValue] = useState("");
  const [resources, setResources] = useState([]);
  const [buttonPopup, setButtonPopup] = useState(false);

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
    else if (
      eachItem.url.toLowerCase().includes(searchValue.toLowerCase().trim())
    )
      return eachItem;
  });

  return (
    <div>
      <section className="add-and-search-container">
        <Button
          className="add-button"
          handleClick={() => setButtonPopup(true)}
          text="Add a resource"
        />
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
        <SearchBar
          value={searchValue}
          handleChange={handleChange}
          className="search-bar"
        />
      </section>
      <section className="results-list">
        <ResultsHeaders />
        {filteredResults.map((eachItem, key) => {
          return (
            <ResultsItem
              key={key}
              title={eachItem.name}
              category={eachItem.url}
              language={eachItem.name}
              comment={eachItem.url}
              link={eachItem.name}
            />
          );
        })}
      </section>
    </div>
  );
}

export default AddAndSearchDisplay;
