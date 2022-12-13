import React, { useEffect, useState } from "react";
import PopUp from "../PopUp";
import SearchBar from "../SearchBar";
import ResultsTable from "../ResultsTable";
import Button from "../Button";

/** A component that contains an Add Resource button, a Search input and a table of results that filter on search.
 * @component
 * @returns Add resource button, Search input, Table of results.
 */

function AddAndSearchDisplay() {
  const defaultFields = {
    title: "",
    url: "",
    language: "",
    category: "",
    description: "",
  };

  const [searchValue, setSearchValue] = useState("");
  const [resources, setResources] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [newResource, setNewResource] = useState(defaultFields);

  //Handle submit for PopUp

  function handleSubmit(e) {
    e.preventDefault(); //prevents submission on enter key press
    postResource(); //fetch POST request
    setTimeout(() => setTrigger(false), 2500); //causes popup to disappear after submit
    setSubmit(true);
    setNewResource(defaultFields); //resets the newResource state to empty default fields
  }

  //handleChange for SearchBar

  function handleChange(e) {
    const value = e.target.value;
    setSearchValue(value.toLowerCase().trim());
  }

  //this is to assign values to newResource object from inputs

  function handleInput(e) {
    const value = e.target.value;
    setNewResource({
      ...newResource,
      [e.target.name]: value,
    });
  }

  /** Get resources is nested in useEffect for async functionality. It sends a fetch request to the resources API and returns all data from database.
   *
   */
  useEffect(() => {
    async function getResources() {
      const response = await fetch(
        "https://lumen-api.onrender.com/api/v2/resources",
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(data.payload);
      setResources([...data.payload]);
    }
    getResources();
  }, [submit]);

  /** This allows users to post a resource into the database using the resources API POST method.
   *
   */
  async function postResource() {
    try {
      const response = await fetch(
        "https://lumen-api.onrender.com/api/v2/resources",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify({
            title: newResource.title,
            url: newResource.url,
            language: newResource.language,
            category_id: newResource.category,
            submission_notes: newResource.description,
          }),
        }
      );

      if (response.status === 200) {
        console.log("Resource added successfully");
      } else {
        console.log("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  }

  /** Uses a combination of filter and map to add a search filter feature to the search input. It compares the data from the fetch request with the input value as the user is typing into the search input. Returns partial matches in real-time.
   *
   */

  function findMatch(key) {
    return key.toLowerCase().includes(searchValue);
  }

  //results filtered to display in table
  const filteredResults = resources.filter(
    ({ title, url, language, category, submission_notes }) => {
      return (
        findMatch(title) ||
        findMatch(url) ||
        findMatch(language) ||
        findMatch(category) ||
        findMatch(submission_notes)
      );
    }
  );

  return (
    <div>
      <section className="add-and-search-container">
        <Button
          className="add-button"
          handleClick={() => {
            setTrigger(true);
            setSubmit(false);
          }}
          text="Add a resource"
        />
        <PopUp
          className="pop-up"
          trigger={trigger}
          handleClick={() => {
            //for close-button
            setTrigger(false);
            setSubmit(false);
          }}
          handleSubmit={handleSubmit} //for submit-button
          submit={submit}
          resource={newResource}
          handleChange={handleInput}
        />
        <SearchBar
          value={searchValue}
          handleChange={handleChange}
          className="search-bar"
          placeholder="Search by topic..."
        />
      </section>
      <section className="results-list">
        <ResultsTable
          results={filteredResults}
          headers={[
            "Title",
            "Category",
            "Language",
            "Comment",
            "Date",
            "Rating",
          ]}
        />
      </section>
    </div>
  );
}

export default AddAndSearchDisplay;
