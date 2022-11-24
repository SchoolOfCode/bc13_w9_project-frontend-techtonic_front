import React, { useEffect, useState } from "react";
import PopUp from "../PopUp/PopUp";
import SearchBar from "../SearchBar";
import ResultsTable from "../ResultsTable";
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
      const response = await fetch("http://localhost:3001/api/resources", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data.payload);
      setResources([...data.payload]);
    }
    getResources();
  }, [searchValue]);

  const filteredResults = resources.filter((eachItem) => {
    if (searchValue === "") return eachItem;
    else if (
      eachItem.title.toLowerCase().includes(searchValue.toLowerCase().trim())
    )
      return eachItem;
    else if (
      eachItem.url.toLowerCase().includes(searchValue.toLowerCase().trim())
    )
      return eachItem;
    else if (
      eachItem.language.toLowerCase().includes(searchValue.toLowerCase().trim())
    )
      return eachItem;
    else if (
      eachItem.category.toLowerCase().includes(searchValue.toLowerCase().trim())
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
        <PopUp
          className="pop-up"
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        />
        <SearchBar
          value={searchValue}
          handleChange={handleChange}
          className="search-bar"
        />
      </section>
      <section className="results-list">
        <ResultsTable results={filteredResults} />
      </section>
    </div>
  );
}

export default AddAndSearchDisplay;
